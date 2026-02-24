import { useState, useLayoutEffect } from "react";
import { Mail, Send, TrainFront, Car, DoorOpen, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";
import { useOrbnetBooking } from "@/components/OrbnetBooking";

const ERSTGESPRAECH_SEMUID = "8ed15a55-6bf4-46cd-9de5-cef914d992b1";

const Kontakt = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const { openBooking, BookingDialog } = useOrbnetBooking();
  const erstgespraechRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (location.hash === "#erstgespraech") {
      if (erstgespraechRef.current) {
        erstgespraechRef.current.scrollIntoView({ behavior: "instant", block: "start" });
      }
      openBooking(ERSTGESPRAECH_SEMUID);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {t("contact.headline")}
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {t("contact.text")}
            </p>
          </div>
        </section>

        {/* Erstgespräch */}
        <section className="py-12 md:py-16 bg-muted/40">
          <div id="erstgespraech" ref={erstgespraechRef} className="container mx-auto px-4 max-w-lg scroll-mt-24">
            <Card className="border-secondary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-secondary" aria-hidden="true" />
                  <h2 className="font-serif text-lg font-medium text-foreground">
                    Kostenloses Erstgespräch mit Jona
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Du suchst nach Klarheit, neuer Energie oder einem festen Fels in der Brandung? In diesem kostenlosen 30-minütigen Telefonat finden wir gemeinsam heraus, wo du gerade stehst und wie ich dich als Coach optimal unterstützen kann.
                </p>
                <Button
                  className="w-full min-h-[44px]"
                  onClick={() => openBooking(ERSTGESPRAECH_SEMUID)}
                >
                  <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                  Termin wählen
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="grid gap-8 md:grid-cols-2">
              <ContactForm />
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                    Direkter Kontakt
                  </h3>
                  <div className="flex flex-col gap-4">
                    <a
                      href="mailto:info@fels-coach.de"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      aria-label="E-Mail senden"
                    >
                      <div className="p-2.5 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                        <Mail className="h-5 w-5 text-secondary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground block">E-Mail</span>
                        <span className="text-sm text-muted-foreground">info@fels-coach.de</span>
                      </div>
                    </a>
                    <a
                      href="https://t.me/+4917667608617"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      aria-label="Telegram öffnen"
                    >
                      <div className="p-2.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Send className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground block">Telegram</span>
                        <span className="text-sm text-muted-foreground">+49 176 67608617</span>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Anfahrt */}
        <section id="anfahrt" className="py-12 md:py-16 bg-muted/40 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px flex-1 max-w-16 bg-border" />
              <MapPin className="h-5 w-5 text-secondary" />
              <div className="h-px flex-1 max-w-16 bg-border" />
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3 text-center">
              Anfahrt &amp; Ankommen
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Mein Praxisraum befindet sich in der Karlstraße 51 im Stadtteil Herdern/Neuburg.
            </p>

            <div className="grid gap-5 md:grid-cols-3 mb-8">
              <Card className="border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <TrainFront className="h-4 w-4 text-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-sm font-medium text-foreground">Straßenbahn</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>Linie 3 Richtung Zähringen</li>
                    <li>Haltestelle Tennenbacher Straße</li>
                    <li>4 Minuten zu Fuß</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Car className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-sm font-medium text-foreground">Auto & Parken</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>Parkplätze mit Automaten in der Karlstraße</li>
                    <li>Tipp: ~10 Min. extra einplanen</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-accent/60">
                      <DoorOpen className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-sm font-medium text-foreground">Vor Ort</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>Praxisraum im Erdgeschoss</li>
                    <li>Klingele bei „Praxis"</li>
                    <li>Ich hole dich an der Tür ab</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
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
              Karlstraße 51, 79104 Freiburg im Breisgau
            </p>
          </div>
        </section>
      </main>
      <BookingDialog />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Kontakt;
