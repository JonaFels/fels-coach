import { Mail, MessageCircle, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const Kontakt = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageBackground>
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-center mb-12">
            {t("contact.title")}
          </h1>

          <Card className="bg-card/95 backdrop-blur-sm">
            <CardContent className="pt-8">
              <p className="text-muted-foreground text-center mb-10 leading-relaxed">
                {t("contact.text")}
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:info@coach-fels.de"
                  className="flex flex-col items-center gap-2 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="h-8 w-8 text-secondary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    E-Mail
                  </span>
                </a>

                <a
                  href="https://wa.me/4917667608617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-4 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    WhatsApp
                  </span>
                </a>

                <a
                  href="https://t.me/+4917667608617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-4 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Send className="h-8 w-8 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    Telegram
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Kontakt;
