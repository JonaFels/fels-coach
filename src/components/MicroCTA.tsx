import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { trackCalendarBookingStart, trackCTAClick } from "@/lib/tracking";

interface MicroCTAProps {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export const MicroCTA = ({ variant = "primary", className }: MicroCTAProps) => {
  const { t } = useLanguage();

  const handleBookClick = () => {
    trackCalendarBookingStart("micro_cta", "https://cal.com/fels-coach");
  };

  const handleConsultClick = () => {
    trackCTAClick("free_consultation", "micro_cta", "/kontakt#rueckruf");
  };

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 items-center justify-center py-8", className)}>
      <Button
        asChild
        size="lg"
        variant={variant === "primary" ? "default" : variant === "secondary" ? "outline" : "ghost"}
        className="min-h-[44px] min-w-[200px]"
        onClick={handleBookClick}
      >
        <a
          href="https://cal.com/fels-coach"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("cta.bookNow")}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
      <a
        href="/kontakt#rueckruf"
        onClick={handleConsultClick}
        className="text-muted-foreground text-sm hover:text-secondary underline underline-offset-4 transition-colors"
      >
        {t("cta.freeConsultation")}
      </a>
    </div>
  );
};

export const InlineCTA = () => {
  const { t } = useLanguage();

  return (
    <a
      href="/angebote"
      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors group"
    >
      {t("cta.learnMore")}
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
    </a>
  );
};
