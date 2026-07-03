import { useEffect, useState } from "react";
import { CalendarCheck, Mail, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

const THERAPSY_KENNENLERNEN =
  "https://bookings.therapsy.at/?type=596fe883-643f-4ce2-aad7-81791c631b5d&id=3f27492a3d11dc68041c958654a5b7e6";
const THERAPSY_COACHING =
  "https://bookings.therapsy.at/?type=4a663327-f5e0-4843-be57-24ddcb60ae9f&id=3f27492a3d11dc68041c958654a5b7e6";

const steps = [
  {
    icon: CalendarCheck,
    title: "Termin wählen",
    text: "Wähle unten das passende Format und such dir im Kalender deinen Wunschtermin aus.",
  },
  {
    icon: Mail,
    title: "Postfach checken",
    text: "Du erhältst direkt im Anschluss deine Bestätigung mit allen weiteren Infos.",
  },
];

const Start = () => {
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);

  useEffect(() => {
    const prev = document.title;
    document.title = "Willkommen – dein Start | Jona Fels";
    const meta = document.querySelector('meta[name="robots"]');
    const created = !meta;
    const tag = meta ?? document.createElement("meta");
    tag.setAttribute("name", "robots");
    tag.setAttribute("content", "noindex, nofollow");
    if (created) document.head.appendChild(tag);
    return () => {
      document.title = prev;
      if (created) tag.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal top bar – kein Header/Footer, da versteckte Onboarding-Seite */}
      <header className="py-6 border-b border-border/40">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <img
            src={profilBild}
            alt="Jona Fels"
            className="w-10 h-10 rounded-full object-cover object-[center_18%]"
          />
          <span className="font-serif text-base text-foreground">
            Jona Fels · Systemischer Berater &amp; Coach
          </span>
        </div>
      </header>

      <main id="main-content">
        {/* 1. Hero */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-5">
              Willkommen
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Schön, dass du da bist!
              <span className="block text-secondary mt-2">Lass uns starten.</span>
            </h1>
          </div>
        </section>

        {/* 2. Buchungsoptionen */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Wähle deine erste Coaching-Session
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Für den Start buchst du die Kennenlern-Sitzung. Danach kannst du
                jederzeit ein reguläres Coaching buchen.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <button
                type="button"
                onClick={() => setSelectedUrl(THERAPSY_KENNENLERNEN)}
                className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-3xl"
              >
                <Card className="h-full overflow-hidden border-border/60 rounded-3xl shadow-[0_10px_40px_-12px_rgba(15,40,80,0.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_50px_-12px_rgba(15,40,80,0.18)]">
                  <CardContent className="p-6 md:p-7 flex flex-col h-full">
                    <div className="flex items-baseline justify-between mb-2 gap-3">
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                        Kennenlernen-Sitzung
                      </h3>
                      <span className="text-sm font-medium text-secondary whitespace-nowrap">
                        Einstieg
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      Dein Einstieg zum reduzierten Preis: Eine vollwertige
                      Sitzung, in der wir dein Anliegen systemisch einordnen und
                      erste Lösungsansätze erarbeiten.
                    </p>
                    <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/50 pt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-semibold text-foreground">
                          55&nbsp;€
                        </span>
                        <span className="text-sm text-muted-foreground">
                          / 80&nbsp;Min.
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                        Termin buchen
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </button>

              <button
                type="button"
                onClick={() => setSelectedUrl(THERAPSY_COACHING)}
                className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-3xl"
              >
                <Card className="h-full overflow-hidden border-secondary/40 rounded-3xl shadow-[0_10px_40px_-12px_rgba(15,40,80,0.12)] bg-secondary/5 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_50px_-12px_rgba(15,40,80,0.18)]">
                  <CardContent className="p-6 md:p-7 flex flex-col h-full">
                    <div className="flex items-baseline justify-between mb-2 gap-3">
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                        Coaching mit Einzelaufstellung
                      </h3>
                      <span className="text-sm font-medium text-secondary whitespace-nowrap">
                        Regulär
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      80 Minuten fokussierte Arbeit an dem, was gerade dran ist –
                      systemisch, lösungsorientiert und mit konkreten nächsten
                      Schritten.
                    </p>
                    <div className="mt-auto flex items-end justify-between gap-3 border-t border-border/50 pt-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-semibold text-foreground">
                          95&nbsp;€
                        </span>
                        <span className="text-sm text-muted-foreground">
                          / 80&nbsp;Min.
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                        Termin buchen
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </button>
            </div>
          </div>
        </section>

        {/* 3. Nächste Schritte */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Was passiert danach?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                In zwei einfachen Schritten sind wir startklar.
              </p>
            </div>

            <ol className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <Card className="h-full border-border/60 rounded-2xl transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <CardContent className="pt-8 pb-7 px-6 text-center">
                      <div className="mx-auto mb-5 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center relative">
                        <step.icon className="w-6 h-6 text-secondary" aria-hidden="true" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold flex items-center justify-center shadow">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.text}
                      </p>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>

            <p className="text-center text-sm text-muted-foreground mt-12">
              Fragen? Schreib mir jederzeit an{" "}
              <a
                href="mailto:kontakt@fels-coach.de"
                className="text-secondary underline underline-offset-4 hover:no-underline"
              >
                kontakt@fels-coach.de
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <Dialog
        open={!!selectedUrl}
        onOpenChange={(open) => !open && setSelectedUrl(null)}
      >
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden gap-0">
          {selectedUrl && (
            <div className="w-full h-[60vh] md:h-[65vh]">
              <iframe
                src={selectedUrl}
                title="Therapsy Kalender"
                className="w-full h-full border-0"
                allow="fullscreen"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <footer className="py-8 border-t border-border/40">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jona Fels · Systemisches Coaching &amp; Familienaufstellung
        </div>
      </footer>
    </div>
  );
};

export default Start;
