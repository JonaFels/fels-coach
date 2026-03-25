import { useEffect, useRef } from "react";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import { Mail, Send, TrainFront, Car, DoorOpen, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

const ERSTGESPRAECH_SEMUID = "8ed15a55-6bf4-46cd-9de5-cef914d992b1";

const Kontakt = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const kalenderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to calendar when #erstgespraech hash is present
  useEffect(() => {
    if (location.hash === "#erstgespraech" && kalenderRef.current) {
      kalenderRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location.hash]);

  // Embed Orbnet booking widget & suppress its fullscreen loading overlay
  useEffect(() => {
    if (!containerRef.current) return;

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    const mask = document.createElement("div");
    mask.className = "orbnet-booking-mask";
    mask.dataset.semuid = ERSTGESPRAECH_SEMUID;
    mask.dataset.source = "my.orbnet.de";
    mask.dataset.type = "embed";
    containerRef.current.appendChild(mask);

    // Observer: remove any fixed-position loading overlay Orbnet injects into body
    const removeOrbnetOverlay = () => {
      document.querySelectorAll('body > div[style*="position: fixed"]').forEach((el) => {
        const html = el.innerHTML || "";
        if (html.includes("Lade") || html.includes("loading") || html.includes("spinner")) {
          (el as HTMLElement).style.display = "none";
        }
      });
    };

    const observer = new MutationObserver(removeOrbnetOverlay);
    observer.observe(document.body, { childList: true, subtree: false });

    // Also run immediately and after short delays
    removeOrbnetOverlay();
    const t1 = setTimeout(removeOrbnetOverlay, 300);
    const t2 = setTimeout(removeOrbnetOverlay, 800);
    const t3 = setTimeout(removeOrbnetOverlay, 1500);

    const existingScript = document.getElementById("orbnet-booking-script");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "orbnet-booking-script";
    script.src =
      "https://static.orbnet.de/3.0/dist/booking.js?ver=7643f23565c4865f828a0e810e468eab35cf22e2";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "origin";
    document.body.appendChild(script);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PraxisHeroBanner variant="sitzbereich" />

      <main id="main-content" className="flex-1">
        {/* 1. Empathische Einladung */}
        <section id="willkommen" className="py-12 md:py-16 scroll-mt-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img
                  src={profilBild}
                  alt="Jona Fels – Systemischer Coach"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center shadow-lg"
                  loading="eager"
                  width="160"
                  height="160"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  {t("contact.headline")}
                </h1>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Du möchtest etwas verändern? Lass uns gemeinsam schauen, wo du stehst. Ich freue mich darauf, dich kennenzulernen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Orbnet-Kalender direkt eingebettet */}
        <section
          id="erstgespraech"
          ref={kalenderRef}
          className="py-16 md:py-20 bg-muted/40 scroll-mt-24"
        >
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="relative min-h-[400px] bg-background rounded-2xl border border-border shadow-sm p-4 md:p-6">
              <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-2 text-center">
                Lass uns in Ruhe sprechen
              </h2>
              <p className="text-sm text-muted-foreground text-center mb-4">
                30 Minuten · kostenfrei · völlig unverbindlich
              </p>
              <div ref={containerRef} />
            </div>
          </div>
        </section>

        {/* 3. Alternative Kontaktwege */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-8 text-center">
              Oder schreib mir direkt
            </h2>
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
        <section id="anfahrt" className="py-16 md:py-20 bg-muted/40 scroll-mt-24">
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
                    <li>Es gibt einen kleinen Wartebereich</li>
                    <li>Ich komme direkt zur Tür</li>
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
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Kontakt;
