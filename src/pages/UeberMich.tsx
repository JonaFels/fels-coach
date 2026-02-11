import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { SEOHead } from "@/components/SEOHead";
import { AuthorBox } from "@/components/AuthorBox";
import { MicroCTA } from "@/components/MicroCTA";
import { useLanguage } from "@/contexts/LanguageContext";
import profilBild from "@/assets/profil-bild-schwarz.png";
import pflanzeDeko from "@/assets/pflanze-deko.jpg";

const UeberMich = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      {/* Hero Banner with visible plant image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={pflanzeDeko} 
          alt="Grüne Pflanze – Wachstum und Begleitung" 
          className="w-full h-full object-cover object-[center_70%] no-fade"
          loading="eager"
        />
        
      </div>

      <PageBackground className="!pt-8">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <img 
                src={profilBild} 
                alt="Jona Fels - Systemischer Coach und Familienaufsteller in Freiburg" 
                className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover object-center mx-auto shadow-lg border-4 border-secondary/30"
                loading="lazy"
                width="320"
                height="320"
              />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              {t("about.title")}
            </h1>
            <p className="text-lg text-muted-foreground">{t("about.subtitle")}</p>
          </div>

          {/* Intro Section */}
          <Card className="mb-8 bg-card/95 backdrop-blur-sm">
            <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
            </CardContent>
          </Card>

          <MicroCTA className="mb-8" />

          {/* Guidance Section */}
          <Card className="mb-8 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-serif text-xl border-l-4 border-secondary pl-4">
                {t("about.guidance.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.guidance1")}</p>
              <p>{t("about.guidance2")}</p>
              <p>{t("about.guidance3")}</p>
            </CardContent>
          </Card>

          {/* Core Section */}
          <Card className="mb-8 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-serif text-xl border-l-4 border-secondary pl-4">
                {t("about.core.title")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.core1")}</p>
              <p>{t("about.core2")}</p>
            </CardContent>
          </Card>

          {/* CV Section */}
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center my-12">
            {t("about.cv.title")}
          </h2>

          <Card className="bg-card/95 backdrop-blur-sm mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="border-l-2 border-secondary pl-4 py-2">
                  <p className="text-muted-foreground">{t("about.cv1")}</p>
                </div>
                <div className="border-l-2 border-muted pl-4 py-2">
                  <p className="text-muted-foreground">{t("about.cv2")}</p>
                </div>
                <div className="border-l-2 border-muted pl-4 py-2">
                  <p className="text-muted-foreground">{t("about.cv3")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internal Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8" aria-label="Verwandte Seiten">
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
        </article>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default UeberMich;
