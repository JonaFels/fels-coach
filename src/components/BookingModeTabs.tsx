import { useState } from "react";
import { MapPin, Video } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface BookingModeCopy {
  onsiteLabel: string;
  onlineLabel: string;
  onsiteHint: string;
  onlineHint: string;
  onsiteUrl: string;
  onlineUrl: string;
  iframeTitle: string;
}

export const BookingModeTabs = ({ copy }: { copy: BookingModeCopy }) => {
  const [mode, setMode] = useState<"onsite" | "online">("onsite");
  const isOnsite = mode === "onsite";

  const tabClass = (active: boolean) =>
    cn(
      "flex-1 flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition-all",
      active
        ? "bg-secondary text-secondary-foreground shadow-[var(--shadow-soft)]"
        : "text-foreground/70 hover:text-foreground"
    );

  return (
    <div>
      <div className="flex gap-1 p-1 rounded-lg bg-muted border border-border/60 mb-4">
        <button type="button" onClick={() => setMode("onsite")} className={tabClass(isOnsite)} aria-pressed={isOnsite}>
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {copy.onsiteLabel}
        </button>
        <button type="button" onClick={() => setMode("online")} className={tabClass(!isOnsite)} aria-pressed={!isOnsite}>
          <Video className="h-4 w-4" aria-hidden="true" />
          {copy.onlineLabel}
        </button>
      </div>

      <p className="text-sm text-muted-foreground text-center mb-6">
        {isOnsite ? copy.onsiteHint : copy.onlineHint}
      </p>

      <Card className="overflow-hidden border-border/60 rounded-lg shadow-[var(--shadow-soft)]">
        <CardContent className="p-0">
          <iframe
            key={mode}
            src={isOnsite ? copy.onsiteUrl : copy.onlineUrl}
            title={copy.iframeTitle}
            loading="lazy"
            className="block w-full border-0"
            style={{ height: "750px" }}
            allow="payment; camera; microphone; fullscreen"
          />
        </CardContent>
      </Card>
    </div>
  );
};
