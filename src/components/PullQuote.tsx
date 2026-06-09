import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Editorial Pull-Quote – großes Serif-Zitat mit viel Weißraum.
 * Dient als ruhiger Anker zwischen Method und FAQ.
 */
export const PullQuote = () => {
  const { language } = useLanguage();

  const quote =
    language === "de"
      ? "Du musst nichts heilen, was nie kaputt war. Manchmal genügt es, hinzuschauen – und dem, was war, seinen Platz zu geben."
      : "You don't need to fix what was never broken. Sometimes it's enough to look – and give what was its rightful place.";

  return (
    <section className="py-36 md:py-48 relative overflow-hidden" aria-label="Zitat">
      {/* Hintergrund-Ornament: organischer Kreis in Sage */}
      <svg
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1" className="text-secondary" />
        <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1" className="text-secondary" />
        <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1" className="text-secondary" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <figure className="max-w-3xl mx-auto text-center">
          {/* dezente Anführungszeichen oben */}
          <span
            aria-hidden="true"
            className="block font-serif text-7xl md:text-8xl text-secondary/30 leading-none mb-2 select-none"
          >
            “
          </span>
          <blockquote>
            <p className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium text-foreground leading-[1.35] tracking-tight">
              {quote}
            </p>
          </blockquote>
          <figcaption className="mt-10 md:mt-12 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.2em] text-secondary/80">
            <span className="h-px w-10 bg-secondary/40" />
            <span>Jona Fels</span>
            <span className="h-px w-10 bg-secondary/40" />
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
