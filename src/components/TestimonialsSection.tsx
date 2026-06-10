import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const TestimonialsSection = () => {
  const { t, language } = useLanguage();

  const quoteOpen = language === "de" ? "„" : "\u201C";
  const quoteClose = language === "de" ? "\u201C" : "\u201D";

  // Use plain strings rendered via dangerouslySetInnerHTML so we can keep <strong> emphasis
  const miriam = t("testimonials.miriamQuote");
  const johannesQ = t("testimonials.johannesQuote");

  const enhance = (s: string) =>
    s.split("<strong>").join('<strong class="text-foreground font-semibold not-italic">');

  return (
    <section
      id="testimonials"
      className="py-36 md:py-48 bg-muted/30 scroll-mt-24 relative"
      aria-label={t("testimonials.title")}
    >
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-center text-[0.72rem] md:text-xs uppercase tracking-[0.28em] text-secondary/80 font-medium mb-6">
          {t("testimonials.eyebrow")}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-6 leading-tight">
          {t("testimonials.title")}
        </h2>
        <p className="text-muted-foreground text-center mb-16 md:mb-20 leading-relaxed">
          {t("testimonials.subtitle")}
        </p>

        <div className="space-y-10">
          <blockquote className="relative bg-card rounded-2xl p-10 md:p-12 shadow-sm border border-border/60">
            <Quote className="absolute top-7 left-7 h-8 w-8 text-secondary/20" aria-hidden="true" />
            <p
              className="text-muted-foreground leading-[1.9] text-lg italic pl-8"
              dangerouslySetInnerHTML={{ __html: `${quoteOpen}${enhance(miriam)}${quoteClose}` }}
            />
            <footer className="mt-8 pl-8">
              <span className="font-medium text-foreground">
                – Miriam<span className="text-muted-foreground font-normal">, 29</span>
              </span>
            </footer>
          </blockquote>

          <blockquote className="relative bg-card rounded-2xl p-10 md:p-12 shadow-sm border border-border/60">
            <Quote className="absolute top-7 left-7 h-8 w-8 text-secondary/20" aria-hidden="true" />
            <p
              className="text-muted-foreground leading-[1.9] text-lg italic pl-8"
              dangerouslySetInnerHTML={{ __html: `${quoteOpen}${enhance(johannesQ)}${quoteClose}` }}
            />
            <footer className="mt-8 pl-8">
              <span className="font-medium text-foreground">
                – Johannes<span className="text-muted-foreground font-normal">, 39</span>
              </span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
