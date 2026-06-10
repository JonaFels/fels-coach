import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const johannes = {
  name: "Johannes",
  age: 39,
  text: "Jona hat ein super Gespür den eigenen Prozess genau da hin zu begleiten, wo es hängt. Es werden einem Dynamiken klar, die vorher so nicht bewusst waren. Dies führt zu einem tieferen Verständnis und einem Loslassen. Absolute Empfehlung. Ich komme gerne wieder.",
};

export const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="testimonials"
      className="py-36 md:py-48 bg-muted/30 scroll-mt-24 relative"
      aria-label={t("testimonials.title")}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-center text-[0.72rem] md:text-xs uppercase tracking-[0.28em] text-secondary/80 font-medium mb-6">
          {language === "de" ? "Stimmen aus der Praxis" : "Voices from the practice"}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-6 leading-tight">
          {t("testimonials.title")}
        </h2>
        <p className="text-muted-foreground text-center mb-16 md:mb-20 leading-relaxed">
          {t("testimonials.subtitle")}
        </p>

        <div className="space-y-10">
          {/* Miriam – hervorgehoben für bessere Lesbarkeit */}
          <blockquote className="relative bg-card rounded-2xl p-10 md:p-12 shadow-sm border border-border/60">
            <Quote className="absolute top-7 left-7 h-8 w-8 text-secondary/20" aria-hidden="true" />
            <p className="text-muted-foreground leading-[1.9] text-lg italic pl-8">
              „Ich hatte eine 1:1 Aufstellung bei Jona und habe mich von Anfang an durch seine <strong className="text-foreground font-semibold not-italic">tiefgehende Präsenz</strong> sehr wohl gefühlt. Ich konnte mich in einem gut gehaltenen Rahmen mit meinem familiären Thema auseinandersetzen und gewann an <strong className="text-foreground font-semibold not-italic">Klarheit und Sicherheit</strong>. Ich bin sehr dankbar für die tiefen Erkenntnisse und die aufmerksame, einfühlsame Begleitung."
            </p>
            <footer className="mt-8 pl-8">
              <span className="font-medium text-foreground">
                – Miriam<span className="text-muted-foreground font-normal">, 29</span>
              </span>
            </footer>
          </blockquote>

          {/* Johannes */}
          <blockquote className="relative bg-card rounded-2xl p-10 md:p-12 shadow-sm border border-border/60">
            <Quote className="absolute top-7 left-7 h-8 w-8 text-secondary/20" aria-hidden="true" />
            <p className="text-muted-foreground leading-[1.9] text-lg italic pl-8">
              „Jona hat ein <strong className="text-foreground font-semibold not-italic">super Gespür</strong> den eigenen Prozess genau da hin zu begleiten, wo es hängt. Es werden einem Dynamiken klar, die vorher so nicht bewusst waren. Dies führt zu einem <strong className="text-foreground font-semibold not-italic">tieferen Verständnis</strong> und einem Loslassen. Absolute Empfehlung. Ich komme gerne wieder."
            </p>
            <footer className="mt-8 pl-8">
              <span className="font-medium text-foreground">
                – {johannes.name}<span className="text-muted-foreground font-normal">, {johannes.age}</span>
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
