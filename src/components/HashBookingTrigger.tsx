import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useOrbnetBooking } from "@/components/OrbnetBooking";
import { ErstgespraechModal } from "@/components/ErstgespraechModal";

const HASH_TO_SEMUID: Record<string, string> = {
  "#kennenlernen": "609d5e7a-e208-4715-b073-e99206aebbf7",
  "#coaching": "55df32ef-b5d1-468e-a4ba-f7f892398327",
};

interface BookingContextValue {
  openErstgespraech: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

/**
 * Hook für Komponenten, die das Erstgespräch-Modal direkt öffnen wollen,
 * ohne den User zur Kontakt-Seite zu navigieren.
 */
export const useErstgespraech = () => {
  const ctx = useContext(BookingContext);
  return ctx;
};

/**
 * Globaler Trigger + Provider:
 * - Stellt openErstgespraech() global bereit (für CTA-Buttons)
 * - Reagiert zusätzlich auf URL-Hashes (#erstgespraech, #kennenlernen, #coaching)
 *   damit direkte Links und Browser-Back weiterhin funktionieren
 */
export const HashBookingTrigger = ({ children }: { children?: ReactNode }) => {
  const location = useLocation();
  const { openBooking, BookingDialog } = useOrbnetBooking();
  const [erstgespraechOpen, setErstgespraechOpen] = useState(false);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#erstgespraech") {
      setErstgespraechOpen(true);
      window.history.replaceState(null, "", location.pathname + location.search);
    } else {
      const semuid = HASH_TO_SEMUID[hash];
      if (semuid) {
        openBooking(semuid);
        window.history.replaceState(null, "", location.pathname + location.search);
      }
    }
  }, [location.hash]);

  return (
    <BookingContext.Provider value={{ openErstgespraech: () => setErstgespraechOpen(true) }}>
      {children}
      <BookingDialog />
      <ErstgespraechModal
        open={erstgespraechOpen}
        onClose={() => setErstgespraechOpen(false)}
      />
    </BookingContext.Provider>
  );
};
