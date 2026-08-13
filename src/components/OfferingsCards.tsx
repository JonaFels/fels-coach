import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";


export const OfferingsCards = () => {
  return (
    <section className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-14 md:mb-16">
          <p className="eyebrow mb-4">Mein 1:1 Angebot</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Systemische Aufstellung im Einzelsetting
          </h2>
        </div>

        <div className="bg-card border border-border rounded-md shadow-sm p-8 md:p-12">
          <p className="text-lg md:text-xl text-foreground leading-[1.8]">
            In meinem 1:1 Angebot arbeiten wir mit der{" "}
            <Link
              to="/systemische-familienaufstellung-freiburg"
              onClick={() => trackCTAClick("offering_aufstellung", "homepage_offerings", "link")}
              className="font-medium text-secondary underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              Familienaufstellung Freiburg
            </Link>
            . Mit Bodenankern im Raum machen wir unbewusste Dynamiken deiner
            Herkunftsfamilie sichtbar und lösen alte Verstrickungen – geschützt,
            vertraulich und ohne Gruppe. Eingebettet ist die Aufstellung immer in
            ein ruhiges Gespräch: Wir ordnen, was gerade viel ist, und schauen
            gemeinsam, welcher Schritt für dich stimmig ist – in Freiburg oder
            online.
          </p>
        </div>
      </div>
    </section>
  );
};
