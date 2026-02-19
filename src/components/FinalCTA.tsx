import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { useOrbnetBooking } from "@/components/OrbnetBooking";

const ERSTGESPRAECH_SEMUID = "8ed15a55-6bf4-46cd-9de5-cef914d992b1";

export const FinalCTA = () => {
  const { t } = useLanguage();
  const { openBooking, BookingDialog } = useOrbnetBooking();

  return (
    <section className="py-24 md:py-36 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            {t("finalCta.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            {t("finalCta.description")}
          </p>
          <Button
            size="lg"
            className="text-base px-8"
            onClick={() => {
              trackCTAClick("final_cta", "homepage_final", "link");
              openBooking(ERSTGESPRAECH_SEMUID);
            }}
          >
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            {t("finalCta.button")}
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t("finalCta.microcopy")}
          </p>
        </div>
      </div>
      <BookingDialog />
    </section>
  );
};
