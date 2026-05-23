import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const handleScrollToQuiz = () => {
    const quiz = document.getElementById("rollencheck-quiz");
    if (quiz) {
      quiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[0.72rem] md:text-[0.78rem] uppercase tracking-[0.22em] font-semibold text-secondary mb-6 md:mb-8 animate-fade-in-up">
            Systemische Diagnostik
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.1] animate-fade-in-up [animation-delay:50ms]">
            Trägst du, was nicht dir gehört?
          </h1>

          <p className="mt-7 md:mt-9 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-[1.85] animate-fade-in-up [animation-delay:100ms]">
            Finde in 2 Minuten heraus, ob du in deinem Familiensystem unbewusst
            die Rolle des Lastenträgers, des Anpassers oder des Distanzierers
            übernommen hast.
          </p>

          <div className="mt-10 md:mt-12 flex flex-col items-center gap-3 animate-fade-in-up [animation-delay:200ms]">
            <Button
              size="lg"
              onClick={handleScrollToQuiz}
              className="min-h-[52px] px-10 text-base rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Zum kostenfreien Rollen-Check
              <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-xs md:text-sm text-muted-foreground/80 mt-1">
              Anonym · keine E-Mail nötig · 2 Minuten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
