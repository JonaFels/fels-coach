import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { Phone } from "lucide-react";
import blaetterDeko from "@/assets/blaetter-deko.jpg";
import { ErstgespraechModal } from "@/components/ErstgespraechModal";

export const Hero = () => {
  const { t } = useLanguage();
  const [erstgespraechOpen, setErstgespraechOpen] = useState(false);

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
    <section className="relative py-28 md:py-40 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight animate-fade-in-up">
            {t("hero.title")}
          </h1>
          <p className="mt-8 md:mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:100ms]">
            {t("hero.subtitle")}
          </p>
          <div className="mt-12 md:mt-14 flex flex-col items-center gap-5 animate-fade-in-up [animation-delay:200ms]">
            <Button
              size="lg"
              className="text-base px-10 py-6"
              onClick={() => {
                trackCTAClick("hero_consultation", "homepage_hero", "link");
                setErstgespraechOpen(true);
              }}
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {t("hero.ctaConsultation")}
            </Button>
            <p className="text-sm text-muted-foreground mt-2">{t("hero.ctaMicrocopy")}</p>
          </div>
        </div>
      </div>
    </section>
    <ErstgespraechModal open={erstgespraechOpen} onClose={() => setErstgespraechOpen(false)} />
    </>
  );
};
