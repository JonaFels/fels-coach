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
    <section className="py-24 md:py-36 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <p className="text-center text-primary font-medium mb-4 animate-fade-in-up">
            {t("coaching.intro")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-6 animate-fade-in-up [animation-delay:100ms]">
            {t("coaching.title")}
          </h2>

          {/* Description */}
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed text-center mb-16 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            <p>{t("coaching.text1")}</p>
            <p>{t("coaching.text2")}</p>
          </div>

          {/* 3 Pain Point Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up [animation-delay:300ms]">
            {painPoints.map(({ icon: Icon, titleKey }) => (
              <div
                key={titleKey}
                className="text-center p-8 rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium text-lg">
                  {t(titleKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
