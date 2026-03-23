import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { Phone } from "lucide-react";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

export const Hero = () => {
  const { t } = useLanguage();
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const offset = window.scrollY * 0.15;
        imageRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-28 overflow-hidden relative">
      {/* Abstract stone shape background */}
      <svg
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-[0.035] pointer-events-none"
        viewBox="0 0 800 800"
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
          {/* Left: Text */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.15] animate-fade-in-up">
              {t("hero.title")}
            </h1>
            <p className="mt-6 md:mt-8 text-lg md:text-xl tracking-wide text-muted-foreground max-w-xl leading-[1.9] animate-fade-in-up [animation-delay:100ms]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 md:mt-12 flex flex-col items-center md:items-start gap-4 animate-fade-in-up [animation-delay:200ms]">
              <Button
                size="lg"
                className="text-base px-10 py-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                asChild
              >
                <a
                  href="/kontakt#willkommen"
                  onClick={() => trackCTAClick("hero_consultation", "homepage_hero", "link")}
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("hero.ctaConsultation")}
                </a>
              </Button>
              <p className="text-sm text-muted-foreground md:text-left text-center">{t("hero.ctaMicrocopy")}</p>
              
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-in-up [animation-delay:200ms]">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-foreground/10">
              <img
                ref={imageRef}
                src={profilBild}
                alt="Jona Fels – Systemischer Coach in Freiburg"
                className="w-64 md:w-80 lg:w-96 aspect-[4/5] rounded-3xl object-cover object-center will-change-transform"
                loading="eager"
                width="384"
                height="480"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
