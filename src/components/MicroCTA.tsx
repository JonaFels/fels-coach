import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { trackCTAClick } from "@/lib/tracking";

interface MicroCTAProps {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export const MicroCTA = ({ variant = "primary", className }: MicroCTAProps) => {
  const { t } = useLanguage();

  return (
    <div className={cn("flex flex-col items-center justify-center py-8", className)}>
      <Button
        asChild
        size="lg"
        variant={variant === "primary" ? "default" : variant === "secondary" ? "outline" : "ghost"}
        className="min-h-[44px] min-w-[200px]"
        onClick={() => trackCTAClick("micro_cta_vorgespraech", "micro_cta", "link")}
      >
        <a href="/kontakt#erstgespraech">
          {t("cta.bookNow")}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
      <p className="mt-3 text-sm text-muted-foreground">{t("cta.bookNowMicrocopy")}</p>
    </div>
  );
};

export const InlineCTA = () => {
  const { t } = useLanguage();

  return (
    <a
      href="/kontakt#erstgespraech"
      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors group"
    >
      {t("cta.learnMore")}
      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
    </a>
  );
};
