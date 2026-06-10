import { Button } from "@/components/ui/button";
import { ArrowDown, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const QuizTeaser = () => {
  const { t } = useLanguage();

  const handleScrollToQuiz = () => {
    const quiz = document.getElementById("rollencheck-quiz");
    if (quiz) {
      quiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-medium text-secondary mb-5">
        {t("quizTeaser.eyebrow")}
      </p>

      <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary/10 text-secondary mb-6">
        <Scale className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" strokeWidth={1.5} />
      </div>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] mb-5 md:mb-6">
        {t("quizTeaser.headline")}
      </h2>

      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10">
        {t("quizTeaser.desc")}
      </p>

      <Button
        size="lg"
        onClick={handleScrollToQuiz}
        className="min-h-[52px] px-8 text-base rounded-full"
      >
        {t("quizTeaser.cta")}
        <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
      </Button>

      <p className="text-xs text-muted-foreground/80 mt-4">
        {t("quizTeaser.meta")}
      </p>
    </div>
  );
};
