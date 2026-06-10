import { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { useErstgespraech } from "@/components/HashBookingTrigger";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";


const offerings = [
  {
    titleKey: "offerings.kennenlernen.title",
    descKey: "offerings.kennenlernen.desc",
    price: 55,
    badgeKey: "offerings.badge.einstieg",
    semuid: "609d5e7a-e208-4715-b073-e99206aebbf7",
  },
  {
    titleKey: "offerings.coaching.title",
    descKey: "offerings.coaching.desc",
    price: 95,
    semuid: "55df32ef-b5d1-468e-a4ba-f7f892398327",
  },
];

const Angebote = () => {
  const { t, language } = useLanguage();
  const { openBooking, BookingDialog } = useOrbnetBooking();
  const booking = useErstgespraech();
  const { hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
  }, [hash]);


  const values = [
    { icon: Heart, labelKey: "offerings.value.empathetic", descKey: "offerings.value.empatheticDesc" },
    { icon: Shield, labelKey: "offerings.value.safe", descKey: "offerings.value.safeDesc" },
    { icon: Sparkles, labelKey: "offerings.value.lasting", descKey: "offerings.value.lastingDesc" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PraxisHeroBanner variant="lounge" />

      <main id="main-content">
        {/* Intro */}
        <section className="py-36 md:py-44">
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
        <section className="py-40 md:py-48 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              {values.map((val) => (
                <div key={val.labelKey} className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <val.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground">{t(val.labelKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(val.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-40 md:py-48">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-4">
              {t("offerings.ablaufTitle")}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">
              {t("offerings.ablaufIntro")}
            </p>
            <p className="text-sm text-muted-foreground text-center mb-10 leading-relaxed">
              {t("offerings.methodLink.prefix")}
              <Link
                to="/systemische-familienaufstellung-freiburg"
                className="underline underline-offset-4 decoration-secondary/50 hover:decoration-secondary text-foreground"
              >
                {t("offerings.methodLink.text")}
              </Link>
              .
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
        <section className="py-40 md:py-48 bg-muted/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-3">
              {t("offerings.preiseTitle")}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-3 max-w-[600px] mx-auto leading-relaxed whitespace-pre-line">
              {t("offerings.preiseIntro")}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-10">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {t("offerings.location")}
              </span>
            </div>

            {/* Erstgespräch Highlight */}
            <div className="mb-10 rounded-2xl border border-secondary/40 bg-secondary/10 p-8 md:p-10 text-center shadow-sm">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                {t("offerings.erstgespraech.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
                {t("offerings.erstgespraech.text")}
              </p>
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md min-h-[44px]"
                asChild
              >
                <a
                  href="/kontakt#erstgespraech"
                  onClick={(e) => {
                    if (booking) {
                      e.preventDefault();
                      booking.openErstgespraech();
                    }
                    trackCTAClick("angebote_free_call", "angebote_page", "link");
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("offerings.erstgespraech.cta")}
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center mb-8 leading-relaxed max-w-xl mx-auto">
              {t("offerings.directBook.text")}
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {offerings.map((offering, index) => (
                <Card
                  key={offering.titleKey}
                  className={`relative group transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-card border-border/50 rounded-2xl ${
                    offering.badgeKey ? "ring-1 ring-primary/30" : ""
                  }`}
                >
                  {offering.badgeKey && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {t(offering.badgeKey)}
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="font-serif text-xl">{t(offering.titleKey)}</CardTitle>
                    <CardDescription className="text-sm mt-2 leading-relaxed">{t(offering.descKey)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-foreground">{offering.price}€</span>
                      <span className="text-sm text-muted-foreground">{t("offerings.perUnit")}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={offering.badgeKey ? "default" : "outline"}
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

        {/* Anfahrt / Karte */}
        <section id="anfahrt" className="py-36 md:py-44 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px flex-1 max-w-16 bg-border" />
              <MapPin className="h-5 w-5 text-secondary" />
              <div className="h-px flex-1 max-w-16 bg-border" />
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-6 text-center">
              {t("contact.directions.title")}
            </h2>
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.8!2d7.8384!3d47.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9f3e1f3b3d%3A0x0!2sKarlstra%C3%9Fe%2051%2C%2079104%20Freiburg%20im%20Breisgau!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Praxisraum Jona – Karlstraße 51, 79104 Freiburg im Breisgau"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              {t("contact.directions.address")}
            </p>
          </div>
        </section>

        {/* Noch unsicher? */}
        <section className="py-40 md:py-48">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              {t("offerings.unsure")}
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              {t("offerings.unsureTitle")}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t("offerings.unsureText")}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 min-h-[44px]"
              asChild
            >
              <a
                href="/kontakt#erstgespraech"
                onClick={(e) => {
                  if (booking) {
                    e.preventDefault();
                    booking.openErstgespraech();
                  }
                  trackCTAClick("angebote_consultation", "angebote_page", "link");
                }}
              >
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("offerings.unsureCta")}
              </a>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">{t("offerings.unsureMicrocopy")}</p>
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
