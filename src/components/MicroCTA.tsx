import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { trackCTAClick } from "@/lib/tracking";
import { useOrbnetBooking } from "@/components/OrbnetBooking";

const ERSTGESPRAECH_SEMUID = "8ed15a55-6bf4-46cd-9de5-cef914d992b1";

interface MicroCTAProps {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export const MicroCTA = ({ variant = "primary", className }: MicroCTAProps) => {
  const { t } = useLanguage();
  const { openBooking, BookingDialog } = useOrbnetBooking();

  return (
    <div className={cn("flex flex-col items-center justify-center py-8", className)}>
      <Button
        size="lg"
        variant={variant === "primary" ? "default" : variant === "secondary" ? "outline" : "ghost"}
        className="min-h-[44px] min-w-[200px]"
        onClick={() => {
          trackCTAClick("micro_cta_vorgespraech", "micro_cta", "link");
          openBooking(ERSTGESPRAECH_SEMUID);
        }}
      >
        <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
        {t("cta.bookNow")}
      </Button>
      <p className="mt-3 text-sm text-muted-foreground">{t("cta.bookNowMicrocopy")}</p>
      <BookingDialog />
    </div>
  );
};

export const InlineCTA = () => {
  const { t } = useLanguage();
  const { openBooking, BookingDialog } = useOrbnetBooking();

  return (
    <>
      <button
        onClick={() => openBooking(ERSTGESPRAECH_SEMUID)}
        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors group"
      >
        {t("cta.learnMore")}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
      </button>
      <BookingDialog />
    </>
  );
};
