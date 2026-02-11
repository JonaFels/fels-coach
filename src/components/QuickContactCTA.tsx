import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import { InlineQuickForm } from "@/components/InlineQuickForm";
import blaetterDeko from "@/assets/blaetter-deko.jpg";

export const QuickContactCTA = () => {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);

  const handleCTAClick = () => {
    trackCTAClick("quick_contact_cta", "homepage_quick_contact", "inline_form");
    setShowForm(true);
  };

  return (
    <section className="relative py-20 md:py-28 bg-transparent overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute left-0 bottom-0 h-full w-1/3 opacity-[0.06] pointer-events-none hidden md:block">
        <img src={blaetterDeko} alt="" aria-hidden="true" className="h-full w-full object-cover no-fade" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
          {t("quickCTA.headline")}
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
          {t("quickCTA.subheadline")}
        </p>
        {showForm ? (
          <InlineQuickForm onClose={() => setShowForm(false)} />
        ) : (
          <>
            <Button size="lg" className="min-h-[48px] px-8" onClick={handleCTAClick}>
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
              {t("quickCTA.button")}
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">{t("quickCTA.microcopy")}</p>
          </>
        )}
      </div>
    </section>
  );
};
