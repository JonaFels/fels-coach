import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";

const Angebote = () => {
  const { t, language } = useLanguage();
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
  }, [hash]);

  const steps = ["offerings.step1", "offerings.step2", "offerings.step3"];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PraxisHeroBanner variant="lounge" />

      <main id="main-content">
        {/* Intro */}
        <section className="py-36 md:py-44">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t("offerings.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("offerings.pageIntro")}
            </p>
          </div>
        </section>

        {/* So starten wir gemeinsam */}
        <section className="py-36 md:py-44 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-12">
              {t("offerings.ablaufTitle")}
            </h2>
            <ol className="space-y-8">
              {steps.map((key, i) => (
                <li key={key} className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground leading-relaxed pt-2">{t(key)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Honorar & Formate */}
        <section className="py-36 md:py-44">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-6">
              {t("offerings.preiseTitle")}
            </h2>
            <p className="text-muted-foreground text-center mb-12 leading-relaxed">
              {t("offerings.preiseIntro")}
            </p>

            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <div className="rounded-lg border border-border/60 bg-card p-6 md:p-7">
                <div className="flex items-baseline justify-between mb-3 gap-3">
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                    {t("offerings.kennenlernen.title")}
                  </h3>
                  <span className="text-sm font-medium text-secondary whitespace-nowrap">
                    {language === "de" ? "Einstieg" : "Entry"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-7">
                  {t("offerings.kennenlernen.desc")}
                </p>
                <div className="flex items-baseline gap-2 border-t border-border/50 pt-4">
                  <span className="text-3xl font-semibold text-foreground">55&nbsp;€</span>
                  <span className="text-sm text-muted-foreground">/ 80&nbsp;Min.</span>
                </div>
              </div>

              <div className="rounded-lg border border-secondary/40 bg-secondary/5 p-6 md:p-7">
                <div className="flex items-baseline justify-between mb-3 gap-3">
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                    {t("offerings.coaching.title")}
                  </h3>
                  <span className="text-sm font-medium text-secondary whitespace-nowrap">
                    {language === "de" ? "Regulär" : "Regular"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-7">
                  {t("offerings.coaching.desc")}
                </p>
                <div className="flex items-baseline gap-2 border-t border-border/50 pt-4">
                  <span className="text-3xl font-semibold text-foreground">95&nbsp;€</span>
                  <span className="text-sm text-muted-foreground">/ 80&nbsp;Min.</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted/40 border border-border/50 p-6 md:p-8 text-sm text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground mb-2">
                {language === "de" ? "Unterstützung soll nicht am Geld scheitern" : "Support shouldn't fail because of money"}
              </p>
              <p>{t("offerings.preiseNote")}</p>
            </div>
          </div>
        </section>

        {/* Rahmenbedingungen */}
        <section className="py-36 md:py-44 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-10">
              {t("offerings.rahmen.title")}
            </h2>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              <li>
                <span className="font-medium text-foreground">{language === "de" ? "Ort:" : "Location:"}</span>{" "}
                {t("offerings.rahmen.location")}
              </li>
              <li>
                <span className="font-medium text-foreground">{language === "de" ? "Zeiten:" : "Times:"}</span>{" "}
                {t("offerings.rahmen.times")}
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-36 md:py-44">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md min-h-[44px] text-base px-8"
              asChild
            >
              <a
                href="/kontakt"
                onClick={() => trackCTAClick("ablauf_honorar_cta", "angebote_page", "link")}
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("offerings.ctaButton")}
              </a>
            </Button>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <a
                href="/impressum"
                className="hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
              >
                {language === "de" ? "Impressum" : "Imprint"}
              </a>
              <span>·</span>
              <a
                href="/datenschutz"
                className="hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
              >
                {t("footer.privacy")}
              </a>
              <span>·</span>
              <a
                href="/agb"
                className="hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
              >
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Angebote;
