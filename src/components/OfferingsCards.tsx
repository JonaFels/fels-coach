import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Users } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

export const OfferingsCards = () => {
  const cards = [
    {
      Icon: MessageCircle,
      title: "Systemische Beratung",
      text: "Im 1:1 Dialog und mit dem Systembrett betrachten wir deine aktuelle Lebenssituation, lösen Blockaden und ordnen deine inneren Anteile.",
      cta: "Zur 1:1 Beratung",
      href: "/systemische-beratung-freiburg",
      tag: "beratung",
    },
    {
      Icon: Users,
      title: "Familienaufstellung im Einzelsetting",
      text: "Wir machen unbewusste Dynamiken deiner Herkunftsfamilie mit Bodenankern im Raum sichtbar und lösen alte Verstrickungen.",
      cta: "Zur Einzelaufstellung",
      href: "/systemische-familienaufstellung-freiburg",
      tag: "aufstellung",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14 md:mb-16">
          <p className="eyebrow mb-4">Meine Angebote</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Zwei Wege – ein gemeinsames Ziel: Klarheit
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {cards.map(({ Icon, title, text, cta, href, tag }) => (
            <div
              key={tag}
              className="group bg-card border border-border rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/60 flex items-center justify-center mb-6">
                <Icon className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 leading-tight">
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{text}</p>
              <Link
                to={href}
                onClick={() => trackCTAClick(`offering_${tag}`, "homepage_offerings", "link")}
                className="inline-flex items-center gap-2 text-base font-medium text-secondary underline-offset-4 hover:underline"
              >
                {cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
