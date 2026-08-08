import { MapPin, Train, Video } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import praxisAufstellung from "@/assets/praxis-aufstellung.webp";

export const PraxisLocal = () => {
  const { language } = useLanguage();
  const isDe = language === "de";

  return (
    <section className="py-28 md:py-36 bg-background" aria-labelledby="praxis-freiburg-heading">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="eyebrow mb-5">{isDe ? "Standort" : "Location"}</p>
            <h2
              id="praxis-freiburg-heading"
              className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-8"
            >
              {isDe ? "Deine Praxis in Freiburg" : "Your practice in Freiburg"}
            </h2>
            <p className="text-muted-foreground text-lg leading-[1.9] mb-8">
              {isDe
                ? "Mein Praxisraum für Systemische Beratung und Familienaufstellung liegt zentral in der Karlstraße 51 in Freiburg im Breisgau – ein ruhiger, geschützter Ort für deine 1:1 Sitzung. Wenn du weiter weg wohnst oder flexibel bleiben möchtest, begleite ich dich genauso gut online per Video."
                : "My practice room for systemic counseling and family constellation is centrally located at Karlstraße 51 in Freiburg im Breisgau – a quiet, protected place for your 1:1 session. If you live further away, I accompany you online via video just as well."}
            </p>
            <ul className="space-y-4 text-foreground" role="list">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
                <span>Karlstraße 51, 79104 Freiburg im Breisgau</span>
              </li>
              <li className="flex items-start gap-3">
                <Train className="h-5 w-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
                <span>
                  {isDe
                    ? "Gut erreichbar mit Tram 3 – Parkplätze in der Nähe"
                    : "Easy to reach by tram 3 – parking nearby"}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Video className="h-5 w-5 text-secondary shrink-0 mt-1" aria-hidden="true" />
                <span>
                  {isDe
                    ? "Alternativ: Sitzungen online per Video – deutschlandweit"
                    : "Alternatively: sessions online via video"}
                </span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted/40 shadow-md shadow-foreground/5 ring-1 ring-border/10">
              <img
                src={praxisAufstellung}
                alt="Praxisraum Systemische Beratung Freiburg"
                className="img-warm w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
