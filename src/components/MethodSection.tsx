import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trackCTAClick } from "@/lib/tracking";

export const MethodSection = () => {
  const { t, language } = useLanguage();

  const steps = [{ key: "method.step1" }, { key: "method.step2" }, { key: "method.step3" }];

  return (
    <section className="py-36 md:py-48 bg-muted/40 relative overflow-hidden">



      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[0.72rem] md:text-xs uppercase tracking-[0.28em] text-secondary/80 font-medium mb-6">
            {t("method.intro")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-8 leading-tight">
            {t("method.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-[1.9] text-center mb-20 max-w-2xl mx-auto">
            {t("method.description")}
          </p>

          {/* Nummerierte Schritte – editoriale Optik */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-32">
            {steps.map((_step, index) => (
              <div
                key={index}
                className="relative text-center p-10 rounded-3xl bg-card border border-border/50 hover:border-secondary/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out"
              >
                <span
                  aria-hidden="true"
                  className="block font-serif text-5xl md:text-6xl font-light text-secondary/40 mb-4 tabular-nums tracking-tight"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="mx-auto block h-px w-10 bg-secondary/30 mb-5" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {t(`method.step${index + 1}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`method.step${index + 1}.desc`)}
                </p>
              </div>
            ))}
          </div>

          {/* Mein Ansatz – die Werkzeuge, mit denen ich arbeite */}
          <div className="mt-2 mb-16 rounded-3xl border border-border/60 bg-card/60 p-8 md:p-10">
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground text-center mb-3">
              {language === "de" ? "Mein Ansatz" : "My approach"}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto mb-8">
              Ich kombiniere bewährte Methoden – immer mit dem Blick, was dir <em>gerade</em> am besten hilft.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto" role="list">
              {[
                { t: "Familienstellen nach Hellinger", d: "Bodenanker, Repräsentanten, das wissende Feld." },
                { t: "Systemischer Blick", d: "Was zu wem gehört – Ordnung im inneren System." },
                { t: "Innere Anteile & Inneres Kind", d: "Arbeit mit Inneren Anteilen (IFS-inspiriert)." },
                { t: "Präsenz & Prozessarbeit", d: "Im Moment bleiben – was lebendig ist, darf da sein." },
              ].map((item) => (
                <li
                  key={item.t}
                  className="flex flex-col gap-1 rounded-2xl border border-border/40 bg-background/70 px-4 py-3"
                >
                  <span className="font-medium text-foreground text-sm md:text-base">{item.t}</span>
                  <span className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Link
              to="/systemische-familienaufstellung-freiburg#methode"
              onClick={() => trackCTAClick("method_learn_more", "homepage_method", "link")}
              className="inline-flex items-center gap-2 text-base font-medium text-secondary underline-offset-4 hover:underline transition-colors"
            >
              {t("method.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
