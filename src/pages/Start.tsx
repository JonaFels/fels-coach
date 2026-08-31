import { useEffect } from "react";
import { CalendarCheck, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

const MEETERGO_AUFSTELLUNG =
  "https://cal.meetergo.com/jona/systemische-11-aufstellung?lang=de";

const steps = [
  {
    icon: CalendarCheck,
    title: "Termin wählen",
    text: "Nach dem Erstgespräch erhältst du einen persönlichen Link. Wähle dort das passende Format und such dir im Kalender deinen Wunschtermin aus.",
  },
  {
    icon: Mail,
    title: "Postfach checken",
    text: "Du erhältst direkt im Anschluss deine Bestätigung mit allen weiteren Infos.",
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
            Jona Fels · Systemischer Aufsteller
          </span>
        </div>
      </header>

      <main id="main-content">
        {/* 1. Hero */}
        <section className="pt-28 pb-24 md:pt-44 md:pb-32">
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

        {/* 2. Buchung – Systemische 1:1 Aufstellung */}
        <section className="pb-32 md:pb-44">
          <div className="container mx-auto px-4 max-w-3xl">

            <Card className="overflow-hidden border-border/60 rounded-lg shadow-[var(--shadow-soft)]">
              <CardContent className="p-0">
                <iframe
                  src={MEETERGO_AUFSTELLUNG}
                  title="Terminbuchung – Systemische 1:1 Aufstellung"
                  loading="lazy"
                  className="block w-full border-0"
                  style={{ height: "750px" }}
                  allow="payment; camera; microphone; fullscreen"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 3. Nächste Schritte */}
        <section className="py-36 md:py-52 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                Was passiert danach?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                In zwei einfachen Schritten sind wir startklar.
              </p>
            </div>

            <ol className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <Card className="h-full border-border/60 rounded-lg transition-all duration-300 hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1">
                    <CardContent className="p-8 md:p-10 text-center">
                      <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center relative">
                        <step.icon className="w-6 h-6 text-secondary" aria-hidden="true" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold flex items-center justify-center shadow-[var(--shadow-soft)]">
                          {i + 1}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
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

            <p className="text-center text-sm text-muted-foreground mt-20 md:mt-28">
              Fragen? Schreib mir jederzeit an{" "}
              <a
                href="mailto:jona@fels-coach.de"
                className="text-secondary underline underline-offset-4 hover:no-underline"
              >
                jona@fels-coach.de
              </a>
              .
            </p>
          </div>
        </section>
      </main>


      <footer className="py-8 border-t border-border/40">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Jona Fels · Systemische Aufstellung &amp; Familienaufstellung
        </div>
      </footer>
    </div>
  );
};

export default Start;
