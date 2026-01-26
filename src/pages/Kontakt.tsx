import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { SEOHead } from "@/components/SEOHead";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";

const Kontakt = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("contact.title")}
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Quick Contact Options */}
            <Card className="bg-card/95 backdrop-blur-sm">
              <CardContent className="pt-8">
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t("contact.text")}
                </p>

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
                    <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <Send className="h-6 w-6 text-blue-500" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-medium text-foreground block">Telegram</span>
                      <span className="text-sm text-muted-foreground">+49 176 67608617</span>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Internal Links */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Oder direkt einen Termin buchen:
            </p>
            <Link
              to="/angebote"
              className="text-secondary hover:text-secondary/80 font-medium underline underline-offset-4"
            >
              Zu den Angeboten →
            </Link>
          </div>
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Kontakt;
