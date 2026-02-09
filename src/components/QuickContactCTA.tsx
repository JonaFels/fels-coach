import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";

export const QuickContactCTA = () => {
  const { t } = useLanguage();

  const handleCTAClick = () => {
    trackCTAClick("quick_contact_cta", "homepage_quick_contact", "/kontakt");
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
          {t("quickCTA.headline")}
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
          {t("quickCTA.subheadline")}
        </p>
        <Button asChild size="lg" className="min-h-[48px] px-8" onClick={handleCTAClick}>
          <Link to="/kontakt" className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {t("quickCTA.button")}
          </Link>
        </Button>
      </div>
    </section>
  );
};