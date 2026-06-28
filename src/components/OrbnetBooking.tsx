import { useCallback, useEffect, useState } from "react";
import { Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    loadCustomCssOverrides?: () => void;
  }
}

const THERAPSY_BASE = "https://bookings.therapsy.at/?id=3f27492a3d11dc68041c958654a5b7e6";
const THERAPSY_ERSTGESPRAECH = "https://bookings.therapsy.at/?type=c28ea3d9-ea19-45f5-a025-6f5eff92b199&id=3f27492a3d11dc68041c958654a5b7e6";
const THERAPSY_KENNENLERNEN = "https://bookings.therapsy.at/?type=596fe883-643f-4ce2-aad7-81791c631b5d&id=3f27492a3d11dc68041c958654a5b7e6";
const THERAPSY_COACHING = "https://bookings.therapsy.at/?type=4a663327-f5e0-4843-be57-24ddcb60ae9f&id=3f27492a3d11dc68041c958654a5b7e6";

const SEMUID_TO_URL: Record<string, string> = {
  "609d5e7a-e208-4715-b073-e99206aebbf7": THERAPSY_KENNENLERNEN,
  "55df32ef-b5d1-468e-a4ba-f7f892398327": THERAPSY_COACHING,
};

interface OrbnetDialogProps {
  semuid: string;
  open: boolean;
  onClose: () => void;
}

const OrbnetDialog = ({ semuid, open, onClose }: OrbnetDialogProps) => {
  const url = SEMUID_TO_URL[semuid] ?? THERAPSY_ERSTGESPRAECH;
  useEffect(() => {
    if (!open) return;
    window.loadCustomCssOverrides?.();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 md:px-8 md:py-6 border-b border-border bg-background rounded-t-2xl">
          <h3 className="font-serif text-lg font-semibold text-foreground">Termin wählen</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full" aria-label="Schließen">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div
          className="relative flex-1 overflow-y-auto overscroll-contain rounded-b-2xl"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <iframe
            src={url}
            title="Booking Widget"
            loading="lazy"
            className="w-full border-0 p-3 md:p-4 rounded-b-2xl"
            style={{ height: "750px" }}
            allow="payment"
          />
        </div>
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
    window.loadCustomCssOverrides?.();
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
        <div className="flex items-center justify-between px-6 py-5 md:px-8 md:py-6 border-b border-border rounded-t-2xl">
          <h3 className="font-serif text-lg font-semibold text-foreground">Termin buchen</h3>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full" aria-label="Schließen">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div
          className="relative flex-1 overflow-y-auto overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <iframe
            src={url}
            className="absolute inset-0 w-full h-full rounded-b-2xl"
            style={{ minHeight: "600px" }}
            title="Orbnet Terminbuchung"
            allow="payment"
          />
          {/* Overlay to hide Orbnet language flag (cross-origin iframe, CSS injection not possible) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 h-12 w-14 bg-background rounded-bl-md z-[1]"
          />
        </div>
      </div>
    </div>
  );
};

// Global FAB button
export const OrbnetFAB = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-[18px] right-20 z-50">
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
        url={THERAPSY_BASE}
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
