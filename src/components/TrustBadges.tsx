import { Shield, Heart, Clock, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const TrustBadges = () => {
  const { t } = useLanguage();

  const badges = [
    {
      icon: Shield,
      titleKey: "trust.certified",
      descKey: "trust.certifiedDesc",
    },
    {
      icon: MapPin,
      titleKey: "trust.location",
      descKey: "trust.locationDesc",
    },
    {
      icon: Clock,
      titleKey: "trust.flexible",
      descKey: "trust.flexibleDesc",
    },
    {
      icon: Heart,
      titleKey: "trust.experience",
      descKey: "trust.experienceDesc",
    },
  ];

  return (
    <section className="py-12 border-y border-border bg-muted/20" aria-label={t("trust.ariaLabel")}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-secondary/10 mb-3">
                <badge.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-medium text-foreground text-sm">{t(badge.titleKey)}</h3>
              <p className="text-xs text-muted-foreground mt-1">{t(badge.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
