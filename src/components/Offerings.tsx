import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCalendarBookingStart } from "@/lib/tracking";

const offerings = [
  {
    titleKey: "offerings.kennenlernen.title",
    descKey: "offerings.kennenlernen.desc",
    price: 30,
    duration: 30,
    href: "https://cal.com",
  },
  {
    titleKey: "offerings.coaching.title",
    descKey: "offerings.coaching.desc",
    price: 50,
    duration: 60,
    href: "https://cal.com",
  },
  {
    titleKey: "offerings.paket5.title",
    descKey: "offerings.paket5.desc",
    price: 220,
    duration: 300,
    href: "https://cal.com",
    highlight: true,
  },
  {
    titleKey: "offerings.paket10.title",
    descKey: "offerings.paket10.desc",
    price: 420,
    duration: 600,
    href: "https://cal.com",
  },
];

export const Offerings = () => {
  const { t } = useLanguage();

  return (
    <section id="coaching" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
            {t("offerings.title")}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
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
                  Beliebt
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
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold text-foreground">
                    {offering.price}€
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {t("offerings.duration")}: {offering.duration}{" "}
                  {t("offerings.minutes")}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant={offering.highlight ? "default" : "outline"}
                  className="w-full group/btn"
                  onClick={() => trackCalendarBookingStart("offerings_card", offering.href)}
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
    </section>
  );
};
