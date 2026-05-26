import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

interface ErstgespraechModalProps {
  open: boolean;
  onClose: () => void;
}

const ERSTGESPRAECH_SEMUID = "8ed15a55-6bf4-46cd-9de5-cef914d992b1";

export const ErstgespraechModal = ({ open, onClose }: ErstgespraechModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open || !containerRef.current) return;
    if (containerRef.current.childElementCount > 0) return; // StrictMode guard

    const mask = document.createElement("div");
    mask.className = "orbnet-booking-mask";
    mask.dataset.semuid = ERSTGESPRAECH_SEMUID;
    mask.dataset.source = "my.orbnet.de";
    mask.dataset.type = "embed";
    mask.style.touchAction = "pan-y";
    containerRef.current.appendChild(mask);

    if (!document.getElementById("orbnet-booking-script")) {
      const script = document.createElement("script");
      script.id = "orbnet-booking-script";
      script.src =
        "https://static.orbnet.de/3.0/dist/booking.js?ver=cb722e7da8d1fc2129bd3eafa591d93f828015c5";
      script.crossOrigin = "anonymous";
      script.referrerPolicy = "origin";
      script.async = true;
      document.body.appendChild(script);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto overscroll-contain"
      style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-4xl my-auto flex flex-col overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
          aria-label="Schließen"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Portrait + Text */}
        <div className="p-6 md:p-8 flex flex-col items-center text-center bg-muted/40 shrink-0">
          <img
            src={profilBild}
            alt="Jona Fels – Systemischer Coach in Freiburg"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover object-[center_18%] shadow-md mb-3 no-fade"
            loading="lazy"
            decoding="async"
          />
          <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
            Lass uns unverbindlich sprechen
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl">
            In 30 Minuten klären wir deine Fragen, schauen auf deine aktuelle Blockade und prüfen, ob ich der richtige Coach für dich bin. Wähle einfach unten deinen Wunschtermin aus.
          </p>
        </div>

        {/* Orbnet Embed – page-scroll-friendly */}
        <div className="bg-background p-3 md:p-4">
          <div ref={containerRef} className="min-h-[1700px] md:min-h-[1100px] w-full" style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }} />
        </div>
      </div>
    </div>
  );
};
