import { useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCMS } from "@/contexts/CMSContext";
import { ContactForm } from "@/components/ContactForm";
import { ErstgespraechModal } from "@/components/ErstgespraechModal";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";


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
        {/* 1. Erstgespräch-CTA – öffnet das Modal (gleiche UX wie überall) */}
        <section id="erstgespraech" className="pt-10 pb-12 md:pt-16 md:pb-20">
          <div className="container mx-auto px-4 max-w-2xl text-center">
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
            <p className="text-sm md:text-base text-muted-foreground mb-7 max-w-xl mx-auto leading-relaxed">
              {t("contact.calendarMicrocopy")}
            </p>
            <Button
              size="lg"
              onClick={() => setModalOpen(true)}
              className="rounded-full px-8 py-6 text-base shadow-md hover:shadow-lg transition-all"
            >
              <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
              Kostenloses Erstgespräch buchen
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Kostenlos · 30 Min · Unverbindlich
            </p>
          </div>
        </section>




        {/* 3. Alternative Kontaktwege */}
        <section className="py-28 md:py-36">
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
