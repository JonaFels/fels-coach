import { useEffect, useState } from "react";
import { CalendarCheck, Mail, Sparkles, PlayCircle, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

const THERAPSY_URL =
  "https://bookings.therapsy.at/?type=c28ea3d9-ea19-45f5-a025-6f5eff92b199&id=3f27492a3d11dc68041c958654a5b7e6";

const steps = [
  {
    icon: CalendarCheck,
    title: "Termin wählen",
    text: "Such dir im obigen Kalender deinen Wunschtermin für unsere erste reguläre Session aus.",
  },
  {
    icon: Mail,
    title: "Postfach checken",
    text: "Du erhältst direkt im Anschluss deine Bestätigung und die Zugangsdaten zu unserer Digital Academy.",
  },
  {
    icon: Sparkles,
    title: "Vorbereiten",
    text: "Mach es dir gemütlich, leg dir Zettel und Stift bereit. Ich freue mich auf dich!",
  },
];

const Start = () => {
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
            Jona Fels · Systemisches Coaching
          </span>
        </div>
      </header>

      <main id="main-content">
        {/* 1. Hero */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-5">
              Willkommen an Bord
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6">
              Schön, dass du da bist!
              <span className="block text-secondary mt-2">Lass uns starten.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Unser Erstgespräch hat gezeigt, dass wir gemeinsam Großes erreichen
              können. Hier findest du alles, um deinen offiziellen Start
              einzurichten.
            </p>
          </div>
        </section>

        {/* 2. Video / Audio Platzhalter */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="overflow-hidden border-border/60 rounded-3xl shadow-[0_10px_40px_-12px_rgba(15,40,80,0.12)]">
              <div className="relative aspect-video bg-gradient-to-br from-secondary/15 via-muted to-primary/10 flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md mb-4">
                  <PlayCircle className="w-9 h-9 md:w-11 md:h-11 text-secondary" aria-hidden="true" />
                </div>
                <p className="font-serif text-lg md:text-xl text-foreground mb-1">
                  Persönliche Begrüßung
                </p>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Hier folgt in Kürze eine kurze Video- bzw. Audio-Botschaft von mir für dich.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* 3. Terminbuchung */}
        <section className="pb-16 md:pb-24 bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Sichere dir deine erste Coaching-Session
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Wähle unten in Ruhe deinen Wunschtermin. Du erhältst direkt im
                Anschluss eine Bestätigung per E-Mail.
              </p>
            </div>

            <BookingFrame />
          </div>
        </section>

        {/* 4. Nächste Schritte */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Was passiert danach?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                In drei einfachen Schritten sind wir startklar.
              </p>
            </div>

            <ol className="grid gap-6 md:grid-cols-3">
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

      <footer className="py-8 border-t border-border/40">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jona Fels · Systemisches Coaching &amp; Familienaufstellung
        </div>
      </footer>
    </div>
  );
};

const BookingFrame = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative bg-white rounded-3xl shadow-[0_10px_40px_-12px_rgba(15,40,80,0.12)] ring-1 ring-black/5 overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground bg-white z-10">
          <Loader2 className="w-6 h-6 animate-spin text-secondary" aria-hidden="true" />
          <p className="text-sm">Lade Kalender…</p>
        </div>
      )}
      <iframe
        src={THERAPSY_URL}
        title="Buchungskalender – Erste Coaching-Session"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className="block w-full border-0"
        style={{ height: "700px" }}
        allow="payment"
      />
    </div>
  );
};

export default Start;
