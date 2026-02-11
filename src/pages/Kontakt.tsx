import { Mail, Send, Calendar } from "lucide-react";
import { trackCalendarBookingStart } from "@/lib/tracking";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

  // Scroll to callback form if #rueckruf hash is present
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

      {/* Hero Banner with visible plant image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={pflanzeDeko} 
          alt="Grüne Pflanze – Kontakt und Verbindung" 
          className="w-full h-full object-cover no-fade"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
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
            <div className="grid gap-6 md:grid-cols-2">
              <div ref={callbackRef} className="transition-all duration-500 rounded-lg">
                <QuickRequestForm />
              </div>
              <Card className="bg-card/95 backdrop-blur-sm border-secondary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-5 w-5 text-secondary" aria-hidden="true" />
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {t("contact.optionB.title")}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {t("contact.optionB.text")}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full min-h-[44px]"
                    onClick={() => trackCalendarBookingStart("kontakt_direct_booking", "https://cal.com/fels-coach/coaching-kennenlernen")}
                  >
                    <a 
                      href="https://cal.com/fels-coach/coaching-kennenlernen" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {t("contact.optionB.button")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
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
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Kontakt;
