import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { ErstgespraechModal } from "@/components/ErstgespraechModal";

export const FinalCTA = () => {
  const { t } = useLanguage();
  const [erstgespraechOpen, setErstgespraechOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
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
            className="text-base px-10 py-6"
            onClick={() => {
              trackCTAClick("final_cta", "homepage_final", "link");
              setErstgespraechOpen(true);
            }}
          >
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            {t("finalCta.button")}
          </Button>
          <p className="text-sm text-primary-foreground/60 mt-5">
            {t("finalCta.microcopy")}
          </p>
        </div>
      </div>
      <ErstgespraechModal open={erstgespraechOpen} onClose={() => setErstgespraechOpen(false)} />
    </section>
  );
};
