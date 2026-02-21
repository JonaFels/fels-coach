import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useOrbnetBooking } from "@/components/OrbnetBooking";

const HASH_TO_SEMUID: Record<string, string> = {
  "#erstgespraech": "8ed15a55-6bf4-46cd-9de5-cef914d992b1",
  "#kennenlernen": "55df32ef-b5d1-468e-a4ba-f7f892398327",
  "#coaching": "609d5e7a-e208-4715-b073-e99206aebbf7",
};

/**
 * Globaler Trigger: Öffnet das Booking-Overlay basierend auf dem URL-Hash.
 * Kann von Chatbase oder anderen externen Links genutzt werden.
 */
export const HashBookingTrigger = () => {
  const location = useLocation();
  const { openBooking, BookingDialog } = useOrbnetBooking();

  useEffect(() => {
    const semuid = HASH_TO_SEMUID[location.hash];
    if (semuid) {
      openBooking(semuid);
      window.history.replaceState(null, "", location.pathname + location.search);
    }
  }, [location.hash]);

  return <BookingDialog />;
};