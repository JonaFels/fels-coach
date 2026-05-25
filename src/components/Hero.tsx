import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCMS } from "@/contexts/CMSContext";
import { trackCTAClick } from "@/lib/tracking";
import { useErstgespraech } from "@/components/HashBookingTrigger";
import { Phone } from "lucide-react";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";
import profilBildMobile from "@/assets/jona-fels-systemisches-coaching-450.webp";

export const Hero = () => {
  const { t } = useLanguage();
  const { getImage } = useCMS();
  const booking = useErstgespraech();
  const priorityProps = { fetchpriority: "high" } as Record<string, string>;
  const heroImg = getImage("hero.image", profilBild);
  const heroImgMobile = getImage("hero.image_mobile", profilBildMobile);

  return (
    <section className="py-6 md:py-8 lg:py-10 overflow-hidden relative">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="text-[0.78rem] md:text-[0.82rem] uppercase tracking-[0.14em] font-bold text-primary mb-5 md:mb-6 animate-fade-in-up">
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.15] animate-fade-in-up [animation-delay:50ms]">
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
                  href="/kontakt#erstgespraech"
                  onClick={(e) => {
                    if (booking) {
                      e.preventDefault();
                      booking.openErstgespraech();
                    }
                    trackCTAClick("hero_consultation", "homepage_hero", "link");
                  }}
                >
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
                  src={heroImgMobile}
                  srcSet={`${heroImgMobile} 450w, ${heroImg} 853w`}
                  sizes="(max-width: 768px) 240px, 320px"
                  alt="Jona Fels – Systemischer Coach in Freiburg"
                  className="img-warm w-full h-full object-cover object-[center_18%]"
                  loading="eager"
                  decoding="async"
                  {...priorityProps}
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
