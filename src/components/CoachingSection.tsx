import { Repeat, Lock, UserX } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export const CoachingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-36 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <p className="text-center text-secondary font-medium mb-4 animate-fade-in-up">
            {t("coaching.intro")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-8 animate-fade-in-up [animation-delay:100ms]">
            {t("coaching.title")}
          </h2>

          {/* Description */}
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-center mb-16 animate-fade-in-up [animation-delay:200ms]">
            <p>{t("coaching.text1")}</p>
            <p>{t("coaching.text2")}</p>
          </div>

          {/* Pain Point Cards */}
          <Card className="bg-card/95 backdrop-blur-sm animate-fade-in-up [animation-delay:300ms]">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-center">
                {t("coaching.details.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 md:grid-cols-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-full bg-secondary/10">
                    <Repeat className="h-5 w-5 text-secondary" />
                  </div>
                  <span>{t("coaching.detail1")}</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-full bg-secondary/10">
                    <Lock className="h-5 w-5 text-secondary" />
                  </div>
                  <span>{t("coaching.detail2")}</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-full bg-secondary/10">
                    <UserX className="h-5 w-5 text-secondary" />
                  </div>
                  <span>{t("coaching.detail3")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
