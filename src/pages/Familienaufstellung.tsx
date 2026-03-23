import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";

import { trackCTAClick } from "@/lib/tracking";
import { useLanguage } from "@/contexts/LanguageContext";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import praxisAufstellung from "@/assets/praxis-aufstellung.webp";

const Familienaufstellung = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PraxisHeroBanner variant="sitzbereich" />

      <main id="main-content" className="flex-1">
        {/* Title */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              {t("family.title")}
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
              {t("family.intro.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("family.intro.text")}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-5">
              {t("family.benefits.title")}
            </h2>
            <ul className="space-y-3 text-muted-foreground" role="list">
              {["family.benefit1", "family.benefit2", "family.benefit3", "family.benefit4"].map((key) => (
                <li key={key} className="flex items-start gap-2">
                  <span className="text-secondary mt-1" aria-hidden="true">•</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-10">
              {/* Text */}
              <div>
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {t("family.process.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("family.process.intro")}
                </p>
              </div>

              {/* Aufstellungsbild mit Bodenankern */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={praxisAufstellung}
                  alt="Systemische Familienaufstellung in der Praxis – farbige Bodenanker markieren die Positionen der Familienmitglieder im Raum"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <p className="text-sm text-muted-foreground italic px-4 py-3 bg-muted/60">
                  Die farbigen Bodenanker markieren die Positionen von Familienmitgliedern, relevanten Personen oder inneren Anteilen im Raum – sie machen Dynamiken sichtbar und erlebbar.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-5 bg-background rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">{t(`family.step${i}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`family.step${i}.text`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <Button size="lg" className="min-h-[44px]" asChild>
              <a href="/kontakt#willkommen" onClick={() => trackCTAClick("familienaufstellung_cta", "familienaufstellung", "link")}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("cta.bookNow")}
              </a>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">{t("cta.bookNowMicrocopy")}</p>
          </div>
        </section>

        {/* Links */}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Familienaufstellung;
