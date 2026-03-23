import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";

export const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <svg
        className="absolute -left-20 -bottom-20 w-[400px] h-[400px] opacity-[0.05] pointer-events-none"
        viewBox="0 0 800 800"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M400 50C550 50 700 150 730 300C760 450 700 550 650 620C600 690 500 750 400 750C300 750 200 690 150 620C100 550 40 450 70 300C100 150 250 50 400 50Z"
          fill="currentColor"
          className="text-primary-foreground"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-5">
            {t("finalCta.title")}
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            {t("finalCta.description")}
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-10 py-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            asChild
          >
            <a
              href="/kontakt#willkommen"
              onClick={() => trackCTAClick("final_cta", "homepage_final", "link")}
            >
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              {t("finalCta.button")}
            </a>
          </Button>
          <p className="text-sm text-primary-foreground/60 mt-5">
            {t("finalCta.microcopy")}
          </p>
        </div>
      </div>
    </section>
  );
};
