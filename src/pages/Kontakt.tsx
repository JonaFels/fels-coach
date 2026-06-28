import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCMS } from "@/contexts/CMSContext";
import { ContactForm } from "@/components/ContactForm";
import { ErstgespraechModal } from "@/components/ErstgespraechModal";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

const THERAPSY_URL = "https://bookings.therapsy.at/?type=c28ea3d9-ea19-45f5-a025-6f5eff92b199&id=3f27492a3d11dc68041c958654a5b7e6";

const Kontakt = () => {
  const { t } = useLanguage();
  const { getImage } = useCMS();
  const portrait = getImage("about.image", profilBild);
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  // Legacy: redirect #anfahrt to /angebote#anfahrt
  useLayoutEffect(() => {
    if (!hash) return;
    if (hash === "#erstgespraech") {
      setModalOpen(true);
      return;
    }
    if (hash === "#anfahrt") {
      navigate("/angebote#anfahrt", { replace: true });
      return;
    }
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    }
  }, [hash, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* 1. Erstgespräch – Intro + Inline-Kalender */}
        <section id="erstgespraech" className="pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center">
              <img
                src={portrait}
                alt="Jona Fels – Systemischer Coach in Freiburg"
                className="w-24 h-24 rounded-full object-cover object-[center_20%] shadow-md mx-auto mb-4 no-fade"
                loading="eager"
                decoding="async"
                width={96}
                height={96}
              />
              <p className="font-serif text-xl md:text-2xl font-medium text-foreground mb-3">
                {t("contact.calendarHeadline")}
              </p>
              <p className="text-xs text-muted-foreground mb-20 md:mb-28">
                Kostenlos · 30 Min · Unverbindlich
              </p>
            </div>

            {/* Inline Kalender (Therapsy) */}
            <div className="rounded-2xl border border-border/60 bg-card shadow-sm p-3 md:p-5">
              <iframe
                src={THERAPSY_URL}
                title="Booking Widget"
                loading="lazy"
                className="w-full border-0 rounded-lg"
                style={{ height: "750px" }}
                allow="payment"
              />
            </div>
          </div>
        </section>

        {/* 2. Alternative Kontaktwege */}
        <section className="py-24 md:py-32 bg-muted/30">
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
                      href="https://wa.me/4917667608617"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      aria-label="WhatsApp öffnen"
                    >
                      <div className="p-2.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
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

      </main>
      <Footer />
      <CookieBanner />
      <ErstgespraechModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Kontakt;
