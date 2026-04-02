import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { AuthorBox } from "@/components/AuthorBox";
import { useLanguage } from "@/contexts/LanguageContext";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import { useHalfHeroHashScroll } from "@/hooks/useHalfHeroHashScroll";

const UeberMich = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useHalfHeroHashScroll("#portrait", heroRef, 0.65);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <div ref={heroRef}>
        <PraxisHeroBanner variant="sitzbereich" />
      </div>
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section id="portrait" className="relative -mt-12 pb-12 md:pb-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="mb-6">
              <img
                src={profilBild}
                alt="Jona Fels - Systemischer Coach und Prozessbegleiter in Freiburg"
                className="w-48 h-auto md:w-60 aspect-[4/5] rounded-2xl object-cover object-center mx-auto shadow-xl ring-4 ring-background"
                loading="eager"
                width="208"
                height="260"
              />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("about.subtitle")}</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 md:py-14 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
            </div>
          </div>
        </section>

        {/* Guidance */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 border-l-4 border-secondary pl-4">
              {t("about.guidance.title")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.guidance1")}</p>
              <p>{t("about.guidance2")}</p>
              <p>{t("about.guidance3")}</p>
            </div>
          </div>
        </section>

        {/* Core */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 border-l-4 border-secondary pl-4">
              {t("about.core.title")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.core1")}</p>
              <p>{t("about.core2")}</p>
            </div>
          </div>
        </section>

        {/* CV */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              {t("about.cv.title")}
            </h2>
            <div className="space-y-4">
              <div className="border-l-2 border-secondary pl-4 py-2">
                <p className="text-muted-foreground">{t("about.cv1")}</p>
              </div>
              <div className="border-l-2 border-border pl-4 py-2">
                <p className="text-muted-foreground">{t("about.cv2")}</p>
              </div>
              <div className="border-l-2 border-border pl-4 py-2">
                <p className="text-muted-foreground">{t("about.cv3")}</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default UeberMich;
