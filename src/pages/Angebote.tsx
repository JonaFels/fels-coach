import { useState } from "react";
import { ArrowRight, Phone, Heart, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { InlineQuickForm } from "@/components/InlineQuickForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCalendarBookingStart, trackCTAClick } from "@/lib/tracking";
import pflanzeDeko from "@/assets/pflanze-deko.jpg";

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

      {/* Hero Banner with visible plant image */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src={pflanzeDeko} 
          alt="Grüne Pflanze – Wachstum und Veränderung" 
          className="w-full h-full object-cover object-[center_40%] no-fade"
          loading="eager"
        />
        
      </div>

      {/* Hero Text */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-[700px]">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            {t("offerings.title")}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("offerings.pageIntro")}
          </p>
        </div>
      </section>

      {/* Werte – was dich hier erwartet */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-[700px]">
          <div className="grid gap-10 md:grid-cols-3 text-center">
            {[
              { icon: Heart, label: "Einfühlsam", desc: "Ich höre dir zu – ohne Bewertung, mit echtem Interesse." },
              { icon: Shield, label: "Geschützter Rahmen", desc: "Alles bleibt vertraulich. Dein Tempo bestimmt den Weg." },
              { icon: Sparkles, label: "Nachhaltig", desc: "Wir arbeiten an Lösungen, die in deinem Alltag wirken." },
            ].map((val) => (
              <div key={val.label} className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <val.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-base font-semibold text-foreground">{val.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf – sanfte Schritte */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-[700px]">
          <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-4">
            {t("offerings.ablaufTitle")}
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-12 leading-relaxed">
            Kein starres Programm – sondern ein Weg, der sich ganz nach dir richtet.
          </p>
          <ol className="space-y-8">
            {["offerings.step1", "offerings.step2", "offerings.step3"].map((key, i) => (
              <li key={key} className="flex items-start gap-6">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold mt-0.5">
                  {i + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-2">{t(key)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Einladung zum Erstgespräch */}
      <section className="bg-accent py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Der erste Schritt ist ein Gespräch
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            In einem kurzen, kostenlosen Vorgespräch klären wir gemeinsam, ob und wie ich dich unterstützen kann. Ganz ohne Verpflichtung.
          </p>
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
              <p className="mt-4 text-sm text-muted-foreground">{t("hero.ctaMicrocopy")}</p>
            </>
          )}
        </div>
      </section>

      {/* Preise – transparent */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-4">
            {t("offerings.preiseTitle")}
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-12 max-w-[600px] mx-auto leading-relaxed">
            {t("offerings.preiseIntro")}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {offerings.map((offering, index) => (
              <Card
                key={offering.titleKey}
                className="relative group transition-all duration-300 hover:shadow-md bg-card border-border/60"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-xl">
                    {t(offering.titleKey)}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2 leading-relaxed">
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

          <div className="text-center mt-10">
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
      </section>

      {/* Sanfte interne Links */}
      <section className="bg-background py-14">
        <nav className="container mx-auto px-4 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground" aria-label="Verwandte Seiten">
          <Link to="/systemische-familienaufstellung-freiburg" className="hover:text-secondary underline underline-offset-4">
            Was ist Familienaufstellung?
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/ebook" className="hover:text-secondary underline underline-offset-4">
            Kostenloses E-Book
          </Link>
          <span aria-hidden="true">·</span>
          <Link to="/kontakt" className="hover:text-secondary underline underline-offset-4">
            Fragen? Kontakt
          </Link>
        </nav>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Angebote;
