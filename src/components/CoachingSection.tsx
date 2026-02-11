import { Link } from "react-router-dom";
import { Clock, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";
import pflanzeDeko from "@/assets/pflanze-deko.jpg";

export const CoachingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Decorative plant – left side */}
      <div className="absolute left-0 top-0 h-full w-1/4 opacity-[0.05] pointer-events-none hidden lg:block">
        <img src={pflanzeDeko} alt="" aria-hidden="true" className="h-full w-full object-cover no-fade" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <p className="text-center text-secondary font-medium mb-4 animate-fade-in-up">
            {t("coaching.intro")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-8 animate-fade-in-up [animation-delay:100ms]">
            {t("coaching.title")}
          </h2>

          {/* Description */}
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-center mb-12 animate-fade-in-up [animation-delay:200ms]">
            <p>{t("coaching.text1")}</p>
            <p>{t("coaching.text2")}</p>
          </div>

          {/* Details Card */}
          <Card className="mb-10 bg-card/95 backdrop-blur-sm animate-fade-in-up [animation-delay:300ms]">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-center">
                {t("coaching.details.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-4 md:grid-cols-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-full bg-secondary/10">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <span>{t("coaching.detail1")}</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-full bg-secondary/10">
                    <Sparkles className="h-5 w-5 text-secondary" />
                  </div>
                  <span>{t("coaching.detail2")}</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-full bg-secondary/10">
                    <Heart className="h-5 w-5 text-secondary" />
                  </div>
                  <span>{t("coaching.detail3")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in-up [animation-delay:400ms]">
            <Button asChild variant="outline" size="lg" className="text-base" onClick={() => trackCTAClick("coaching_methode", "homepage_coaching_section", "link")}>
              <Link to="/systemische-familienaufstellung-freiburg">
                {t("coaching.learnMore")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
