import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Users, Clock, MapPin, Euro } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

export const OfferingsCards = () => {
  return (
    <section className="py-28 md:py-36 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-14 md:mb-16">
          <p className="eyebrow mb-4">Meine Angebote</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Zwei Wege – ein gemeinsamer Rahmen
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ob im 1:1 Dialog oder in der Aufstellungsarbeit – wir treffen uns im
            gleichen geschützten Setting. Du wählst den Weg, der sich für dich
            gerade stimmig anfühlt.
          </p>
        </div>

        <div className="bg-card border border-border rounded-3xl shadow-sm p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:divide-x md:divide-border">
            {/* Beratung */}
            <div className="md:pr-10 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/60 flex items-center justify-center mb-6">
                <MessageCircle className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 leading-tight">
                Systemische Beratung
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                Im 1:1 Dialog und mit dem Systembrett betrachten wir deine
                aktuelle Lebenssituation, lösen Blockaden und ordnen deine
                inneren Anteile.
              </p>
              <Link
                to="/systemische-beratung-freiburg"
                onClick={() => trackCTAClick("offering_beratung", "homepage_offerings", "link")}
                className="inline-flex items-center gap-2 text-base font-medium text-secondary underline-offset-4 hover:underline"
              >
                Zur 1:1 Beratung
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Aufstellung */}
            <div className="md:pl-10 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/60 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 leading-tight">
                Familienaufstellung im Einzelsetting
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                Wir machen unbewusste Dynamiken deiner Herkunftsfamilie mit
                Bodenankern im Raum sichtbar und lösen alte Verstrickungen.
              </p>
              <Link
                to="/systemische-familienaufstellung-freiburg"
                onClick={() => trackCTAClick("offering_aufstellung", "homepage_offerings", "link")}
                className="inline-flex items-center gap-2 text-base font-medium text-secondary underline-offset-4 hover:underline"
              >
                Zur Einzelaufstellung
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Gemeinsamer Rahmen */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-sm uppercase tracking-wider text-muted-foreground text-center mb-5">
              Gleicher Rahmen für beide Formate
            </p>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-foreground" role="list">
              <li className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" aria-hidden="true" />
                80 Minuten pro Sitzung
              </li>
              <li className="inline-flex items-center gap-2">
                <Euro className="h-4 w-4 text-secondary" aria-hidden="true" />
                95 € (Kennenlernen 55 €)
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
                Freiburg vor Ort oder online
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
