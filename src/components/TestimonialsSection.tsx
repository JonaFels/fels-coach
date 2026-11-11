import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { miriam, johannes, translatedNote, type TestimonialPart } from "@/data/testimonials";

const Quoted = ({ parts, strongClass }: { parts: TestimonialPart[]; strongClass: string }) => (
  <>
    „
    {parts.map((part, i) =>
      part.bold ? (
        <strong key={i} className={strongClass}>
          {part.text}
        </strong>
      ) : (
        <span key={i}>{part.text}</span>
      ),
    )}
    "
  </>
);

export const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="testimonials"
      className="py-36 md:py-48 bg-background scroll-mt-24 relative"
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

        <div className="space-y-12">
          {/* Miriam – hervorgehoben für bessere Lesbarkeit */}
          <blockquote className="relative card-base p-12 md:p-16">
            <Quote className="absolute top-7 left-7 h-8 w-8 text-secondary/20" aria-hidden="true" />
            <p className="text-muted-foreground leading-[1.9] text-lg italic pl-8">
              <Quoted parts={miriam[language]} strongClass="text-foreground font-semibold not-italic" />
            </p>
            <footer className="mt-8 pl-8">
              <span className="font-medium text-foreground">
                – {miriam.name}<span className="text-muted-foreground font-normal">, {miriam.age}</span>
              </span>
            </footer>
          </blockquote>

          {/* Johannes */}
          <blockquote className="relative card-base p-12 md:p-16">
            <Quote className="absolute top-7 left-7 h-8 w-8 text-secondary/20" aria-hidden="true" />
            <p className="text-muted-foreground leading-[1.9] text-lg italic pl-8">
              <Quoted parts={johannes[language]} strongClass="text-foreground font-semibold not-italic" />
            </p>
            <footer className="mt-8 pl-8">
              <span className="font-medium text-foreground">
                – {johannes.name}<span className="text-muted-foreground font-normal">, {johannes.age}</span>
              </span>
            </footer>
          </blockquote>
        </div>
        {language === "en" && (
          <p className="mt-8 text-center text-xs text-muted-foreground">{translatedNote}</p>
        )}
      </div>
    </section>
  );
};
