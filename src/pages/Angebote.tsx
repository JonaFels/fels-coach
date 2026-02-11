import { useState } from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { SEOHead } from "@/components/SEOHead";
import { InlineQuickForm } from "@/components/InlineQuickForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCalendarBookingStart, trackCTAClick } from "@/lib/tracking";

const offerings = [
  {
    titleKey: "offerings.kennenlernen.title",
    descKey: "offerings.kennenlernen.desc",
    price: 30,
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
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4">
          {/* Warm intro */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-6">
            {t("offerings.title")}
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            {t("offerings.pageIntro")}
          </p>

          {/* Process steps */}
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-8">
              {t("offerings.ablaufTitle")}
            </h2>
            <ol className="space-y-5">
              {["offerings.step1", "offerings.step2", "offerings.step3"].map((key, i) => (
                <li key={key} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/15 text-secondary flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground pt-1">{t(key)}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Free consultation CTA */}
          <div className="text-center mb-16">
            {showForm ? (
              <div className="max-w-md mx-auto">
                <InlineQuickForm onClose={() => setShowForm(false)} />
              </div>
            ) : (
              <>
                <Button
                  size="lg"
                  className="text-base px-8 min-h-[44px]"
                  onClick={() => {
                    trackCTAClick("angebote_consultation", "angebote_page", "inline_form");
                    setShowForm(true);
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("hero.ctaConsultation")}
                </Button>
                <p className="mt-3 text-sm text-muted-foreground">{t("hero.ctaMicrocopy")}</p>
              </>
            )}
          </div>

          {/* Pricing section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-3">
              {t("offerings.preiseTitle")}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-8">
              {t("offerings.preiseIntro")}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
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
                      <span className="text-xl font-semibold text-foreground">
                        {offering.price}€
                      </span>
                      <span className="text-sm text-muted-foreground">/ 80 Min.</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group/btn min-h-[44px]"
                      onClick={() => trackCalendarBookingStart("angebote_card", offering.href)}
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

            <div className="text-center mt-8">
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="min-h-[44px] text-muted-foreground"
                onClick={() => trackCalendarBookingStart("angebote_all_dates", "https://cal.com/fels-coach")}
              >
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
          </div>

          {/* Internal Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-16" aria-label="Verwandte Seiten">
            <Link to="/systemische-familienaufstellung-freiburg" className="hover:text-secondary underline underline-offset-4">
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
