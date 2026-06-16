import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import zertifikatBracht from "@/assets/zertifikat-familienaufsteller-wolfgang-bracht.webp";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { AuthorBox } from "@/components/AuthorBox";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCMS } from "@/contexts/CMSContext";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import { useHalfHeroHashScroll } from "@/hooks/useHalfHeroHashScroll";

const UeberMich = () => {
  const { t, language } = useLanguage();
  const { getImage } = useCMS();
  const portrait = getImage("about.image", profilBild);
  const heroRef = useRef<HTMLDivElement>(null);

  useHalfHeroHashScroll("#portrait", heroRef, 0.65);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <JsonLd />
      <Header />
      <div ref={heroRef}>
        <PraxisHeroBanner variant="sitzbereich" />
      </div>
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section id="portrait" className="relative -mt-12 pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="mb-6">
              <img
                src={portrait}
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
        <section className="pt-16 md:pt-24 pb-16 md:pb-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
            </div>
          </div>
        </section>

        {/* Guidance */}
        <section className="py-32 md:py-36">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 border-l-4 border-secondary pl-4">
              {t("about.guidance.title")}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.guidance1")}</p>
              <p>{t("about.guidance2")}</p>
              <p>{t("about.guidance3")}</p>
              <p>
                {language === "de" ? (
                  <>
                    Wie ich konkret arbeite, erfährst du auf der Seite zur{" "}
                    <Link
                      to="/systemische-familienaufstellung-freiburg"
                      className="underline underline-offset-4 decoration-secondary/50 hover:decoration-secondary text-foreground"
                    >
                      systemischen Familienaufstellung in Freiburg
                    </Link>
                    .
                  </>
                ) : (
                  <>
                    To see how I actually work, visit the page on{" "}
                    <Link
                      to="/systemische-familienaufstellung-freiburg"
                      className="underline underline-offset-4 decoration-secondary/50 hover:decoration-secondary text-foreground"
                    >
                      systemic family constellation in Freiburg
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Core */}
        <section className="py-32 md:py-36 bg-muted/40">
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
        <section className="py-32 md:py-36">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-10">
              {t("about.cv.title")}
            </h2>
            <div className="space-y-6">
              {/* Current entry – Gestalttherapie */}
              <div className="border-l-2 border-secondary pl-5 py-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <span className="text-sm font-semibold text-secondary">
                    {t("about.cv4.year")}
                  </span>
                  <span className="text-xs text-muted-foreground italic">
                    {t("about.cv4.badge")}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {t("about.cv4.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("about.cv4.desc")}
                </p>
              </div>

              {/* Current entry – Familiensteller */}
              <div className="border-l-2 border-secondary pl-5 py-1">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <span className="text-sm font-semibold text-secondary">
                    {t("about.cv1.year")}
                  </span>
                  <span className="text-xs text-muted-foreground italic">
                    {t("about.cv1.badge")}
                  </span>
                </div>
                <Dialog>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {t("about.cv1.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t("about.cv1.desc")}
                  </p>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label="Ausbildungsbescheinigung Familiensteller ansehen"
                      className="group mt-2 inline-flex items-center gap-2 text-left cursor-pointer hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={zertifikatBracht}
                        alt="Vorschau Ausbildungsbescheinigung Familiensteller"
                        className="h-12 w-9 object-cover rounded ring-1 ring-border group-hover:ring-secondary/50 transition"
                        loading="lazy"
                      />
                      <span className="font-serif text-sm font-medium text-foreground underline-offset-2 group-hover:underline">
                        Zertifikat anschauen
                      </span>

                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[94vh] p-0 border-0 bg-background overflow-hidden rounded-xl shadow-2xl">
                    <div className="flex flex-col max-h-[94vh]">
                      <DialogHeader className="px-8 pt-7 pb-5 border-b border-border bg-muted/40">
                        <div className="flex items-center gap-3">
                          <span className="inline-block h-8 w-1 bg-secondary rounded-full" aria-hidden />
                          <div>
                            <DialogTitle className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                              Ausbildungsbescheinigung
                            </DialogTitle>
                            <DialogDescription className="text-sm text-muted-foreground mt-1">
                              Familiensteller-Ausbildung 2025/26 · Wolfgang Bracht · Freiburg, April 2026
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>
                      <div className="flex items-center justify-center px-6 md:px-10 py-8 bg-gradient-to-b from-muted/30 to-background overflow-auto">
                        <img
                          src={zertifikatBracht}
                          alt="Ausbildungsbescheinigung Familiensteller von Jona Fels, ausgestellt von Wolfgang Bracht, Freiburg April 2026"
                          className="max-h-[72vh] w-auto h-auto object-contain rounded-md shadow-xl ring-1 ring-border"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

              </div>

              <div className="border-l-2 border-border pl-5 py-1">
                <span className="text-sm font-semibold text-muted-foreground">
                  {t("about.cv2.year")}
                </span>
                <h3 className="font-serif text-base font-medium text-foreground mt-1 mb-1">
                  {t("about.cv2.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("about.cv2.desc")}
                </p>
              </div>

              <div className="border-l-2 border-border pl-5 py-1">
                <span className="text-sm font-semibold text-muted-foreground">
                  {t("about.cv3.year")}
                </span>
                <h3 className="font-serif text-base font-medium text-foreground mt-1 mb-1">
                  {t("about.cv3.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("about.cv3.desc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Praxinode – subtle side project mention */}
        <section className="py-14 md:py-28 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {language === "de" ? (
                <>
                  Neben dem Coaching begleite ich auch Kollegen in die digitale Welt – mit{" "}
                  <a
                    href="https://praxinode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-secondary/50 hover:decoration-secondary text-foreground"
                  >
                    Praxinode
                  </a>
                  , Webseiten für Therapeuten & Coaches.
                </>
              ) : (
                <>
                  Besides coaching, I also help colleagues enter the digital world – with{" "}
                  <a
                    href="https://praxinode.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-secondary/50 hover:decoration-secondary text-foreground"
                  >
                    Praxinode
                  </a>
                  , websites for therapists & coaches.
                </>
              )}
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default UeberMich;
