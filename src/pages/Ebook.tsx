import { Download, BookOpen } from "lucide-react";
import ebookMockup from "@/assets/ebook-tablet-mockup.webp";
import { Button } from "@/components/ui/button";

import { Header } from "@/components/Header";
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
        <section className="pt-8 pb-10 md:pt-12 md:pb-14">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-secondary font-medium uppercase tracking-wider text-sm mb-3">
              Impulse
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-4">
              Frei von alten Familienmustern
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Ein Leitgedanke, um verborgene Dynamiken zu erkennen und wieder bei dir selbst anzukommen.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pb-10 md:pb-14">
          <div className="container mx-auto px-4 max-w-3xl space-y-5 text-muted-foreground leading-relaxed">
            <p>
              In meiner Praxis erlebe ich oft, dass Menschen intellektuell längst verstehen,
              woher ihr Schmerz kommt – und dennoch immer wieder in die gleichen familiären
              Verstrickungen zurückrutschen. Reine Analyse reicht meist nicht aus, um tief
              sitzende emotionale Muster aus der frühen Kindheit wirklich zu lösen.
            </p>
            <p>
              In diesem kompakten Impuls-Papier teile ich meine systemische Perspektive auf die
              Entstehung und Wandlung dieser Dynamiken. Es ist eine Einladung, die unsichtbare
              Architektur deiner Familie besser zu verstehen und zu erkennen, wie ein Weg aus
              der Rebellion oder Resignation hin zu echtem inneren Frieden aussehen kann.
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
                  alt="Cover 'Der Weg zum Ganz-Sein' von Jona Fels auf einem Tablet"
                  className="w-full max-w-sm h-auto rounded-lg shadow-xl"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                />
              </div>

              <div className="text-center md:text-left">
                <h2 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                  Meine Gedanken für dich
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Lass diese Zeilen in Ruhe auf dich wirken. Nimm dir die Impulse mit, die in
                  deiner jetzigen Situation für dich stimmig sind.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button asChild size="lg" className="min-h-[48px]">
                    <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                      <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                      Jetzt lesen
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
