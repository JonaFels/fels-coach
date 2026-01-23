import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const UeberMich = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("about.title")}
          </h1>

          {/* Intro Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-center">
                {t("about.subtitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.intro1")}</p>
              <p>{t("about.intro2")}</p>
            </CardContent>
          </Card>

          {/* Guidance Section */}
          <Card className="mb-8">
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
          <Card className="mb-8">
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

          <Card>
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
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default UeberMich;
