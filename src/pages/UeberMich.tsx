import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import profilBild from "@/assets/profil-bild-schwarz.png";
const UeberMich = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mb-8">
              <img 
                src={profilBild} 
                alt="Jona Fels - Coach" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-[center_20%] mx-auto shadow-lg border-4 border-secondary/30"
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

          <Card className="bg-card/95 backdrop-blur-sm">
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
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default UeberMich;
