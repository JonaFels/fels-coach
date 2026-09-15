import { useState } from "react";
import { MapPin, Video, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface BookingEmbed {
  label: string;
  hint: string;
  url: string;
  iframeTitle: string;
}

interface BookingOnsiteFirstProps {
  onsite: BookingEmbed;
  online: BookingEmbed;
  onlinePrompt: string;
  showLabel: string;
  hideLabel: string;
}

/**
 * Buchungs-Layout mit klarem Fokus auf den Vor-Ort-Termin.
 * Der Online-Kalender steht als dezente, aufklappbare Option bereit
 * und wird erst beim Aufklappen geladen.
 */
export const BookingOnsiteFirst = ({
  onsite,
  online,
  onlinePrompt,
  showLabel,
  hideLabel,
}: BookingOnsiteFirstProps) => {
  const [onlineOpen, setOnlineOpen] = useState(false);

  return (
    <div className="space-y-16 md:space-y-20">
      {/* Primär: Vor Ort */}
      <div id="termin-onsite" className="scroll-mt-24">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            {onsite.label}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground text-center mb-6">{onsite.hint}</p>

        <Card className="overflow-hidden border-border/60 rounded-lg shadow-[var(--shadow-soft)]">
          <CardContent className="p-0">
            <iframe
              src={onsite.url}
              title={onsite.iframeTitle}
              loading="lazy"
              className="block w-full border-0"
              style={{ height: "750px" }}
              allow="payment; camera; microphone; fullscreen"
            />
          </CardContent>
        </Card>
      </div>

      {/* Sekundär: Online als dezente Option */}
      <div id="termin-online" className="scroll-mt-24">
        <div className="text-center mb-6">
          <button
            type="button"
            onClick={() => setOnlineOpen((open) => !open)}
            aria-expanded={onlineOpen}
            aria-controls="online-calendar-panel"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
          >
            <Video className="h-4 w-4" aria-hidden="true" />
            <span>{onlinePrompt}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${onlineOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>

        {onlineOpen && (
          <div id="online-calendar-panel" className="animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Video className="h-4 w-4 text-secondary" aria-hidden="true" />
              <h2 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                {online.label}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground text-center mb-6">{online.hint}</p>

            <Card className="overflow-hidden border-border/60 rounded-lg shadow-[var(--shadow-soft)]">
              <CardContent className="p-0">
                <iframe
                  src={online.url}
                  title={online.iframeTitle}
                  loading="lazy"
                  className="block w-full border-0"
                  style={{ height: "750px" }}
                  allow="payment; camera; microphone; fullscreen"
                />
              </CardContent>
            </Card>
          </div>
        )}

        {onlineOpen && (
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setOnlineOpen(false)}
              className="text-xs text-muted-foreground/80 hover:text-foreground transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded"
            >
              {hideLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
