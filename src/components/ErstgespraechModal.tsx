import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

interface ErstgespraechModalProps {
  open: boolean;
  onClose: () => void;
}

const SEMUID = "8ed15a55-6bf4-46cd-9de5-cef914d992b1";

export const ErstgespraechModal = ({ open, onClose }: ErstgespraechModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open || !containerRef.current) return;
    window.loadCustomCssOverrides?.();

    // Clear previous widget content
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // Create the Orbnet mask element
    const mask = document.createElement("div");
    mask.className = "orbnet-booking-mask";
    mask.dataset.semuid = SEMUID;
    mask.dataset.source = "my.orbnet.de";
    mask.dataset.type = "embed";
    containerRef.current.appendChild(mask);

    // Remove any existing orbnet script to force re-init
    const existingScript = document.getElementById("orbnet-booking-script-modal");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "orbnet-booking-script-modal";
    script.src =
      "https://static.orbnet.de/3.0/dist/booking.js?ver=7643f23565c4865f828a0e810e468eab35cf22e2";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "origin";
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById("orbnet-booking-script-modal");
      if (s) s.remove();
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto overscroll-contain"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-4xl my-auto flex flex-col overflow-hidden">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          aria-label="Schließen"
        >
          <X className="h-5 w-5" />
        </Button>

        <div
          className="flex-1 overflow-y-auto overscroll-contain max-h-[90vh]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Portrait + Text */}
          <div className="p-8 md:p-10 lg:p-12 flex flex-col items-center text-center bg-muted/40">
            <img
              src={profilBild}
              alt="Jona Fels – Systemischer Coach in Freiburg"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover object-[center_18%] shadow-md mb-4 no-fade"
              loading="lazy"
              decoding="async"
            />
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
              Lass uns unverbindlich sprechen
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
              In 30 Minuten klären wir deine Fragen, schauen auf deine aktuelle Blockade und prüfen, ob ich der richtige Coach für dich bin. Wähle einfach unten deinen Wunschtermin aus. Ich freue mich auf dich!
            </p>
          </div>

          {/* Orbnet Kalender via Script-Injection */}
          <div className="relative">
            <div ref={containerRef} className="min-h-[400px] p-6 md:p-8" />
            {/* Overlay um den 'Sprache: 🇬🇧'-Schalter zu verdecken (Cross-Origin) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-6 md:top-8 right-6 md:right-8 h-12 w-40 bg-background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
