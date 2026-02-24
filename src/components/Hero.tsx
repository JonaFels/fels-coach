import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { Phone, ArrowRight } from "lucide-react";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";
import { ErstgespraechModal } from "@/components/ErstgespraechModal";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { t } = useLanguage();
  const [erstgespraechOpen, setErstgespraechOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: Text */}
            <div className="text-center md:text-left">
              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-6 animate-fade-in-up">
                Systemisches Coaching & Aufstellungen
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight animate-fade-in-up [animation-delay:100ms]">
                {t("hero.title")}
              </h1>
              <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                {t("hero.subtitle")}
              </p>
              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center md:items-start gap-4 animate-fade-in-up [animation-delay:300ms]">
                <Button
                  size="lg"
                  className="text-base px-8 py-6"
                  onClick={() => {
                    trackCTAClick("hero_consultation", "homepage_hero", "link");
                    setErstgespraechOpen(true);
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  {t("hero.ctaConsultation")}
                </Button>
                <Link
                  to="/systemische-familienaufstellung-freiburg"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 no-underline-effect"
                >
                  Mehr über meine Methode
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-4 md:text-left text-center">{t("hero.ctaMicrocopy")}</p>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end animate-fade-in-up [animation-delay:200ms]">
              <img
                src={profilBild}
                alt="Jona Fels – Systemischer Coach in Freiburg"
                className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover object-center shadow-lg"
                loading="eager"
                width="384"
                height="384"
              />
            </div>
          </div>
        </div>
      </section>
      <ErstgespraechModal open={erstgespraechOpen} onClose={() => setErstgespraechOpen(false)} />
    </>
  );
};
