import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const CoachingPainPoints = () => {
  const { language } = useLanguage();
  const isDe = language === "de";

  const painPoints = isDe
    ? [
        "Beruflicher Neuorientierung und anhaltender Unzufriedenheit im Job.",
        "Wiederkehrenden, toxischen Beziehungs- und Konfliktmustern.",
        "Innerer Unruhe, Dauerstress und dem Gefühl, festzustecken.",
        "Schwierigen Entscheidungsfindungen an Lebenskreuzungen.",
      ]
    : [
        "Professional reorientation and persistent dissatisfaction at work.",
        "Recurring toxic relationship and conflict patterns.",
        "Inner restlessness, chronic stress, and the feeling of being stuck.",
        "Difficult decision-making at life's crossroads.",
      ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden isolate">
      <div className="container mx-auto px-4 max-w-4xl relative">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-center mb-6 leading-tight">
          {isDe
            ? "Wann ist systemisches Coaching das Richtige für dich?"
            : "When is systemic coaching right for you?"}
        </h2>
        <p className="text-muted-foreground text-lg leading-[1.9] text-center mb-12 max-w-2xl mx-auto">
          {isDe
            ? "Oft drehen wir uns im Kreis und finden allein nicht den Ausgang. Eine systemische Begleitung im 1:1 Setting hilft dir besonders bei:"
            : "We often go in circles and can't find the way out alone. Systemic guidance in a 1:1 setting especially helps with:"}
        </p>

        <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto" role="list">
          {painPoints.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-2xl border border-border/40 bg-card/60 px-5 py-4"
            >
              <CheckCircle
                className="h-5 w-5 text-secondary shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-foreground text-sm md:text-base leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
