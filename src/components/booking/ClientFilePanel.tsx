import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarClock, Loader2, Plus, Save, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ClientRow {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  notes: string | null;
  package_credits_total: number;
  package_credits_remaining: number;
  created_at: string;
}

interface AppointmentRow {
  id: string;
  client_id: string;
  event_type: string;
  start_time: string;
  status: string;
  lexoffice_invoice_id: string | null;
}

const EVENT_TYPES = [
  "Erstgespräch (telefonisch)",
  "Kennenlernen-Sitzung",
  "Aufstellung mit Einzelaufstellung",
];

const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

export const ClientFilePanel = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();

  const [clients, setClients] = useState<ClientRow[]>([]);
  const [appointments, setAppointments] = useState<AppointmentRow[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Formular: neuer Klient
  const [newClient, setNewClient] = useState({ full_name: "", email: "", phone: "" });

  // Formular: neuer Termin
  const [newAppt, setNewAppt] = useState({ event_type: EVENT_TYPES[0], start_time: "" });

  // Bearbeitbare Aktenfelder
  const [draft, setDraft] = useState({
    notes: "",
    package_credits_total: 0,
    package_credits_remaining: 0,
  });

  const selected = useMemo(
    () => clients.find((c) => c.id === selectedId) ?? null,
    [clients, selectedId]
  );

  const loadClients = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("clients")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("Klienten konnten nicht geladen werden.");
      return;
    }
    setClients((data ?? []) as ClientRow[]);
    setSelectedId((prev) => prev ?? (data?.[0]?.id ?? null));
  }, []);

  const loadAppointments = useCallback(async (clientId: string) => {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .eq("client_id", clientId)
      .order("start_time", { ascending: false });
    if (error) {
      toast.error("Termine konnten nicht geladen werden.");
      return;
    }
    setAppointments((data ?? []) as AppointmentRow[]);
  }, []);

  useEffect(() => {
    if (isAdmin) loadClients();
  }, [isAdmin, loadClients]);

  useEffect(() => {
    if (!selected) {
      setAppointments([]);
      return;
    }
    setDraft({
      notes: selected.notes ?? "",
      package_credits_total: selected.package_credits_total,
      package_credits_remaining: selected.package_credits_remaining,
    });
    loadAppointments(selected.id);
  }, [selected, loadAppointments]);

  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.full_name.trim() || !newClient.email.trim()) return;
    setSaving(true);
    const { data, error } = await supabase
      .from("clients")
      .insert({
        full_name: newClient.full_name.trim(),
        email: newClient.email.trim().toLowerCase(),
        phone: newClient.phone.trim() || null,
      })
      .select()
      .single();
    setSaving(false);
    if (error) {
      toast.error(
        error.code === "23505"
          ? "Diese E-Mail ist bereits angelegt."
          : "Klient konnte nicht angelegt werden."
      );
      return;
    }
    setNewClient({ full_name: "", email: "", phone: "" });
    setClients((prev) => [data as ClientRow, ...prev]);
    setSelectedId((data as ClientRow).id);
    toast.success("Klientenakte angelegt.");
  };

  const handleSaveFile = async () => {
    if (!selected) return;
    setSaving(true);
    const { error } = await supabase
      .from("clients")
      .update({
        notes: draft.notes,
        package_credits_total: draft.package_credits_total,
        package_credits_remaining: draft.package_credits_remaining,
      })
      .eq("id", selected.id);
    setSaving(false);
    if (error) {
      toast.error("Speichern fehlgeschlagen.");
      return;
    }
    setClients((prev) =>
      prev.map((c) => (c.id === selected.id ? { ...c, ...draft } : c))
    );
    toast.success("Akte gespeichert.");
  };

  const handleCreateAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected || !newAppt.start_time) return;
    setSaving(true);
    const { data, error } = await supabase
      .from("appointments")
      .insert({
        client_id: selected.id,
        event_type: newAppt.event_type,
        start_time: new Date(newAppt.start_time).toISOString(),
      })
      .select()
      .single();
    setSaving(false);
    if (error) {
      toast.error("Termin konnte nicht gespeichert werden.");
      return;
    }
    setAppointments((prev) => [data as AppointmentRow, ...prev]);
    setNewAppt({ event_type: EVENT_TYPES[0], start_time: "" });
    toast.success("Termin erfasst.");
  };

  const handleToggleStatus = async (appt: AppointmentRow) => {
    const next = appt.status === "completed" ? "booked" : "completed";
    const { error } = await supabase
      .from("appointments")
      .update({ status: next })
      .eq("id", appt.id);
    if (error) {
      toast.error("Status konnte nicht geändert werden.");
      return;
    }
    setAppointments((prev) =>
      prev.map((a) => (a.id === appt.id ? { ...a, status: next } : a))
    );
  };

  if (authLoading) {
    return (
      <Card>
        <CardContent className="py-10 flex items-center justify-center text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin mr-2" aria-hidden="true" /> Lade…
        </CardContent>
      </Card>
    );
  }

  if (!user || !isAdmin) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center gap-2 space-y-0">
          <User className="h-5 w-5 text-primary" aria-hidden="true" />
          <CardTitle className="font-serif text-lg font-medium">Klientenakte</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-4">
          <p className="text-muted-foreground">
            Die Klientenakten sind geschützt. Bitte melde dich mit deinem Admin-Konto an,
            um Akten, Paket-Credits und Termine zu sehen.
          </p>
          <Button asChild variant="outline" size="sm">
            <Link to="/admin/login">Zum Login</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Klientenliste + Anlegen */}
      <Card>
        <CardHeader className="flex flex-row items-center gap-2 space-y-0">
          <User className="h-5 w-5 text-primary" aria-hidden="true" />
          <CardTitle className="font-serif text-lg font-medium">Klienten</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          {loading ? (
            <p className="text-muted-foreground flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Lade Akten…
            </p>
          ) : clients.length === 0 ? (
            <p className="text-muted-foreground">Noch keine Klientenakte angelegt.</p>
          ) : (
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-1">
              {clients.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(c.id)}
                    aria-pressed={selectedId === c.id}
                    className={`w-full rounded-md border px-3 py-2 text-left transition-colors ${
                      selectedId === c.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <span className="block font-medium text-foreground">{c.full_name}</span>
                    <span className="block text-xs text-muted-foreground">{c.email}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <Separator />

          <form onSubmit={handleCreateClient} className="space-y-3">
            <p className="font-medium text-foreground">Neue Akte anlegen</p>
            <div className="space-y-1.5">
              <Label htmlFor="cf-name">Name</Label>
              <Input
                id="cf-name"
                value={newClient.full_name}
                onChange={(e) => setNewClient({ ...newClient, full_name: e.target.value })}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cf-email">E-Mail</Label>
              <Input
                id="cf-email"
                type="email"
                value={newClient.email}
                onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cf-phone">Telefon (optional)</Label>
              <Input
                id="cf-phone"
                value={newClient.phone}
                onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
              />
            </div>
            <Button type="submit" size="sm" disabled={saving} className="w-full">
              <Plus className="h-4 w-4 mr-1" aria-hidden="true" /> Anlegen
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Akte des gewählten Klienten */}
      {selected && (
        <>
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="font-serif text-lg font-medium">{selected.full_name}</CardTitle>
              <p className="text-xs text-muted-foreground">
                {selected.email}
                {selected.phone ? ` · ${selected.phone}` : ""} · Akte seit{" "}
                {new Date(selected.created_at).toLocaleDateString("de-DE")}
              </p>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="cf-total">Credits gesamt</Label>
                  <Input
                    id="cf-total"
                    type="number"
                    min={0}
                    value={draft.package_credits_total}
                    onChange={(e) =>
                      setDraft({ ...draft, package_credits_total: Number(e.target.value) })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="cf-remaining">Credits übrig</Label>
                  <Input
                    id="cf-remaining"
                    type="number"
                    min={0}
                    value={draft.package_credits_remaining}
                    onChange={(e) =>
                      setDraft({ ...draft, package_credits_remaining: Number(e.target.value) })
                    }
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="cf-notes">Sitzungsnotizen</Label>
                <Textarea
                  id="cf-notes"
                  value={draft.notes}
                  onChange={(e) => setDraft({ ...draft, notes: e.target.value })}
                  placeholder="Anliegen, Auftrag, Hypothesen, nächste Schritte …"
                  className="min-h-[200px] resize-y"
                />
              </div>
              <Button onClick={handleSaveFile} disabled={saving} size="sm">
                <Save className="h-4 w-4 mr-1" aria-hidden="true" /> Akte speichern
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 space-y-0">
              <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
              <CardTitle className="font-serif text-lg font-medium">Termine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              {appointments.length === 0 ? (
                <p className="text-muted-foreground">Noch keine Termine erfasst.</p>
              ) : (
                <ul className="space-y-2">
                  {appointments.map((a) => (
                    <li
                      key={a.id}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-border px-3 py-2"
                    >
                      <span>
                        <span className="block text-foreground font-medium">{a.event_type}</span>
                        <span className="block text-xs text-muted-foreground">
                          {formatDateTime(a.start_time)}
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <Badge variant={a.status === "completed" ? "secondary" : "outline"}>
                          {a.status === "completed" ? "erledigt" : "gebucht"}
                        </Badge>
                        <Button size="sm" variant="ghost" onClick={() => handleToggleStatus(a)}>
                          Status wechseln
                        </Button>
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <Separator />

              <form onSubmit={handleCreateAppointment} className="space-y-3">
                <p className="font-medium text-foreground">Termin erfassen</p>
                <div className="space-y-1.5">
                  <Label htmlFor="cf-type">Terminart</Label>
                  <select
                    id="cf-type"
                    value={newAppt.event_type}
                    onChange={(e) => setNewAppt({ ...newAppt, event_type: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="cf-start">Beginn</Label>
                  <Input
                    id="cf-start"
                    type="datetime-local"
                    value={newAppt.start_time}
                    onChange={(e) => setNewAppt({ ...newAppt, start_time: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="sm" disabled={saving}>
                  <Plus className="h-4 w-4 mr-1" aria-hidden="true" /> Termin speichern
                </Button>
              </form>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};
