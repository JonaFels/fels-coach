import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

interface ErstgespraechModalProps {
  open: boolean;
  onClose: () => void;
}

const THERAPSY_URL = "https://bookings.therapsy.at/?type=c28ea3d9-ea19-45f5-a025-6f5eff92b199&id=3f27492a3d11dc68041c958654a5b7e6";

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
      style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Hellblauer Rahmen wie auf der Kontaktseite, damit die weiße Karte sanft hervorgehoben wird */}
      <div className="relative w-full max-w-4xl my-auto rounded-3xl bg-[#eaf3fb] p-3 md:p-5 shadow-2xl">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow"
          aria-label="Schließen"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="bg-white rounded-2xl shadow-[0_10px_40px_-12px_rgba(15,40,80,0.12)] ring-1 ring-black/5 overflow-hidden">
          {/* Portrait + Text */}
          <div className="px-6 pt-10 pb-8 md:px-10 md:pt-12 md:pb-10 flex flex-col items-center text-center">
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

          {/* Therapsy Booking Embed – nahtlos in der Karte */}
          <iframe
            src={THERAPSY_URL}
            title="Booking Widget"
            loading="lazy"
            className="block w-full border-0"
            style={{ height: "750px" }}
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
};
