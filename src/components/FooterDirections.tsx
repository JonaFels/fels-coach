import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, TramFront, Car, DoorOpen } from "lucide-react";

const MAPS_QUERY = "Karlstraße 51, 79104 Freiburg im Breisgau";

/**
 * Anfahrt-Bereich im Footer: Karte + Wegbeschreibung (ÖPNV, Auto, Vor Ort).
 */
export const FooterDirections = () => {
  const { t } = useLanguage();

  return (
    <section
      id="anfahrt"
      aria-labelledby="anfahrt-title"
      className="border-t border-border/60 scroll-mt-24"
      style={{ contentVisibility: "auto" }}
    >
      <div className="container mx-auto px-5 max-w-5xl pt-28 pb-24 md:pt-44 md:pb-36">
        <h2
          id="anfahrt-title"
          className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center"
        >
          {t("contact.directions.title")}
        </h2>
        <p className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("contact.directions.intro")}
        </p>

        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-foreground">
          <MapPin className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
          <span>{t("contact.directions.address")}</span>
        </p>

        {/* Details – 3 Spalten */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          <div className="rounded-lg bg-muted/40 ring-1 ring-border/30 p-6">
            <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
              <TramFront className="h-4 w-4 text-primary" aria-hidden="true" />
              {t("contact.directions.tram")}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>{t("contact.directions.tramLine")}</li>
              <li>{t("contact.directions.tramStop")}</li>
              <li>{t("contact.directions.tramWalk")}</li>
            </ul>
          </div>

          <div className="rounded-lg bg-muted/40 ring-1 ring-border/30 p-6">
            <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Car className="h-4 w-4 text-primary" aria-hidden="true" />
              {t("contact.directions.car")}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>{t("contact.directions.carParking")}</li>
              <li>{t("contact.directions.carTip")}</li>
            </ul>
          </div>

          <div className="rounded-lg bg-muted/40 ring-1 ring-border/30 p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
              <DoorOpen className="h-4 w-4 text-primary" aria-hidden="true" />
              {t("contact.directions.onSite")}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
              <li>{t("contact.directions.onSite1")}</li>
              <li>{t("contact.directions.onSite2")}</li>
              <li>{t("contact.directions.onSite3")}</li>
            </ul>
          </div>
        </div>

        {/* Karte */}
        <div className="mt-12 md:mt-16 rounded-lg overflow-hidden ring-1 ring-border/40 shadow-[var(--shadow-soft)] bg-muted/30">
          <iframe
            title={`Google Maps – ${MAPS_QUERY}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=15&output=embed`}
            width="100%"
            height="340"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }}
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAPS_QUERY)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline no-underline-effect"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Route in Google Maps öffnen
          </a>
        </div>

      </div>
    </section>
  );
};
