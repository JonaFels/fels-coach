import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

interface ErstgespraechModalProps {
  open: boolean;
  onClose: () => void;
}

export const ErstgespraechModal = ({ open, onClose }: ErstgespraechModalProps) => {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full"
          aria-label="Schließen"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="flex flex-col md:flex-row flex-1 overflow-y-auto">
          {/* Left: Portrait + Text */}
          <div className="md:w-2/5 p-6 md:p-8 flex flex-col items-center md:items-start text-center md:text-left bg-muted/40">
            <img
              src={profilBild}
              alt="Jona Fels – Systemischer Coach in Freiburg"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover object-center shadow-md mb-4 no-fade"
              loading="eager"
            />
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
              Lass uns unverbindlich sprechen
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              In 30 Minuten klären wir deine Fragen, schauen auf deine aktuelle Blockade und prüfen, ob ich der richtige Coach für dich bin. Wähle einfach rechts deinen Wunschtermin aus. Ich freue mich auf dich!
            </p>
          </div>

          {/* Right: Orbnet Iframe */}
          <div className="md:w-3/5 flex-1 min-h-[400px] md:min-h-0">
            <iframe
              src="https://www.orbnet.de/on/8ed15a55-6bf4-46cd-9de5-cef914d992b1?lang=de"
              className="w-full h-full min-h-[500px] md:min-h-[600px] rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"
              title="Erstgespräch buchen"
              allow="payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
