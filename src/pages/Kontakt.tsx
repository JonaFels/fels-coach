import { Mail, Send, Calendar } from "lucide-react";
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

const Kontakt = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-4">
            {t("contact.headline")}
          </h1>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            {t("contact.text")}
          </p>

          {/* Quick Request Section - Most Prominent */}
          <div className="mb-12">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Option A: Quick Callback */}
              <QuickRequestForm />

              {/* Option B: Direct Booking */}
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
                  <Button asChild variant="outline" className="w-full min-h-[44px]">
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
            {/* Full Contact Form */}
            <ContactForm />

            {/* Direct Contact Methods */}
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
