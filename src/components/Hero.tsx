import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import praxisSitzbereich from "@/assets/praxis-sitzbereich.webp";
import praxisSitzbereichMobile from "@/assets/praxis-sitzbereich-800.webp";
import { useCMS } from "@/contexts/CMSContext";

export const Hero = () => {
  const { getImage } = useCMS();
  const bgImage = getImage("praxis.sitzbereich", praxisSitzbereich);
  const bgImageMobile = getImage("praxis.sitzbereich_mobile", praxisSitzbereichMobile);
  const priorityProps = { fetchpriority: "high" } as Record<string, string>;

  const handleScrollToQuiz = () => {
    const quiz = document.getElementById("rollencheck-quiz");
    if (quiz) {
      quiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      aria-label="Systemischer Rollen-Check"
      className="relative w-full overflow-hidden min-h-[88vh] md:min-h-[92vh] flex items-center"
    >
      {/* Background image */}
      <img
        src={bgImageMobile}
        srcSet={`${bgImageMobile} 800w, ${bgImage} 1400w`}
        sizes="100vw"
        alt="Coaching-Praxis von Jona Fels in Freiburg – einladender Sitzbereich mit warmem Licht"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        decoding="async"
        {...priorityProps}
        width={1400}
        height={900}
      />

      {/* Elegant overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/40 to-foreground/65" />
      <div className="absolute inset-0 bg-foreground/15" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-24 md:py-32">
        <div className="max-w-[640px] mx-auto text-center">
          <p className="text-[0.72rem] md:text-[0.78rem] uppercase tracking-[0.24em] font-semibold text-background/85 mb-6 md:mb-8 animate-fade-in-up">
            Systemische Diagnostik
          </p>

          <h1 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold text-background tracking-tight leading-[1.08] animate-fade-in-up [animation-delay:50ms]">
            Trägst du, was nicht dir gehört?
          </h1>

          <p className="mt-7 md:mt-9 text-base md:text-lg text-background/90 max-w-[600px] mx-auto leading-[1.85] animate-fade-in-up [animation-delay:100ms]">
            Finde in 2 Minuten heraus, ob du in deinem Familiensystem unbewusst
            die Rolle des Lastenträgers, des Anpassers oder des Distanzierers
            übernommen hast.
          </p>

          <div className="mt-10 md:mt-12 flex flex-col items-center gap-3 animate-fade-in-up [animation-delay:200ms]">
            <Button
              size="lg"
              onClick={handleScrollToQuiz}
              className="min-h-[54px] px-10 text-base rounded-full bg-background text-foreground hover:bg-background/90 hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Zum kostenfreien Rollen-Check
              <ArrowDown className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <p className="text-xs md:text-sm text-background/75 mt-1">
              Anonym · keine E-Mail nötig · 2 Minuten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
