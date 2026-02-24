import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { AuthorBox } from "@/components/AuthorBox";
import { useLanguage } from "@/contexts/LanguageContext";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

const UeberMich = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="mb-8">
              <img
                src={profilBild}
                alt="Jona Fels - Systemischer Coach und Prozessbegleiter in Freiburg"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-center mx-auto shadow-md"
                loading="eager"
                width="256"
                height="256"
              />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-3">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("about.subtitle")}</p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
            </div>
          </div>
        </section>

        {/* Guidance */}
        <section className="py-12 md:py-16">
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
        <section className="py-12 md:py-16 bg-muted/40">
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
        <section className="py-16 md:py-24">
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

        {/* Internal Links */}
        <section className="py-10 border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground" aria-label="Verwandte Seiten">
              <Link to="/systemische-familienaufstellung-freiburg" className="hover:text-secondary underline underline-offset-4">
                Was ist Familienaufstellung?
              </Link>
              <span aria-hidden="true">•</span>
              <Link to="/angebote" className="hover:text-secondary underline underline-offset-4">
                Angebote & Termine
              </Link>
              <span aria-hidden="true">•</span>
              <Link to="/kontakt#rueckruf" className="hover:text-secondary underline underline-offset-4">
                Kostenloses Vorgespräch anfragen
              </Link>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default UeberMich;
