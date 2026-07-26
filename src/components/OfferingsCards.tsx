import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/tracking";

export const OfferingsCards = () => {
  return (
    <section className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14 md:mb-16">
          <p className="eyebrow mb-4">Mein 1:1 Angebot</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Systemische Beratung & Familienaufstellung
          </h2>
        </div>

        <div className="bg-card border border-border rounded-3xl shadow-sm p-8 md:p-12">
          <p className="text-lg md:text-xl text-foreground leading-[1.8]">
            In meinem 1:1 Angebot nutze ich je nach Bedarf Methoden der{" "}
            <Link
              to="/systemische-beratung-freiburg"
              onClick={() => trackCTAClick("offering_beratung", "homepage_offerings", "link")}
              className="font-medium text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              Systemischen Beratung
            </Link>{" "}
            und der{" "}
            <Link
              to="/systemische-familienaufstellung-freiburg"
              onClick={() => trackCTAClick("offering_aufstellung", "homepage_offerings", "link")}
              className="font-medium text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              Familienaufstellung im Einzelsetting
            </Link>
            . In der Systemischen Beratung arbeiten wir im geschützten Gespräch
            an deiner aktuellen Lebenssituation, lösen Blockaden und ordnen deine
            inneren Anteile. In der Familienaufstellung machen wir unbewusste
            Dynamiken deiner Herkunftsfamilie mit Bodenankern im Raum sichtbar und
            lösen alte Verstrickungen. Du musst dich nicht im Vorfeld für eine
            Methode entscheiden – wir wählen gemeinsam, was deinem Thema gerade am
            besten dient.
          </p>
        </div>
      </div>
    </section>
  );
};
