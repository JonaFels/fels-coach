import { Mail, Send, TrainFront, Car, DoorOpen, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";
import { QuickRequestForm } from "@/components/QuickRequestForm";
import pflanzeDeko from "@/assets/pflanze-deko.jpg";

const Kontakt = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const callbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === "#rueckruf" && callbackRef.current) {
      callbackRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      callbackRef.current.classList.add("ring-2", "ring-secondary", "ring-offset-2");
      setTimeout(() => {
        callbackRef.current?.classList.remove("ring-2", "ring-secondary", "ring-offset-2");
      }, 3000);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src={pflanzeDeko} 
          alt="Grüne Pflanze – Kontakt und Verbindung" 
          className="w-full h-full object-cover object-[center_70%] no-fade"
          loading="eager"
        />
      </div>

      <PageBackground className="!pt-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-4">
            {t("contact.headline")}
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            {t("contact.text")}
          </p>

          {/* Quick Request Section */}
          <div className="mb-12">
            <div ref={callbackRef} className="transition-all duration-500 rounded-lg max-w-lg mx-auto">
              <QuickRequestForm />
            </div>
          </div>

          {/* Alternative Contact Options */}
          <div className="grid gap-8 md:grid-cols-2 mb-8">
            <ContactForm />
            <Card className="bg-card/95 backdrop-blur-sm">
              <CardContent className="pt-6">
                <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                  Direkter Kontakt
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:info@fels-coach.de"
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    aria-label="E-Mail senden"
                  >
                    <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <Mail className="h-6 w-6 text-secondary" aria-hidden="true" />
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    aria-label="Telegram öffnen"
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Send className="h-6 w-6 text-primary" aria-hidden="true" />
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

          {/* Anfahrt & Ankommen */}
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px flex-1 max-w-16 bg-border" />
              <MapPin className="h-5 w-5 text-secondary" />
              <div className="h-px flex-1 max-w-16 bg-border" />
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3 text-center">
              Anfahrt &amp; Ankommen
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              Meine Praxis befindet sich in der Karlstraße 51 im Stadtteil Herdern/Neuburg. Damit du ganz in Ruhe bei mir ankommen kannst, habe ich dir hier die wichtigsten Infos zusammengestellt.
            </p>

            <div className="grid gap-5 md:grid-cols-3 mb-8">
              {/* ÖPNV */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-full bg-secondary/10">
                      <TrainFront className="h-5 w-5 text-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-base font-medium text-foreground">Straßenbahn</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-secondary mt-1 shrink-0">•</span>
                      <span><strong className="text-foreground font-medium">Linie 4</strong> Richtung Zähringen oder Messe</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary mt-1 shrink-0">•</span>
                      <span>Haltestelle <strong className="text-foreground font-medium">Okenstraße</strong> oder <strong className="text-foreground font-medium">Tennenbacher Straße</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-secondary mt-1 shrink-0">•</span>
                      <span>Nur 3–5 Minuten zu Fuß</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Auto */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-full bg-primary/10">
                      <Car className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-base font-medium text-foreground">Auto &amp; Parken</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>Öffentliche Parkplätze mit Automaten in der Karlstraße</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span><strong className="text-foreground font-medium">Tipp:</strong> Plane ~10 Min. extra für die Parkplatzsuche ein</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>Karlsbau-Parkhaus ca. 10–15 Gehminuten entfernt</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Vor Ort */}
              <Card className="bg-card/95 backdrop-blur-sm border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-full bg-accent/60">
                      <DoorOpen className="h-5 w-5 text-accent-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-base font-medium text-foreground">Vor Ort</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-accent-foreground mt-1 shrink-0">•</span>
                      <span>Praxis im <strong className="text-foreground font-medium">Erdgeschoss</strong> (Treppe nach Hauseingang)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent-foreground mt-1 shrink-0">•</span>
                      <span>Klingele bei <strong className="text-foreground font-medium">„Praxis"</strong></span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent-foreground mt-1 shrink-0">•</span>
                      <span>Ich hole dich direkt an der Tür ab</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.8!2d7.8384!3d47.9990!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9f3e1f3b3d%3A0x0!2sKarlstra%C3%9Fe%2051%2C%2079104%20Freiburg%20im%20Breisgau!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Praxis Jona Fels – Karlstraße 51, 79104 Freiburg im Breisgau"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">
              Karlstraße 51, 79104 Freiburg im Breisgau
            </p>
          </div>
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Kontakt;
