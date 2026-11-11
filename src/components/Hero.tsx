import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCMS } from "@/contexts/CMSContext";
import { trackCTAClick } from "@/lib/tracking";
import { Phone, Clock, MapPin, Video } from "lucide-react";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";
import profilBildMobile from "@/assets/jona-fels-systemisches-coaching-450.webp";

export const Hero = () => {
  const { t, language, localize } = useLanguage();
  const facts = language === "en"
    ? [{ icon: Video, text: "Free 20-min discovery call by phone or video" }, { icon: MapPin, text: "In Freiburg or online · in English or German" }, { icon: Clock, text: "90 minutes · 110 €" }]
    : [{ icon: Video, text: "Kostenloses Orientierungsgespräch – 20 Min. per Telefon oder Video" }, { icon: MapPin, text: "Vor Ort in Freiburg oder online · auf Deutsch oder Englisch" }, { icon: Clock, text: "90 Minuten · 110 €" }];
  const { getImage } = useCMS();
  const priorityProps = { fetchpriority: "high" } as Record<string, string>;
  const heroImg = getImage("hero.image", profilBild);
  const heroImgMobile = getImage("hero.image_mobile", profilBildMobile);

  return (
    <section className="py-20 md:py-28 lg:py-32 overflow-hidden relative">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          <div className="md:pt-10 text-center md:text-left order-2 md:order-1">
            <p className="eyebrow mb-10 md:mb-12 animate-fade-in-up">
              {t("hero.eyebrow")}
            </p>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.2] animate-fade-in-up [animation-delay:50ms]">
              {t("hero.title")}
            </h1>
            <p className="mt-8 md:mt-10 font-serif italic text-xl md:text-2xl text-foreground/80 leading-snug animate-fade-in-up [animation-delay:80ms]">
              {t("hero.quote")}
            </p>
            <p className="mt-8 md:mt-10 text-lg md:text-xl tracking-wide text-muted-foreground max-w-xl leading-[1.85] animate-fade-in-up [animation-delay:120ms]">
              {t("hero.subtitle")}
            </p>
            <div className="mt-12 md:mt-14 max-w-xl mx-auto md:mx-0 rounded-lg border border-secondary/30 bg-card p-6 md:p-7 shadow-[var(--shadow-soft)] text-left animate-fade-in-up [animation-delay:200ms]">
              <ul className="space-y-3">
                {facts.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm md:text-[0.95rem] text-foreground/85 leading-snug">
                    <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                    {text}
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-6 w-full sm:w-auto rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:-translate-y-0.5"
                asChild
              >
                <a
                  href={localize("/kontakt")}
                  onClick={() => trackCTAClick("hero_consultation", "homepage_hero", "link")}
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("hero.ctaConsultation")}
                </a>
              </Button>
              <p className="mt-3 text-sm text-muted-foreground">{t("hero.ctaMicrocopy")}</p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-in-up [animation-delay:200ms]">
            <div className="relative w-60 md:w-72 lg:w-80">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-br from-card via-secondary/10 to-card" />
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted/40 shadow-[var(--shadow-soft)] ring-1 ring-background">
                <img
                  src={heroImgMobile}
                  srcSet={`${heroImgMobile} 450w, ${heroImg} 853w`}
                  sizes="(max-width: 768px) 240px, 320px"
                  alt="Jona Fels – Systemischer Aufsteller in Freiburg"
                  className="img-warm w-full h-full object-cover object-[center_18%]"
                  loading="eager"
                  decoding="async"
                  {...priorityProps}
                  width="320"
                  height="427"
                />
              </div>
              <p className="relative mt-4 text-center text-xs tracking-wide text-muted-foreground">Jona Fels · Freiburg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
