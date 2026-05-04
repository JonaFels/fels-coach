import { createContext, useContext, useEffect, useState, lazy, Suspense, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

// Lazy: Orbnet/Dialog-Code (Radix Dialog + Booking-Wrapper) wird erst geladen,
// wenn der User wirklich ein Modal öffnet. Spart ~30+ KiB im Initial-Bundle.
const LazyBookingMounts = lazy(() =>
  import("@/components/HashBookingMounts").then((m) => ({ default: m.HashBookingMounts })),
);

const HASH_TO_SEMUID: Record<string, string> = {
  "#kennenlernen": "609d5e7a-e208-4715-b073-e99206aebbf7",
  "#coaching": "55df32ef-b5d1-468e-a4ba-f7f892398327",
};

interface BookingContextValue {
  openErstgespraech: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export const useErstgespraech = () => useContext(BookingContext);

/**
 * Globaler Trigger + Provider:
 * - Stellt openErstgespraech() global bereit (für CTA-Buttons)
 * - Reagiert zusätzlich auf URL-Hashes (#erstgespraech, #kennenlernen, #coaching)
 * - Mountet das eigentliche Booking/Modal-UI erst nach Bedarf (Lazy-Chunk)
 */
export const HashBookingTrigger = ({ children }: { children?: ReactNode }) => {
  const location = useLocation();
  const [erstgespraechOpen, setErstgespraechOpen] = useState(false);
  const [bookingSemuid, setBookingSemuid] = useState<string | null>(null);
  const [needsMount, setNeedsMount] = useState(false);

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#erstgespraech") {
      setErstgespraechOpen(true);
      setNeedsMount(true);
      window.history.replaceState(null, "", location.pathname + location.search);
    } else {
      const semuid = HASH_TO_SEMUID[hash];
      if (semuid) {
        setBookingSemuid(semuid);
        setNeedsMount(true);
        window.history.replaceState(null, "", location.pathname + location.search);
      }
    }
  }, [location.hash]);

  const openErstgespraech = () => {
    setErstgespraechOpen(true);
    setNeedsMount(true);
  };

  return (
    <BookingContext.Provider value={{ openErstgespraech }}>
      {children}
      {needsMount && (
        <Suspense fallback={null}>
          <LazyBookingMounts
            erstgespraechOpen={erstgespraechOpen}
            onCloseErstgespraech={() => setErstgespraechOpen(false)}
            bookingSemuid={bookingSemuid}
            onCloseBooking={() => setBookingSemuid(null)}
          />
        </Suspense>
      )}
    </BookingContext.Provider>
  );
};

