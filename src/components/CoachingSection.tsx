import { Repeat, Lock, UserX } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const painPoints = [
  { icon: Repeat, titleKey: "coaching.detail1" },
  { icon: Lock, titleKey: "coaching.detail2" },
  { icon: UserX, titleKey: "coaching.detail3" },
];

export const CoachingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-primary font-medium mb-3">
            {t("coaching.intro")}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-5">
            {t("coaching.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-center mb-12 max-w-2xl mx-auto">
            <p>{t("coaching.text1")}</p>
            <p>{t("coaching.text2")}</p>
          </div>
          {/* Bento Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painPoints.map(({ icon: Icon, titleKey }) => (
              <div
                key={titleKey}
                className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{t(titleKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
