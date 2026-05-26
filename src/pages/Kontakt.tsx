import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Send, TrainFront, Car, DoorOpen, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCMS } from "@/contexts/CMSContext";
import { ContactForm } from "@/components/ContactForm";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";


const ERSTGESPRAECH_SEMUID = "8ed15a55-6bf4-46cd-9de5-cef914d992b1";

const Kontakt = () => {
  const { t } = useLanguage();
  const { getImage } = useCMS();
  const portrait = getImage("about.image", profilBild);
  const { hash } = useLocation();
  const calendarRef = useRef<HTMLDivElement>(null);

  // Scroll to hash target (e.g. #anfahrt) immediately before paint
  useLayoutEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    }
  }, [hash]);

  // Mount Orbnet embed widget – guarded against React StrictMode double-mount
  // (würde sonst die Node bei der ersten Cleanup-Phase löschen und Orbnets
  // ResizeObserver ins Leere laufen lassen → null-Reference + ~6s blockierte
  // Touch-Listener bis die Initialisierung "aufgibt").
  useEffect(() => {
    if (!calendarRef.current) return;
    if (calendarRef.current.childElementCount > 0) return; // bereits gemountet

    const mask = document.createElement("div");
    mask.className = "orbnet-booking-mask";
    mask.dataset.semuid = ERSTGESPRAECH_SEMUID;
    mask.dataset.source = "my.orbnet.de";
    mask.dataset.type = "embed";
    mask.style.touchAction = "pan-y";
    calendarRef.current.appendChild(mask);

    if (!document.getElementById("orbnet-booking-script-page")) {
      const script = document.createElement("script");
      script.id = "orbnet-booking-script-page";
      script.src =
        "https://static.orbnet.de/3.0/dist/booking.js?ver=cb722e7da8d1fc2129bd3eafa591d93f828015c5";
      script.crossOrigin = "anonymous";
      script.referrerPolicy = "origin";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);




  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* 1. Orbnet-Kalender direkt oben */}
        <section
          id="erstgespraech"
          className="pt-8 pb-12 md:pt-12 md:pb-16"
        >
          <div className="container mx-auto px-4 max-w-2xl">
            <img
              src={portrait}
              alt="Jona Fels – Systemischer Coach in Freiburg"
              className="w-24 h-24 rounded-full object-cover object-[center_20%] shadow-md mx-auto mb-4 no-fade"
              loading="eager"
              decoding="async"
              width={96}
              height={96}
            />
            <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-3 text-center">
              {t("contact.calendarHeadline")}
            </p>
            <p className="text-sm md:text-base text-muted-foreground text-center mb-6 max-w-xl mx-auto leading-relaxed">
              {t("contact.calendarMicrocopy")}
            </p>
            <div className="relative bg-background rounded-2xl border border-border shadow-sm p-2 md:p-4" style={{ touchAction: "pan-y" }}>
              <div ref={calendarRef} className="min-h-[1700px] md:min-h-[1100px] w-full" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }} />
            </div>
          </div>
        </section>


        {/* 3. Alternative Kontaktwege */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-8 text-center">
              {t("contact.altTitle")}
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <ContactForm />
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                    {t("contact.directTitle")}
                  </h3>
                  <div className="flex flex-col gap-4">
                    <a
                      href="mailto:jona@fels-coach.de"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      aria-label="E-Mail senden"
                    >
                      <div className="p-2.5 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                        <Mail className="h-5 w-5 text-secondary" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground block">{t("contact.emailLabel")}</span>
                        <span className="text-sm text-muted-foreground">jona@fels-coach.de</span>
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
                        <span className="font-medium text-foreground block">{t("contact.telegramLabel")}</span>
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
        <section id="anfahrt" className="py-24 md:py-32 bg-muted/40 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px flex-1 max-w-16 bg-border" />
              <MapPin className="h-5 w-5 text-secondary" />
              <div className="h-px flex-1 max-w-16 bg-border" />
            </div>
            <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3 text-center">
              {t("contact.directions.title")}
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-lg mx-auto text-sm leading-relaxed">
              {t("contact.directions.intro")}
            </p>

            <div className="grid gap-6 md:gap-8 md:grid-cols-3 mt-16 mb-20">
              <Card className="border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-secondary/10">
                      <TrainFront className="h-4 w-4 text-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-sm font-medium text-foreground">{t("contact.directions.tram")}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>{t("contact.directions.tramLine")}</li>
                    <li>{t("contact.directions.tramStop")}</li>
                    <li>{t("contact.directions.tramWalk")}</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Car className="h-4 w-4 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-sm font-medium text-foreground">{t("contact.directions.car")}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>{t("contact.directions.carParking")}</li>
                    <li>{t("contact.directions.carTip")}</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border/60">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-accent/60">
                      <DoorOpen className="h-4 w-4 text-accent-foreground" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-sm font-medium text-foreground">{t("contact.directions.onSite")}</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>{t("contact.directions.onSite1")}</li>
                    <li>{t("contact.directions.onSite2")}</li>
                    <li>{t("contact.directions.onSite3")}</li>
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
              {t("contact.directions.address")}
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
