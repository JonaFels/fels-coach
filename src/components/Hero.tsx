import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { BookOpen, Phone } from "lucide-react";
import blaetterDeko from "@/assets/blaetter-deko.jpg";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src={blaetterDeko} 
          alt="Blätter – Wachstum und Veränderung" 
          className="w-full h-full object-cover object-center no-fade"
          loading="eager"
        />
      </div>
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight animate-fade-in-up">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:100ms]">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up [animation-delay:200ms]">
            <Button asChild size="lg" className="text-base px-8" onClick={() => trackCTAClick("hero_consultation", "homepage_hero", "link")}>
              <a href="/kontakt#erstgespraech">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("hero.ctaConsultation")}
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">{t("hero.ctaMicrocopy")}</p>
            <Button asChild variant="outline" size="lg" className="text-base px-8" onClick={() => trackCTAClick("hero_ebook", "homepage_hero", "link")}>
              <a href="/ebook">
                <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("hero.ctaEbook")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
