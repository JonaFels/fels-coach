import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { CalendarClock, LogOut, Plus, StickyNote, User, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useBookingAuth } from "@/hooks/useBookingAuth";
import {
  bookingSupabase,
  type Booking,
  type BookingClient,
  type SessionNote,
} from "@/integrations/booking/client";

const SETUP_HINT =
  "Tabellen nicht gefunden. Bitte supabase/booking-schema.sql einmalig im SQL-Editor deiner Datenbank ausführen.";

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleString("de-DE", { dateStyle: "medium", timeStyle: "short" });

const BookingDashboard = () => {
  const { user, loading } = useBookingAuth();
  const { toast } = useToast();

  const [clients, setClients] = useState<BookingClient[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [notes, setNotes] = useState<SessionNote[]>([]);
  const [setupError, setSetupError] = useState<string | null>(null);

  const [newClient, setNewClient] = useState({ name: "", email: "", phone: "" });
  const [newBooking, setNewBooking] = useState({ starts_at: "", service: "", price: "" });
  const [newNote, setNewNote] = useState("");

  const loadClients = useCallback(async () => {
    const { data, error } = await bookingSupabase
      .from("booking_clients")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      setSetupError(SETUP_HINT);
      return;
    }
    setSetupError(null);
    setClients((data ?? []) as BookingClient[]);
    setActiveId((prev) => prev ?? (data?.[0]?.id ?? null));
  }, []);

  const loadDetails = useCallback(async (clientId: string) => {
    const [b, n] = await Promise.all([
      bookingSupabase.from("bookings").select("*").eq("client_id", clientId).order("starts_at", { ascending: false }),
      bookingSupabase.from("session_notes").select("*").eq("client_id", clientId).order("created_at", { ascending: false }),
    ]);
    setBookings((b.data ?? []) as Booking[]);
    setNotes((n.data ?? []) as SessionNote[]);
  }, []);

  useEffect(() => {
    if (user) loadClients();
  }, [user, loadClients]);

  useEffect(() => {
    if (activeId) loadDetails(activeId);
    else {
      setBookings([]);
      setNotes([]);
    }
  }, [activeId, loadDetails]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Lade…</p>
      </div>
    );
  }
  if (!user) return <Navigate to="/buchungen/login" replace />;

  const activeClient = clients.find((c) => c.id === activeId) ?? null;

  const addClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name.trim()) return;
    const { data, error } = await bookingSupabase
      .from("booking_clients")
      .insert({
        owner_id: user.id,
        name: newClient.name.trim(),
        email: newClient.email.trim() || null,
        phone: newClient.phone.trim() || null,
      })
      .select()
      .single();
    if (error) {
      toast({ title: "Klient konnte nicht angelegt werden", variant: "destructive" });
      return;
    }
    setNewClient({ name: "", email: "", phone: "" });
    setActiveId((data as BookingClient).id);
    loadClients();
  };

  const addBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeId || !newBooking.starts_at) return;
    const { error } = await bookingSupabase.from("bookings").insert({
      owner_id: user.id,
      client_id: activeId,
      starts_at: new Date(newBooking.starts_at).toISOString(),
      service: newBooking.service.trim() || "Coaching mit Einzelaufstellung",
      price_cents: newBooking.price ? Math.round(Number(newBooking.price) * 100) : null,
    });
    if (error) {
      toast({ title: "Termin konnte nicht gespeichert werden", variant: "destructive" });
      return;
    }
    setNewBooking({ starts_at: "", service: "", price: "" });
    loadDetails(activeId);
  };

  const addNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeId || !newNote.trim()) return;
    const { error } = await bookingSupabase.from("session_notes").insert({
      owner_id: user.id,
      client_id: activeId,
      content: newNote.trim(),
    });
    if (error) {
      toast({ title: "Notiz konnte nicht gespeichert werden", variant: "destructive" });
      return;
    }
    setNewNote("");
    loadDetails(activeId);
  };

  return (
    <div className="min-h-screen bg-background">
      <title>Buchungsverwaltung</title>
      <meta name="robots" content="noindex, nofollow" />

      <header className="border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl py-4 flex items-center justify-between gap-4">
          <h1 className="font-serif text-lg md:text-xl font-medium text-foreground">Buchungsverwaltung</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => bookingSupabase.auth.signOut()}
            className="gap-2"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Abmelden
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-6xl py-10">
        {setupError && (
          <Card className="mb-8 border-destructive/40">
            <CardContent className="pt-6 text-sm text-destructive">{setupError}</CardContent>
          </Card>
        )}

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Klientenliste */}
          <aside className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <CardTitle className="font-serif text-lg font-medium">Klienten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {clients.length === 0 && (
                  <p className="text-sm text-muted-foreground">Noch keine Klienten angelegt.</p>
                )}
                {clients.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveId(c.id)}
                    className={`w-full rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                      activeId === c.id
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="block font-medium">{c.name}</span>
                    <span className="block text-xs opacity-80">{c.email ?? "—"}</span>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                <Plus className="h-5 w-5 text-primary" aria-hidden="true" />
                <CardTitle className="font-serif text-lg font-medium">Neuer Klient</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={addClient} className="space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="c-name">Name</Label>
                    <Input
                      id="c-name"
                      value={newClient.name}
                      onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-mail">E-Mail</Label>
                    <Input
                      id="c-mail"
                      type="email"
                      value={newClient.email}
                      onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-phone">Telefon</Label>
                    <Input
                      id="c-phone"
                      value={newClient.phone}
                      onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full min-h-[44px]">Anlegen</Button>
                </form>
              </CardContent>
            </Card>
          </aside>

          {/* Details */}
          <section className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                <User className="h-5 w-5 text-primary" aria-hidden="true" />
                <CardTitle className="font-serif text-lg font-medium">
                  {activeClient ? activeClient.name : "Klientenakte"}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                {activeClient ? (
                  <dl className="space-y-3">
                    {[
                      ["E-Mail", activeClient.email ?? "—"],
                      ["Telefon", activeClient.phone ?? "—"],
                      ["Format", activeClient.format ?? "—"],
                      ["Status", activeClient.status ?? "—"],
                      ["Angelegt", fmtDate(activeClient.created_at)],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">{k}</dt>
                        <dd className="text-foreground text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                ) : (
                  <p className="text-muted-foreground">Wähle links einen Klienten aus.</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
                <CardTitle className="font-serif text-lg font-medium">Termine</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {bookings.length === 0 && (
                  <p className="text-sm text-muted-foreground">Noch keine Termine erfasst.</p>
                )}
                {bookings.map((b) => (
                  <div key={b.id} className="flex justify-between gap-4 text-sm">
                    <span className="text-foreground">{fmtDate(b.starts_at)}</span>
                    <span className="text-muted-foreground text-right">
                      {b.service}
                      {b.price_cents != null && ` · ${(b.price_cents / 100).toFixed(2)} €`}
                    </span>
                  </div>
                ))}

                {activeClient && (
                  <>
                    <Separator />
                    <form onSubmit={addBooking} className="grid gap-3 sm:grid-cols-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="b-date">Datum &amp; Uhrzeit</Label>
                        <Input
                          id="b-date"
                          type="datetime-local"
                          value={newBooking.starts_at}
                          onChange={(e) => setNewBooking({ ...newBooking, starts_at: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="b-service">Leistung</Label>
                        <Input
                          id="b-service"
                          placeholder="Coaching mit Einzelaufstellung"
                          value={newBooking.service}
                          onChange={(e) => setNewBooking({ ...newBooking, service: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="b-price">Preis (€)</Label>
                        <Input
                          id="b-price"
                          type="number"
                          step="0.01"
                          value={newBooking.price}
                          onChange={(e) => setNewBooking({ ...newBooking, price: e.target.value })}
                        />
                      </div>
                      <Button type="submit" className="sm:col-span-3 min-h-[44px]">Termin hinzufügen</Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                <StickyNote className="h-5 w-5 text-primary" aria-hidden="true" />
                <CardTitle className="font-serif text-lg font-medium">Sitzungsnotizen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notes.length === 0 && (
                  <p className="text-sm text-muted-foreground">Noch keine Notizen.</p>
                )}
                {notes.map((n) => (
                  <div key={n.id} className="rounded-md border border-border p-3">
                    <p className="text-xs text-muted-foreground mb-1">{fmtDate(n.created_at)}</p>
                    <p className="text-sm text-foreground whitespace-pre-wrap">{n.content}</p>
                  </div>
                ))}

                {activeClient && (
                  <form onSubmit={addNote} className="space-y-3">
                    <Textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Anliegen, Auftrag, Hypothesen, nächste Schritte …"
                      className="min-h-[140px] resize-y"
                      aria-label="Neue Sitzungsnotiz"
                    />
                    <Button type="submit" className="min-h-[44px]">Notiz speichern</Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BookingDashboard;
