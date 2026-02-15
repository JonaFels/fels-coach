import { useCallback, useEffect, useRef, useState } from "react";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrbnetDialogProps {
  semuid: string;
  open: boolean;
  onClose: () => void;
}

const OrbnetDialog = ({ semuid, open, onClose }: OrbnetDialogProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    const mask = document.createElement("div");
    mask.className = "orbnet-booking-mask";
    mask.dataset.semuid = semuid;
    mask.dataset.source = "my.orbnet.de";
    mask.dataset.type = "embed";
    containerRef.current.appendChild(mask);

    const existingScript = document.getElementById("orbnet-booking-script");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "orbnet-booking-script";
    script.src =
      "https://static.orbnet.de/3.0/dist/booking.js?ver=7643f23565c4865f828a0e810e468eab35cf22e2";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "origin";
    document.body.appendChild(script);

    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open, semuid]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-border bg-background rounded-t-2xl">
          <h3 className="font-serif text-lg font-semibold text-foreground">Termin wählen</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full" aria-label="Schließen">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div ref={containerRef} className="min-h-[400px] p-4" />
      </div>
    </div>
  );
};

// Iframe-based dialog for the Orbnet selection page
interface OrbnetIframeDialogProps {
  url: string;
  open: boolean;
  onClose: () => void;
}

const OrbnetIframeDialog = ({ url, open, onClose }: OrbnetIframeDialogProps) => {
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
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-2xl h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border rounded-t-2xl">
          <h3 className="font-serif text-lg font-semibold text-foreground">Termin buchen</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full" aria-label="Schließen">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <iframe
          src={url}
          className="flex-1 w-full rounded-b-2xl"
          title="Orbnet Terminbuchung"
          allow="payment"
        />
      </div>
    </div>
  );
};

// Global FAB button
export const OrbnetFAB = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setOpen(true)}
          size="lg"
          className="rounded-full shadow-lg min-h-[56px] min-w-[56px] p-4 md:px-6 md:py-3"
          aria-label="Termin buchen"
        >
          <Calendar className="h-5 w-5 md:mr-2" aria-hidden="true" />
          <span className="hidden md:inline">Termin buchen</span>
        </Button>
      </div>
      <OrbnetIframeDialog
        url="https://www.orbnet.de/p/fels-coach/"
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

// Hook to open a specific booking calendar from anywhere
export const useOrbnetBooking = () => {
  const [dialogState, setDialogState] = useState<{ open: boolean; semuid: string }>({
    open: false,
    semuid: "",
  });

  const openBooking = useCallback((semuid: string) => {
    setDialogState({ open: true, semuid });
  }, []);

  const closeBooking = useCallback(() => {
    setDialogState({ open: false, semuid: "" });
  }, []);

  const BookingDialog = () => (
    <OrbnetDialog
      semuid={dialogState.semuid}
      open={dialogState.open}
      onClose={closeBooking}
    />
  );

  return { openBooking, BookingDialog };
};
