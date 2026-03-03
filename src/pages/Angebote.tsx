import { useState } from "react";
import { ArrowRight, Phone, Heart, Shield, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCalendarBookingStart, trackCTAClick } from "@/lib/tracking";
import { useOrbnetBooking } from "@/components/OrbnetBooking";


const offerings = [
  {
    titleKey: "offerings.kennenlernen.title",
    descKey: "offerings.kennenlernen.desc",
    price: 30,
    badge: "Einstieg",
    semuid: "55df32ef-b5d1-468e-a4ba-f7f892398327",
  },
  {
    titleKey: "offerings.coaching.title",
    descKey: "offerings.coaching.desc",
    price: 70,
    semuid: "609d5e7a-e208-4715-b073-e99206aebbf7",
  },
];

const Angebote = () => {
  const { t } = useLanguage();
  const { openBooking, BookingDialog } = useOrbnetBooking();
  

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content">
        {/* Intro */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t("offerings.title")}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("offerings.pageIntro")}
            </p>
          </div>
        </section>

        {/* Was dich erwartet */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              {[
                { icon: Heart, label: "Einfühlsam", desc: "Ich höre dir zu – ohne Bewertung, mit echtem Interesse." },
                { icon: Shield, label: "Geschützter Rahmen", desc: "Alles bleibt vertraulich. Dein Tempo bestimmt den Weg." },
                { icon: Sparkles, label: "Nachhaltig", desc: "Wir arbeiten an Lösungen, die in deinem Alltag wirken." },
              ].map((val) => (
                <div key={val.label} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <val.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground">{val.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-4">
              {t("offerings.ablaufTitle")}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-10 leading-relaxed">
              Jede Sitzung dauert 80 Minuten und folgt einem klaren, aber flexiblen Rahmen – damit du dich voll auf dein Thema einlassen kannst.
            </p>
            <ol className="space-y-6">
              {["offerings.step1", "offerings.step2", "offerings.step3"].map((key, i) => (
                <li key={key} className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground leading-relaxed pt-1.5">{t(key)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Preise & Buchung */}
        <section className="py-16 md:py-20 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-3">
              {t("offerings.preiseTitle")}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-3 max-w-[600px] mx-auto leading-relaxed">
              {t("offerings.preiseIntro")}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Präsenz in Freiburg
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {offerings.map((offering, index) => (
                <Card
                  key={offering.titleKey}
                  className={`relative group transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-card border-border/50 rounded-2xl ${
                    offering.badge ? "ring-1 ring-primary/30" : ""
                  }`}
                >
                  {offering.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {offering.badge}
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="font-serif text-xl">{t(offering.titleKey)}</CardTitle>
                    <CardDescription className="text-sm mt-2 leading-relaxed">{t(offering.descKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-foreground">{offering.price}€</span>
                      <span className="text-sm text-muted-foreground">/ 80 Min.</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={offering.badge ? "default" : "outline"}
                      className="w-full group/btn min-h-[44px]"
                      onClick={() => {
                        trackCalendarBookingStart("angebote_card", offering.semuid);
                        openBooking(offering.semuid);
                      }}
                    >
                      {t("offerings.book")}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Noch unsicher? */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Noch unsicher?
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Lass uns kurz sprechen
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Du weißt noch nicht, welches Angebot zu dir passt? In einem kostenlosen 30-Minuten-Vorgespräch finden wir es gemeinsam heraus – ganz ohne Verpflichtung.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 min-h-[44px]"
              asChild
            >
              <a href="/kontakt" onClick={() => trackCTAClick("angebote_consultation", "angebote_page", "link")}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Erstgespräch vereinbaren
              </a>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">völlig unverbindlich & persönlich</p>
          </div>
        </section>
      </main>

      <BookingDialog />
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Angebote;
