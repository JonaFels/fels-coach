import { MapPin, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface BookingOption {
  kind: "onsite" | "online";
  label: string;
  hint: string;
  url: string;
  iframeTitle: string;
}

export const BookingSections = ({ options }: { options: BookingOption[] }) => (
  <div className="space-y-16 md:space-y-24">
    {options.map((option) => (
      <div key={option.kind}>
        <div className="flex items-center justify-center gap-2 mb-2">
          {option.kind === "onsite" ? (
            <MapPin className="h-4 w-4 text-secondary" aria-hidden="true" />
          ) : (
            <Video className="h-4 w-4 text-secondary" aria-hidden="true" />
          )}
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            {option.label}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground text-center mb-6">{option.hint}</p>

        <Card className="overflow-hidden border-border/60 rounded-lg shadow-[var(--shadow-soft)]">
          <CardContent className="p-0">
            <iframe
              src={option.url}
              title={option.iframeTitle}
              loading="lazy"
              className="block w-full border-0"
              style={{ height: "750px" }}
              allow="payment; camera; microphone; fullscreen"
            />
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
);
