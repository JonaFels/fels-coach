import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguage } from "@/contexts/LanguageContext";

const offerings = [
  {
    titleKey: "offerings.kennenlernen.title",
    descKey: "offerings.kennenlernen.desc",
    price: 20,
    href: "https://cal.com/systemisches-coaching/systemisches-coaching-erstes-coaching",
  },
  {
    titleKey: "offerings.coaching.title",
    descKey: "offerings.coaching.desc",
    price: 50,
    href: "https://cal.com/systemisches-coaching/systemisches-coaching",
  },
  {
    titleKey: "offerings.paket5.title",
    descKey: "offerings.paket5.desc",
    price: 220,
    oldPrice: 250,
    href: "https://app.cal.eu/fels-coach/5er-paket-systemisches-coaching",
    highlight: true,
  },
  {
    titleKey: "offerings.paket10.title",
    descKey: "offerings.paket10.desc",
    price: 420,
    oldPrice: 500,
    href: "https://app.cal.eu/fels-coach/10er-paket-systemisches-coaching",
  },
  {
    titleKey: "offerings.paketEinloesen.title",
    descKey: "offerings.paketEinloesen.desc",
    href: "#",
    isRedeem: true,
  },
];

const Angebote = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("offerings.title")}
          </h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {offerings.map((offering, index) => (
              <Card
                key={offering.titleKey}
                className={`relative group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  offering.highlight
                    ? "border-secondary ring-1 ring-secondary"
                    : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {offering.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {t("offerings.popular")}
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-xl">
                    {t(offering.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {t(offering.descKey)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {offering.price !== undefined && (
                    <>
                      <div className="flex items-baseline gap-2">
                        {offering.oldPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {offering.oldPrice}€
                          </span>
                        )}
                        <span className="text-3xl font-semibold text-foreground">
                          {offering.price}€
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {t("offerings.onlinePayment")}
                      </p>
                    </>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={offering.highlight ? "default" : "outline"}
                    className="w-full group/btn"
                  >
                    <a
                      href={offering.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("offerings.book")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Angebote;
