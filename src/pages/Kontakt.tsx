import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";

const BOOKING_URL = "https://cal.meetergo.com/jona/kennenlernen?lang=de";

const Kontakt = () => {
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const scrollToEl = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
      return !!el;
    };
    if (!scrollToEl()) {
      const timer = window.setTimeout(scrollToEl, 150);
      return () => window.clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* 1. Hero – Buchung im Fokus */}
        <section id="erstgespraech" className="pt-14 pb-20 md:pt-24 md:pb-28 bg-background scroll-mt-24">
          <div className="container mx-auto px-5 max-w-3xl">
            <h1 className="font-serif text-[clamp(1.75rem,5vw,2.75rem)] leading-tight font-medium text-foreground text-center text-balance">
              Lass uns kurz sprechen – unverbindlich und kostenfrei.
            </h1>
            <p className="mt-6 text-center text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Wähle direkt deinen Termin für ein 20-minütiges Orientierungsgespräch. Wir klären dein
              Anliegen in Ruhe und schauen, ob die Chemie für eine Zusammenarbeit stimmt.
            </p>

            <div className="mt-10 md:mt-14 card-base border-border overflow-hidden">
              <iframe
                src={BOOKING_URL}
                title="Terminbuchung – Kennenlerngespräch"
                loading="lazy"
                className="block w-full border-0"
                style={{ height: "750px" }}
                allow="payment; camera; microphone; fullscreen"
              />
            </div>
          </div>
        </section>

        {/* 2. Direkter Kontakt */}
        <section className="py-20 md:py-28 border-t border-border/60 bg-muted/20">
          <div className="container mx-auto px-5 max-w-2xl">
            <div className="text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                Direkter Kontakt
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Schreib mir gerne direkt – per E-Mail oder über das Formular. Ich melde mich
                zeitnah bei dir zurück.
              </p>
              <a
                href="mailto:jona@fels-coach.de"
                className="mt-8 inline-block font-serif text-[clamp(1.25rem,4.5vw,2rem)] text-foreground hover:text-primary transition-colors break-all no-underline-effect"
              >
                jona@fels-coach.de
              </a>
            </div>

            <div className="mt-12 md:mt-16">
              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Kontakt;
