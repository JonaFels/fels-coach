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
    <section className="py-32 md:py-44">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-secondary font-medium mb-5">
            {t("method.intro")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-8">
            {t("method.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center mb-20 max-w-2xl mx-auto">
            {t("method.description")}
          </p>

          {/* 3-Step Process */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-14 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                  <step.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  {t(`method.step${index + 1}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`method.step${index + 1}.desc`)}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
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
