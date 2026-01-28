import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { SEOHead } from "@/components/SEOHead";
import { MicroCTA } from "@/components/MicroCTA";
import { useLanguage } from "@/contexts/LanguageContext";

const offerings = [
  {
    titleKey: "offerings.kennenlernen.title",
    descKey: "offerings.kennenlernen.desc",
    price: 20,
    href: "https://cal.com/fels-coach/coaching-kennenlernen",
  },
  {
    titleKey: "offerings.coaching.title",
    descKey: "offerings.coaching.desc",
    price: 50,
    href: "https://cal.com/fels-coach/coaching-termin",
  },
];

const Angebote = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("offerings.title")}
          </h1>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {offerings.map((offering, index) => (
              <Card
                key={offering.titleKey}
                className="relative group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/95 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-xl">
                    {t(offering.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {t(offering.descKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-foreground">
                      {offering.price}€
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group/btn min-h-[44px]"
                  >
                    <a
                      href={offering.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("offerings.book")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="min-h-[44px]">
              <a
                href="https://cal.com/fels-coach"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("offerings.allDates")}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Internal Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-12" aria-label="Verwandte Seiten">
            <Link to="/familienaufstellung" className="hover:text-secondary underline underline-offset-4">
              Was ist Familienaufstellung?
            </Link>
            <span aria-hidden="true">•</span>
            <Link to="/ebook" className="hover:text-secondary underline underline-offset-4">
              Kostenloses E-Book
            </Link>
            <span aria-hidden="true">•</span>
            <Link to="/kontakt" className="hover:text-secondary underline underline-offset-4">
              Fragen? Kontakt
            </Link>
          </nav>
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Angebote;
