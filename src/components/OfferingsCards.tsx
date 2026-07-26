import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/tracking";

export const OfferingsCards = () => {
  return (
    <section className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14 md:mb-16">
          <p className="eyebrow mb-4">Meine Angebote</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Zwei Wege – ein gemeinsamer Rahmen
          </h2>
        </div>

        <div className="bg-card border border-border rounded-3xl shadow-sm p-8 md:p-12">
          <p className="text-lg md:text-xl text-foreground leading-[1.8]">
            In der{" "}
            <Link
              to="/systemische-beratung-freiburg"
              onClick={() => trackCTAClick("offering_beratung", "homepage_offerings", "link")}
              className="font-medium text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              Systemischen Beratung
            </Link>{" "}
            arbeiten wir im 1:1 Dialog und mit dem Systembrett an deiner aktuellen
            Lebenssituation, lösen Blockaden und ordnen deine inneren Anteile. In
            der{" "}
            <Link
              to="/systemische-familienaufstellung-freiburg"
              onClick={() => trackCTAClick("offering_aufstellung", "homepage_offerings", "link")}
              className="font-medium text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              Familienaufstellung im Einzelsetting
            </Link>{" "}
            machen wir unbewusste Dynamiken deiner Herkunftsfamilie mit
            Bodenankern im Raum sichtbar und lösen alte Verstrickungen. Beide
            Formate teilen denselben geschützten Rahmen: 80 Minuten pro Sitzung,
            95 € (Kennenlernen 55 €), vor Ort in Freiburg oder online.
          </p>
        </div>
      </div>
    </section>
  );
};
