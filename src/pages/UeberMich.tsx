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
        <section className="py-6 md:py-10 bg-muted/40">
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
            <div className="relative space-y-6 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {/* Highlighted current entry */}
              <div className="relative pl-8">
                <span className="absolute left-0 top-2 w-4 h-4 rounded-full bg-secondary ring-4 ring-secondary/20" />
                <div className="rounded-xl border border-secondary/30 bg-secondary/5 p-5 shadow-sm">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-secondary tracking-wide">
                      {t("about.cv1.year")}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      ✓ {t("about.cv1.badge")}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                    {t("about.cv1.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {t("about.cv1.desc")}
                  </p>
                </div>
              </div>

              {/* Secondary entries */}
              <div className="relative pl-8">
                <span className="absolute left-1 top-3 w-3 h-3 rounded-full bg-background border-2 border-border" />
                <div className="py-2">
                  <p className="text-sm font-semibold text-muted-foreground tracking-wide mb-1">
                    {t("about.cv2.year")}
                  </p>
                  <h3 className="font-serif text-base md:text-lg font-medium text-foreground mb-1">
                    {t("about.cv2.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t("about.cv2.desc")}
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <span className="absolute left-1 top-3 w-3 h-3 rounded-full bg-background border-2 border-border" />
                <div className="py-2">
                  <p className="text-sm font-semibold text-muted-foreground tracking-wide mb-1">
                    {t("about.cv3.year")}
                  </p>
                  <h3 className="font-serif text-base md:text-lg font-medium text-foreground mb-1">
                    {t("about.cv3.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t("about.cv3.desc")}
                  </p>
                </div>
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
