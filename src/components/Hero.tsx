import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { Phone } from "lucide-react";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";
import profilBildMobile from "@/assets/jona-fels-systemisches-coaching-450.webp";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 lg:py-28 overflow-hidden relative">
      <svg
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.035] pointer-events-none"
        viewBox="0 0 800 800"
        width="800"
        height="800"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M400 50C550 50 700 150 730 300C760 450 700 550 650 620C600 690 500 750 400 750C300 750 200 690 150 620C100 550 40 450 70 300C100 150 250 50 400 50Z"
          fill="currentColor"
          className="text-foreground"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-xs md:text-sm uppercase tracking-[0.18em] font-medium text-primary/80 mb-4 md:mb-5 animate-fade-in-up">
              {t("hero.eyebrow")}
            </h1>
            <p className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.15] animate-fade-in-up [animation-delay:50ms]">
              {t("hero.title")}
            </p>
            <p className="mt-6 md:mt-8 text-lg md:text-xl tracking-wide text-muted-foreground max-w-xl leading-[1.9] animate-fade-in-up [animation-delay:100ms]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 md:mt-12 flex flex-col items-center md:items-start gap-4 animate-fade-in-up [animation-delay:200ms]">
              <Button
                size="lg"
                className="text-base px-10 py-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <a href="/kontakt" onClick={() => trackCTAClick("hero_consultation", "homepage_hero", "link")}>
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("hero.ctaConsultation")}
                </a>
              </Button>
              <p className="text-sm text-muted-foreground md:text-left text-center">{t("hero.ctaMicrocopy")}</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-in-up [animation-delay:200ms]">
            <div className="relative w-60 md:w-72 lg:w-80">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-secondary/10 via-muted/30 to-secondary/5" />
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-muted/40 shadow-md shadow-foreground/5 ring-1 ring-border/10">
                <img
                  src={profilBildMobile}
                  srcSet={`${profilBildMobile} 450w, ${profilBild} 853w`}
                  sizes="(max-width: 768px) 240px, 320px"
                  alt="Jona Fels – Systemischer Coach in Freiburg"
                  className="w-full h-full object-cover object-[center_18%]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="320"
                  height="427"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
