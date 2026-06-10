import { Download, BookOpen } from "lucide-react";
import ebookMockup from "@/assets/ebook-tablet-mockup.webp";
import { Button } from "@/components/ui/button";

import { Header } from "@/components/Header";
import { MailerLiteCourseForm } from "@/components/MailerLiteCourseForm";

import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
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
        <PraxisHeroBanner variant="sitzbereich" />
        {/* Header */}
        <section className="pt-16 pb-16 md:pt-24 md:pb-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-3">
              {t("ebook.pageEyebrow")}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
              {t("ebook.pageH1")}
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("ebook.pageSubtitle")}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
            <p>{t("ebook.intro.p1")}</p>
            <p>{t("ebook.intro.p2")}</p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 md:pb-28 bg-muted/40">
          <div className="container mx-auto px-4 py-28 md:py-36 max-w-3xl">
            <div className="grid gap-10 md:gap-12 md:grid-cols-2 items-center">
              <div className="flex justify-center">
                <img
                  src={ebookImage}
                  alt={t("ebook.tabletAlt")}
                  className="w-full max-w-sm h-auto rounded-lg shadow-xl"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                />
              </div>

              <div className="text-center md:text-left">
                <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                  {t("ebook.thoughtsTitle")}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t("ebook.thoughtsText")}
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button asChild size="lg" className="min-h-[48px]">
                    <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                      {t("ebook.readNow")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* E-Mail-Kurs */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <MailerLiteCourseForm />
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Ebook;
