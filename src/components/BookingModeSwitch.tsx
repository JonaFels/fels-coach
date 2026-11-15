import { useEffect, useState } from "react";
import { MapPin, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { BookingEmbed } from "@/components/BookingOnsiteFirst";

type Mode = "onsite" | "online";

interface BookingModeSwitchProps {
  onsite: BookingEmbed;
  online: BookingEmbed;
  /** Beschriftung der Umschalt-Gruppe für Screenreader */
  groupLabel: string;
}

/**
 * Buchung mit Umschalter „Vor Ort | Online“.
 * Beide Varianten sind sofort sichtbar, geladen wird nur der aktive Kalender.
 * Vorauswahl „online“ per Link mit #online möglich.
 */
export const BookingModeSwitch = ({ onsite, online, groupLabel }: BookingModeSwitchProps) => {
  const [mode, setMode] = useState<Mode>("onsite");

  useEffect(() => {
    if (window.location.hash === "#online") setMode("online");
  }, []);

  const active = mode === "onsite" ? onsite : online;

  const options: { key: Mode; embed: BookingEmbed; Icon: typeof MapPin }[] = [
    { key: "onsite", embed: onsite, Icon: MapPin },
    { key: "online", embed: online, Icon: Video },
  ];

  return (
    <div>
      <div
        role="tablist"
        aria-label={groupLabel}
        className="grid grid-cols-2 gap-2 p-1.5 rounded-xl bg-muted/60 border border-border/60 mb-4"
      >
        {options.map(({ key, embed, Icon }) => {
          const selected = mode === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              id={`tab-${key}`}
              aria-selected={selected}
              aria-controls="booking-panel"
              onClick={() => setMode(key)}
              className={`flex flex-col items-center justify-center gap-1 rounded-lg px-3 py-3 text-center transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                selected
                  ? "bg-card text-foreground shadow-[var(--shadow-soft)]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${selected ? "text-secondary" : ""}`} aria-hidden="true" />
              <span className="font-serif text-base md:text-lg font-semibold leading-tight">
                {embed.label}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-sm text-muted-foreground text-center mb-6">{active.hint}</p>

      <div id="booking-panel" role="tabpanel" aria-labelledby={`tab-${mode}`}>
        <Card className="overflow-hidden border-border/60 rounded-lg shadow-[var(--shadow-soft)]">
          <CardContent className="p-0">
            <iframe
              key={mode}
              src={active.url}
              title={active.iframeTitle}
              loading="lazy"
              className="block w-full border-0"
              style={{ height: "750px" }}
              allow="payment; camera; microphone; fullscreen"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
