import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { SEOHead } from "@/components/SEOHead";
import { AuthorBox } from "@/components/AuthorBox";
import { MicroCTA } from "@/components/MicroCTA";
import { useLanguage } from "@/contexts/LanguageContext";

const Familienaufstellung = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PageBackground>
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("family.title")}
          </h1>

          {/* Intro Section - Inverted Pyramid Style */}
          <Card className="mb-8 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-serif text-xl">
                {t("family.intro.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {t("family.intro.text")}
              </p>
            </CardContent>
          </Card>

          <MicroCTA variant="secondary" className="mb-8" />

          {/* Benefits Section */}
          <Card className="mb-8 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-serif text-xl">
                {t("family.benefits.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground" role="list">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1" aria-hidden="true">•</span>
                  <span>{t("family.benefit1")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1" aria-hidden="true">•</span>
                  <span>{t("family.benefit2")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1" aria-hidden="true">•</span>
                  <span>{t("family.benefit3")}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-1" aria-hidden="true">•</span>
                  <span>{t("family.benefit4")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Process Section */}
          <Card className="mb-8 bg-card/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-serif text-xl">
                {t("family.process.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("family.process.intro")}
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("family.step1.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("family.step1.text")}
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("family.step2.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("family.step2.text")}
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">
                    {t("family.step3.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t("family.step3.text")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mb-8">
            <Button asChild size="lg" className="min-h-[44px]">
              <a
                href="https://cal.com/fels-coach"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("offerings.book")}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Internal Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-8" aria-label="Verwandte Seiten">
            <Link to="/ebook" className="hover:text-secondary underline underline-offset-4">
              Kostenloses E-Book
            </Link>
            <span aria-hidden="true">•</span>
            <Link to="/ueber-mich" className="hover:text-secondary underline underline-offset-4">
              Über Jona Fels
            </Link>
            <span aria-hidden="true">•</span>
            <Link to="/kontakt" className="hover:text-secondary underline underline-offset-4">
              Kontakt
            </Link>
          </nav>

          {/* Author Box */}
          <AuthorBox />
        </article>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Familienaufstellung;
