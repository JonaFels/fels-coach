import { Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackNavToOffers, trackCTAClick } from "@/lib/tracking";

export const CoachingSection = () => {
  const { t } = useLanguage();

  const handleAngeboteClick = () => {
    trackNavToOffers("homepage_coaching_section");
  };

  const handleFamilienClick = () => {
    trackCTAClick("familienaufstellung_button", "homepage_coaching_section", "/familienaufstellung");
  };

  const handleEbookClick = () => {
    trackCTAClick("ebook_button", "homepage_coaching_section", "/ebook");
  };

  return (
    <section className="py-16 md:py-24">
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

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:400ms]">
            <Button asChild size="lg" onClick={handleAngeboteClick}>
              <a href="/angebote">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" onClick={handleFamilienClick}>
              <Link to="/familienaufstellung">
                {t("coaching.learnMore")}
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" onClick={handleEbookClick}>
              <Link to="/ebook">
                {t("coaching.ebookLink")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
