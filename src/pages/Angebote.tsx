import { useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone, Heart, Shield, Sparkles, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { useOrbnetBooking } from "@/components/OrbnetBooking";
import { useErstgespraech } from "@/components/HashBookingTrigger";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";


const Angebote = () => {
  const { t, language } = useLanguage();
  const { BookingDialog } = useOrbnetBooking();
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
              {language === "de" ? (
                <>
                  Ausführlich erklärt findest du die Methode auf der Seite zur{" "}
                  <Link
                    to="/systemische-familienaufstellung-freiburg"
                    className="underline underline-offset-4 decoration-secondary/50 hover:decoration-secondary text-foreground"
                  >
                    systemischen Familienaufstellung
                  </Link>
                  .
                </>
              ) : (
                <>
                  You can read about the method in detail on the page about{" "}
                  <Link
                    to="/systemische-familienaufstellung-freiburg"
                    className="underline underline-offset-4 decoration-secondary/50 hover:decoration-secondary text-foreground"
                  >
                    systemic family constellation
                  </Link>
                  .
                </>
              )}
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
            <h2 className="font-serif text-2xl font-semibold text-foreground text-center mb-6">
              {t("offerings.preiseTitle")}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-32 md:mb-40 max-w-[600px] mx-auto leading-relaxed whitespace-pre-line">
              {t("offerings.preiseIntro")}
            </p>

            {/* Erstgespräch Highlight */}
            <div className="mb-32 md:mb-44 rounded-2xl border border-secondary/40 bg-secondary/10 p-8 md:p-10 text-center shadow-sm">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-5">
                {language === "de"
                  ? "Der entspannte Start in unsere Zusammenarbeit"
                  : "A relaxed start to our work together"}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
                {language === "de"
                  ? "Mir ist wichtig, dass du dich wohlfühlst. Daher empfehle ich zum Start immer ein kostenloses, 30-minütiges Telefonat. So können wir in Ruhe schauen, wo du stehst und ob mein Ansatz für dich passt."
                  : "It's important to me that you feel comfortable. That's why I always recommend a free 30-minute phone call to start. We can take our time to see where you stand and whether my approach is right for you."}
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
                  {language === "de"
                    ? "Kostenloses Telefonat vereinbaren"
                    : "Schedule a free phone call"}
                </a>
              </Button>
            </div>

            {/* Preise & Termine – reine Info, keine Buchung */}
            <div className="mt-4">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  {language === "de" ? "Preise & Termine" : "Prices & availability"}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  {language === "de"
                    ? "Was dich erwartet – auf einen Blick"
                    : "Everything at a glance"}
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {language === "de"
                    ? "Damit du weißt, was möglich ist. Nach unserem kostenlosen Erstgespräch kannst du einen Termin mit mir ausmachen."
                    : "So you know what's possible. After our free intro call, you can book a session with me."}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-7">
                  <div className="flex items-baseline justify-between mb-2 gap-3">
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                      {language === "de" ? "Kennenlernen-Sitzung" : "Intro session"}
                    </h3>
                    <span className="text-sm font-medium text-secondary whitespace-nowrap">
                      {language === "de" ? "Einstieg" : "Entry"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {language === "de"
                      ? "Dein Einstieg zum reduzierten Preis: Eine vollwertige Sitzung, in der wir dein Anliegen systemisch einordnen und erste Lösungsansätze erarbeiten."
                      : "Your entry point at a reduced price: a full session to place your concern systemically and develop first steps."}
                  </p>
                  <div className="flex items-baseline gap-2 border-t border-border/50 pt-4">
                    <span className="text-3xl font-semibold text-foreground">55&nbsp;€</span>
                    <span className="text-sm text-muted-foreground">/ 80&nbsp;Min.</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-secondary/40 bg-secondary/5 p-6 md:p-7">
                  <div className="flex items-baseline justify-between mb-2 gap-3">
                    <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                      {language === "de" ? "Coaching mit Einzelaufstellung" : "Coaching with constellation"}
                    </h3>
                    <span className="text-sm font-medium text-secondary whitespace-nowrap">
                      {language === "de" ? "Regulär" : "Regular"}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {language === "de"
                      ? "80 Minuten fokussierte Arbeit an dem, was gerade dran ist – systemisch, lösungsorientiert und mit konkreten nächsten Schritten."
                      : "80 minutes of focused work on what matters most right now – systemic, solution-oriented, with concrete next steps."}
                  </p>
                  <div className="flex items-baseline gap-2 border-t border-border/50 pt-4">
                    <span className="text-3xl font-semibold text-foreground">95&nbsp;€</span>
                    <span className="text-sm text-muted-foreground">/ 80&nbsp;Min.</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-muted/40 border border-border/50 p-6 md:p-7 text-sm text-muted-foreground leading-relaxed">
                <p className="font-medium text-foreground mb-2">
                  {language === "de" ? "Wann finden die Termine statt?" : "When are sessions offered?"}
                </p>
                <ul className="space-y-1.5">
                  <li>
                    • {language === "de"
                      ? "Vor Ort in Freiburg (Karlstraße 51) oder online per Video"
                      : "In person in Freiburg (Karlstraße 51) or online via video"}
                  </li>
                  <li>
                    • {language === "de"
                      ? "Regelmäßige Termine samstags von 14:00 – 20:00 Uhr"
                      : "Regular slots on Saturdays, 2 pm – 8 pm"}
                  </li>
                  <li>
                    • {language === "de"
                      ? "Weitere Zeiten nach Absprache im Erstgespräch möglich"
                      : "Additional times can be arranged in the intro call"}
                  </li>
                </ul>
              </div>
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
