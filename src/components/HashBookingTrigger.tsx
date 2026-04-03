import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useOrbnetBooking } from "@/components/OrbnetBooking";
import { ErstgespraechModal } from "@/components/ErstgespraechModal";

const HASH_TO_SEMUID: Record<string, string> = {
  "#kennenlernen": "609d5e7a-e208-4715-b073-e99206aebbf7",
  "#coaching": "55df32ef-b5d1-468e-a4ba-f7f892398327",
};

/**
 * Globaler Trigger: Öffnet das Booking-Overlay basierend auf dem URL-Hash.
 * #erstgespraech öffnet das Erstgespräch-Modal mit Kalender.
 * #kennenlernen und #coaching öffnen den normalen Orbnet-Kalender.
 */
export const HashBookingTrigger = () => {
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
    <>
      <BookingDialog />
      <ErstgespraechModal
        open={erstgespraechOpen}
        onClose={() => setErstgespraechOpen(false)}
      />
    </>
  );
};
