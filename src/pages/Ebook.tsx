import { Download, BookOpen } from "lucide-react";
import ebookMockup from "@/assets/ebook-tablet-mockup.webp";
import { Button } from "@/components/ui/button";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { useCMS } from "@/contexts/CMSContext";
import { useLanguage } from "@/contexts/LanguageContext";

const PDF_URL = "/der-weg-zum-ganzsein.pdf";

const Ebook = () => {
  const { t } = useLanguage();
  const { getImage } = useCMS();
  const ebookImage = getImage("ebook.image", ebookMockup);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <Header />

      <main id="main-content" className="flex-1">
        {/* Header */}
        <section className="pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-3">
              {t("ebook.freeEbook")}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
              {t("ebook.headline")}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("ebook.subheadline")}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 md:pb-28 bg-muted/40">
          <div className="container mx-auto px-4 py-14 md:py-20 max-w-3xl">
            <div className="grid gap-10 md:gap-12 md:grid-cols-2 items-center">
              <div className="flex justify-center">
                <img
                  src={ebookImage}
                  alt="E-Book 'Der Weg zum Ganz-Sein' von Jona Fels auf einem Tablet"
                  className="w-full max-w-sm h-auto rounded-lg shadow-xl"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                />
              </div>

              <div className="text-center md:text-left">
                <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                  Lies es jetzt – ohne Anmeldung
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hier ist meine Philosophie. Lies sie dir in Ruhe durch – komplett kostenlos,
                  ohne E-Mail-Abfrage.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button asChild size="lg" className="min-h-[48px]">
                    <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                      Jetzt lesen
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-h-[48px]">
                    <a href={PDF_URL} download>
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      PDF herunterladen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Ebook;
