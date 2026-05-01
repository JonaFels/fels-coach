import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { translations } from "@/i18n/translations";
import { useCMS } from "@/contexts/CMSContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { overrides, refresh } = useCMS();
  const { toast } = useToast();

  const [search, setSearch] = useState("");
  const [editKey, setEditKey] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [saving, setSaving] = useState(false);

  // Alle verfügbaren Keys aus translations.ts (DE als Quelle)
  const allKeys = useMemo(() => Object.keys(translations).sort(), []);

  const filtered = useMemo(() => {
    if (!search.trim()) return allKeys;
    const q = search.toLowerCase();
    return allKeys.filter((k) => {
      if (k.toLowerCase().includes(q)) return true;
      const current = overrides[k] ?? translations[k]?.de ?? "";
      return current.toLowerCase().includes(q);
    });
  }, [allKeys, search, overrides]);

  const handleEdit = (key: string) => {
    setEditKey(key);
    setEditValue(overrides[key] ?? translations[key]?.de ?? "");
  };

  const handleSave = async () => {
    if (!editKey) return;
    setSaving(true);
    try {
      const { error } = await supabase
        .from("site_content")
        .upsert({ key: editKey, value: editValue }, { onConflict: "key" });
      if (error) throw error;
      await refresh();
      toast({ title: "Gespeichert", description: `„${editKey}" wurde aktualisiert.` });
      setEditKey(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unbekannter Fehler";
      toast({ title: "Fehler", description: message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if (!editKey) return;
    setSaving(true);
    try {
      const { error } = await supabase.from("site_content").delete().eq("key", editKey);
      if (error) throw error;
      await refresh();
      toast({ title: "Zurückgesetzt", description: "Originaltext wird wieder angezeigt." });
      setEditKey(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unbekannter Fehler";
      toast({ title: "Fehler", description: message, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-xl font-semibold">CMS Admin</h1>
            <p className="text-xs text-muted-foreground">Website-Texte bearbeiten</p>
          </div>
          <div className="flex items-center gap-2">
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

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <Input
            placeholder="Suche nach Key oder Inhalt…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-md"
          />
          <p className="text-sm text-muted-foreground">
            {filtered.length} von {allKeys.length} Texten · {Object.keys(overrides).length} überschrieben
          </p>
        </div>

        <div className="border border-border rounded-lg bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[280px]">Key</TableHead>
                <TableHead>Aktueller Text</TableHead>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead className="w-[120px] text-right">Aktion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((key) => {
                const overridden = key in overrides;
                const current = overrides[key] ?? translations[key]?.de ?? "";
                return (
                  <TableRow key={key}>
                    <TableCell className="font-mono text-xs align-top">{key}</TableCell>
                    <TableCell className="align-top">
                      <span className="line-clamp-2 text-sm">{current}</span>
                    </TableCell>
                    <TableCell className="align-top">
                      {overridden ? (
                        <Badge variant="default">CMS</Badge>
                      ) : (
                        <Badge variant="secondary">Original</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right align-top">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(key)}>
                        Bearbeiten
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-12 text-muted-foreground">
                    Keine Texte gefunden.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </main>

      <Dialog open={!!editKey} onOpenChange={(open) => !open && setEditKey(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-mono text-sm">{editKey}</DialogTitle>
            <DialogDescription>
              Originaltext: <span className="italic">{editKey ? translations[editKey]?.de : ""}</span>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2">
            <Label htmlFor="value">Text</Label>
            <Textarea
              id="value"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              rows={6}
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            {editKey && editKey in overrides && (
              <Button variant="outline" onClick={handleReset} disabled={saving}>
                Auf Original zurücksetzen
              </Button>
            )}
            <Button variant="ghost" onClick={() => setEditKey(null)} disabled={saving}>
              Abbrechen
            </Button>
            <Button onClick={handleSave} disabled={saving || !editValue.trim()}>
              {saving ? "Speichere…" : "Speichern"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
