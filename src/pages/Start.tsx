import { useEffect } from "react";
import { BookingSections } from "@/components/BookingSections";
import { BookingOptionCards } from "@/components/BookingOptionCards";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";



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
        <section className="pt-24 pb-10 md:pt-36 md:pb-14">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-4">
              Willkommen
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
              Buche deine Systemische 1:1 Aufstellung
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              90 Minuten · 110 € · Wähle einfach vor Ort in Freiburg oder online per Video.
            </p>
          </div>
        </section>

        {/* 2. Buchung – Systemische 1:1 Aufstellung */}
        <section className="pb-32 md:pb-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <BookingOptionCards
              heading="Schritt 1"
              subheading="Wo möchtest du deinen Termin wahrnehmen?"
              choices={[
                {
                  kind: "onsite",
                  icon: "map",
                  title: "Vor Ort in Freiburg",
                  subtitle: "Persönlich im Praxisraum",
                  details: "Karlstraße 51, 79104 Freiburg · 90 Min · 110 €",
                  cta: "Termin vor Ort wählen",
                },
                {
                  kind: "online",
                  icon: "video",
                  title: "Online per Video",
                  subtitle: "Bequem von überall",
                  details: "Videocall · 90 Min · 110 €",
                  cta: "Online-Termin wählen",
                },
              ]}
            />
            <BookingSections
              options={[
                {
                  kind: "onsite",
                  label: "Vor Ort in Freiburg",
                  hint: "Praxisraum Karlstraße 51, 79104 Freiburg · 90 Minuten · 110 €",
                  url: "https://cal.meetergo.com/jona/systemische-11-aufstellung?lang=de",
                  iframeTitle: "Terminbuchung – Systemische 1:1 Aufstellung vor Ort",
                },
                {
                  kind: "online",
                  label: "Online per Video",
                  hint: "Videocall von überall · 90 Minuten · 110 €",
                  url: "https://cal.meetergo.com/jona/systemische-11-aufstellung-1?lang=de",
                  iframeTitle: "Terminbuchung – Systemische 1:1 Aufstellung online",
                },
              ]}
            />
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
