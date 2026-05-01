import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { translations } from "@/i18n/translations";
import { useCMS } from "@/contexts/CMSContext";
import { cmsRegistry, cmsCategories, type CMSEntry } from "@/cms/registry";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { LogOut, ImageIcon, Link as LinkIcon, Type } from "lucide-react";

const typeIcon = (type: CMSEntry["type"]) => {
  if (type === "image") return <ImageIcon className="h-3.5 w-3.5" />;
  if (type === "link") return <LinkIcon className="h-3.5 w-3.5" />;
  return <Type className="h-3.5 w-3.5" />;
};

const FieldEditor = ({ entry, onSaved }: { entry: CMSEntry; onSaved: () => void }) => {
  const { rows } = useCMS();
  const { toast } = useToast();
  const dbRow = rows[entry.key];

  // Initialwert: DB → translations.ts (für Texte) → Registry-Fallback
  const initial =
    dbRow?.value ??
    (entry.type === "text" ? translations[entry.key]?.de ?? entry.fallback : entry.fallback);

  const [value, setValue] = useState(initial);
  const [saving, setSaving] = useState(false);
  const dirty = value !== initial;

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from("site_content")
        .upsert(
          { key: entry.key, value, type: entry.type, category: entry.category },
          { onConflict: "key" }
        );
      if (error) throw error;
      await onSaved();
      toast({ title: "Gespeichert", description: entry.label });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unbekannter Fehler";
      toast({ title: "Fehler", description: message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    setSaving(true);
    try {
      const { error } = await supabase.from("site_content").delete().eq("key", entry.key);
      if (error) throw error;
      const fallback =
        entry.type === "text" ? translations[entry.key]?.de ?? entry.fallback : entry.fallback;
      setValue(fallback);
      await onSaved();
      toast({ title: "Auf Standard zurückgesetzt", description: entry.label });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unbekannter Fehler";
      toast({ title: "Fehler", description: message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="border border-border rounded-lg p-4 bg-card space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <Label htmlFor={`field-${entry.key}`} className="font-medium">
              {entry.label}
            </Label>
            <Badge variant="outline" className="gap-1 text-xs">
              {typeIcon(entry.type)}
              {entry.type}
            </Badge>
            {dbRow ? (
              <Badge variant="default" className="text-xs">CMS</Badge>
            ) : (
              <Badge variant="secondary" className="text-xs">Standard</Badge>
            )}
          </div>
          <p className="font-mono text-[11px] text-muted-foreground mt-1 break-all">{entry.key}</p>
        </div>
      </div>

      {entry.type === "text" && (
        <Textarea
          id={`field-${entry.key}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={Math.min(8, Math.max(2, value.split("\n").length))}
        />
      )}

      {entry.type === "image" && (
        <div className="space-y-2">
          <Input
            id={`field-${entry.key}`}
            type="url"
            placeholder="https://…/bild.webp"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {value && (
            <div className="border border-border rounded-md p-2 bg-muted/30 inline-block">
              <p className="text-xs text-muted-foreground mb-1">Vorschau:</p>
              <img
                src={value}
                alt={`Vorschau: ${entry.label}`}
                className="max-h-32 max-w-full rounded object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          )}
        </div>
      )}

      {entry.type === "link" && (
        <div className="space-y-2">
          <Input
            id={`field-${entry.key}`}
            type="url"
            placeholder="https://…"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {value && (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline inline-flex items-center gap-1"
            >
              <LinkIcon className="h-3 w-3" />
              Link testen
            </a>
          )}
        </div>
      )}

      <div className="flex items-center justify-end gap-2 pt-1">
        {dbRow && (
          <Button variant="outline" size="sm" onClick={handleReset} disabled={saving}>
            Zurücksetzen
          </Button>
        )}
        <Button size="sm" onClick={handleSave} disabled={saving || !dirty}>
          {saving ? "Speichere…" : "Speichern"}
        </Button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const { rows, refresh } = useCMS();
  const [search, setSearch] = useState("");

  const grouped = useMemo(() => {
    const q = search.trim().toLowerCase();
    const map = new Map<string, CMSEntry[]>();
    for (const cat of cmsCategories) map.set(cat, []);
    for (const entry of cmsRegistry) {
      if (q) {
        const haystack = `${entry.key} ${entry.label} ${entry.category}`.toLowerCase();
        if (!haystack.includes(q)) continue;
      }
      map.get(entry.category)?.push(entry);
    }
    return Array.from(map.entries()).filter(([, items]) => items.length > 0);
  }, [search]);

  const totalOverrides = Object.keys(rows).length;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="font-serif text-xl font-semibold">CMS Admin</h1>
            <p className="text-xs text-muted-foreground">
              {cmsRegistry.length} Inhalte · {totalOverrides} angepasst
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={() => navigate("/")}>
              Zur Website
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Input
            placeholder="Suche nach Bezeichnung, Key oder Kategorie…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {grouped.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            Keine Inhalte gefunden.
          </div>
        ) : (
          <Accordion
            type="multiple"
            defaultValue={grouped.map(([cat]) => cat)}
            className="space-y-3"
          >
            {grouped.map(([category, entries]) => (
              <AccordionItem
                key={category}
                value={category}
                className="border border-border rounded-lg bg-card px-4"
              >
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg">{category}</span>
                    <Badge variant="secondary">{entries.length}</Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-4">
                  <div className="space-y-3">
                    {entries.map((entry) => (
                      <FieldEditor key={entry.key} entry={entry} onSaved={refresh} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
