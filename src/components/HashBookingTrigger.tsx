import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useOrbnetBooking } from "@/components/OrbnetBooking";

const HASH_TO_SEMUID: Record<string, string> = {
  "#kennenlernen": "55df32ef-b5d1-468e-a4ba-f7f892398327",
  "#coaching": "609d5e7a-e208-4715-b073-e99206aebbf7",
};

/**
 * Globaler Trigger: Öffnet das Booking-Overlay basierend auf dem URL-Hash.
 * #erstgespraech wird jetzt auf /kontakt behandelt (direkter Kalender).
 * #kennenlernen und #coaching öffnen den normalen Orbnet-Kalender.
 */
export const HashBookingTrigger = () => {
  const location = useLocation();
  const { openBooking, BookingDialog } = useOrbnetBooking();

  useEffect(() => {
    const hash = location.hash;
    if (hash === "#erstgespraech") {
      // Redirect to Kontakt page where calendar is embedded
      if (location.pathname !== "/kontakt") {
        window.location.href = "/kontakt";
      }
    } else {
      const semuid = HASH_TO_SEMUID[hash];
      if (semuid) {
        openBooking(semuid);
        window.history.replaceState(null, "", location.pathname + location.search);
      }
    }
  }, [location.hash]);

  return <BookingDialog />;
};
