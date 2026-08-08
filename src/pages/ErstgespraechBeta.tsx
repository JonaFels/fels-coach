import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarClock, FileText, StickyNote, User, Receipt, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/**
 * ─────────────────────────────────────────────────────────────
 *  CAL.COM EVENTS
 *  Format: "<username>/<event-slug>"  (ohne https://cal.com/)
 *  Später: "erstgespraech" ersetzt den Kalender auf /kontakt,
 *  "kennenlernen" + "coaching" ersetzen die Kalender auf /start.
 * ─────────────────────────────────────────────────────────────
 */
const CAL_EVENTS = [
  {
    key: "erstgespraech",
    label: "Erstgespräch (telefonisch)",
    meta: "Kostenlos · unverbindlich",
    calLink: "fels-coach/erstgesprach-telefonisch",
    replaces: "Ersetzt später den Kalender auf /kontakt",
  },
  {
    key: "kennenlernen",
    label: "Kennenlernen-Sitzung",
    meta: "55 € · 80 Min.",
    calLink: "fels-coach/kennenlernen-sitzung",
    replaces: "Ersetzt später Kalender 1 auf /start",
  },
  {
    key: "coaching",
    label: "Coaching mit Einzelaufstellung",
    meta: "95 € · 80 Min.",
    calLink: "fels-coach/coaching-mit-einzelaufstellung",
    replaces: "Ersetzt später Kalender 2 auf /start",
  },
] as const;

const ErstgespraechBeta = () => {
  const [notes, setNotes] = useState("");
  const [active, setActive] = useState<(typeof CAL_EVENTS)[number]["key"]>("erstgespraech");

  useEffect(() => {
    (async () => {
      for (const ev of CAL_EVENTS) {
        const cal = await getCalApi({ namespace: ev.key });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    })();
  }, []);

  const activeEvent = CAL_EVENTS.find((e) => e.key === active)!;

  return (
    <div className="min-h-screen flex flex-col">
      <title>Erstgespräch Beta – interne Testseite</title>
      <meta name="robots" content="noindex, nofollow" />
      <Header />

      <main id="main-content" className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
              Klientenakte &amp; Terminbuchung
            </h1>
            <Badge variant="outline">Beta – nicht verlinkt</Badge>
          </div>
          <p className="text-muted-foreground text-sm md:text-base mb-10 max-w-2xl">
            Testumgebung für das neue Buchungs-Setup. Buchung und Zahlung laufen über Cal.com,
            die Akte wird später automatisch im Backend angelegt.
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Buchung */}
            <section className="lg:col-span-2 space-y-8">
              <Card className="overflow-hidden">
                <CardHeader className="space-y-3">
                  <div className="flex flex-row items-center gap-2">
                    <CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />
                    <CardTitle className="font-serif text-lg font-medium">Termin buchen</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2" role="tablist" aria-label="Terminart wählen">
                    {CAL_EVENTS.map((ev) => (
                      <button
                        key={ev.key}
                        type="button"
                        role="tab"
                        aria-selected={active === ev.key}
                        onClick={() => setActive(ev.key)}
                        className={`rounded-md border px-3 py-2 text-left text-sm transition-colors ${
                          active === ev.key
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-border bg-card text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <span className="block font-medium">{ev.label}</span>
                        <span className="block text-xs opacity-80">{ev.meta}</span>
                      </button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border border-border overflow-hidden bg-card">
                    <Cal
                      key={activeEvent.key}
                      namespace={activeEvent.key}
                      calLink={activeEvent.calLink}
                      style={{ width: "100%", height: "640px", overflow: "scroll" }}
                      config={{ layout: "month_view" }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    {activeEvent.replaces} · Event-URLs stehen in{" "}
                    <code className="font-mono">src/pages/ErstgespraechBeta.tsx</code> unter{" "}
                    <code className="font-mono">CAL_EVENTS</code>.
                  </p>
                </CardContent>
              </Card>

              {/* Notizen */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                  <StickyNote className="h-5 w-5 text-primary" aria-hidden="true" />
                  <CardTitle className="font-serif text-lg font-medium">Sitzungsnotizen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Anliegen, Auftrag, Hypothesen, nächste Schritte …"
                    className="min-h-[220px] resize-y"
                    aria-label="Sitzungsnotizen"
                  />
                  <p className="text-xs text-muted-foreground">
                    Nur lokal im Browser – Speicherung folgt mit der Backend-Anbindung.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Akte / Meta */}
            <aside className="space-y-8">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                  <User className="h-5 w-5 text-primary" aria-hidden="true" />
                  <CardTitle className="font-serif text-lg font-medium">Klientenakte</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <dl className="space-y-3">
                    {[
                      ["Name", "—"],
                      ["E-Mail", "—"],
                      ["Format", "Praxis Freiburg / Online"],
                      ["Erstkontakt", "—"],
                      ["Status", "Wartet auf Buchung"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">{k}</dt>
                        <dd className="text-foreground text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Separator className="my-4" />
                  <p className="text-xs text-muted-foreground">
                    Felder werden nach dem Cal.com-Webhook automatisch befüllt.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center gap-2 space-y-0">
                  <Workflow className="h-5 w-5 text-primary" aria-hidden="true" />
                  <CardTitle className="font-serif text-lg font-medium">Automatisierung</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-4">
                  {[
                    { icon: CalendarClock, label: "Buchung + Zahlung", desc: "Cal.com / Stripe" },
                    { icon: Workflow, label: "Webhook", desc: "n8n Workflow" },
                    { icon: FileText, label: "Akte anlegen", desc: "Datenbank" },
                    { icon: Receipt, label: "Rechnung", desc: "Lexoffice" },
                  ].map(({ icon: Icon, label, desc }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="mt-0.5 p-1.5 rounded-md bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-foreground font-medium">{label}</span>
                        <span className="block text-muted-foreground text-xs">{desc}</span>
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ErstgespraechBeta;
