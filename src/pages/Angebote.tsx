import { ArrowRight, Phone, Heart, Shield, Sparkles, MapPin, Video } from "lucide-react";
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
import heroBanner from "@/assets/hero-banner.webp";

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
    price: 50,
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

      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src={heroBanner}
          alt="Berglandschaft – Angebote und Preise"
          className="w-full h-full object-cover object-center no-fade"
          loading="eager"
        />
      </div>

      <main>
        {/* Intro */}
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

        {/* Was dich erwartet – Werte */}
        <section className="bg-muted py-16 md:py-20">
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

        {/* Ablauf – Drei Schritte */}
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

        {/* Preise & Buchung */}
        <section className="bg-muted py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-4">
              {t("offerings.preiseTitle")}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-4 max-w-[600px] mx-auto leading-relaxed">
              {t("offerings.preiseIntro")}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-12">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Präsenz in Freiburg
              </span>
              <span className="flex items-center gap-1.5">
                <Video className="h-4 w-4" aria-hidden="true" />
                Online per Video
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {offerings.map((offering, index) => (
                <Card
                  key={offering.titleKey}
                  className={`relative group transition-all duration-300 hover:shadow-md bg-card border-border/60 ${
                    offering.badge ? "ring-1 ring-secondary/40" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {offering.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {offering.badge}
                    </div>
                  )}
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
                      <span className="text-2xl font-semibold text-foreground">
                        {offering.price}€
                      </span>
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

        {/* Noch unsicher? – sanfter Fallback */}
        <section className="bg-accent py-16 md:py-20">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Noch unsicher?
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Lass uns kurz sprechen
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Du weißt noch nicht, welches Angebot zu dir passt? In einem kostenlosen 15-Minuten-Vorgespräch finden wir es gemeinsam heraus – ganz ohne Verpflichtung.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 min-h-[44px]"
              onClick={() => trackCTAClick("angebote_consultation", "angebote_page", "link")}
            >
              <a href="/kontakt">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Erstgespräch vereinbaren
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">völlig unverbindlich & persönlich</p>
          </div>
        </section>

        {/* Interne Links */}
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
      </main>

      <BookingDialog />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Angebote;
