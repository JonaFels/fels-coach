import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight animate-fade-in-up">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up [animation-delay:100ms]">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 animate-fade-in-up [animation-delay:200ms]">
            <Button asChild size="lg" className="text-base px-8">
              <a href="/angebote">
                {t("hero.cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
