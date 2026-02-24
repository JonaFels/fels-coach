import { useLanguage } from "@/contexts/LanguageContext";

const painPoints = [
  { titleKey: "coaching.detail1" },
  { titleKey: "coaching.detail2" },
  { titleKey: "coaching.detail3" },
];

export const CoachingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
            {t("coaching.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-[1.9] text-center mb-12 max-w-2xl mx-auto">
            <p>{t("coaching.text1")}</p>
            <p>{t("coaching.text2")}</p>
          </div>
          {/* Minimal cards without icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map(({ titleKey }) => (
              <div
                key={titleKey}
                className="text-center p-8 rounded-3xl border border-border/30 hover:border-border/60 transition-all duration-300 ease-in-out"
              >
                <p className="text-foreground font-medium leading-relaxed">{t(titleKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
