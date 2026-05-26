import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

interface ErstgespraechModalProps {
  open: boolean;
  onClose: () => void;
}

const ORBNET_BOOKING_URL = "https://www.orbnet.de/p/fels-coach/";

export const ErstgespraechModal = ({ open, onClose }: ErstgespraechModalProps) => {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto overscroll-contain"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-4xl my-auto flex flex-col overflow-hidden max-h-[95vh]">
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

        {/* Orbnet Kalender als iframe – scrollt sauber auf Mobile */}
        <div className="flex-1 min-h-0 bg-background">
          <iframe
            src={ORBNET_BOOKING_URL}
            title="Orbnet Terminbuchung"
            className="w-full h-full block"
            style={{ minHeight: "500px", height: "min(70vh, 700px)", border: 0 }}
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
};
