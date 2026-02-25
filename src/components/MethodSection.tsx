import { Link } from "react-router-dom";
import { ArrowRight, Search, Eye, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";

export const MethodSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: Search, key: "method.step1" },
    { icon: Eye, key: "method.step2" },
    { icon: Lightbulb, key: "method.step3" },
  ];

  return (
    <section className="py-24 md:py-28 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-secondary font-medium mb-4">
            {t("method.intro")}
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-6">
            {t("method.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-14 max-w-2xl mx-auto">
            {t("method.description")}
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-8 rounded-3xl bg-card border border-border/50 hover:border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-5">
                  <step.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {t(`method.step${index + 1}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`method.step${index + 1}.desc`)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base"
              onClick={() => trackCTAClick("method_learn_more", "homepage_method", "link")}
            >
              <Link to="/systemische-familienaufstellung-freiburg">
                {t("method.cta")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
