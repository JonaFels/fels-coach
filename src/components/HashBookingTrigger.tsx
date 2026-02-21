import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useOrbnetBooking } from "@/components/OrbnetBooking";

const ERSTGESPRAECH_SEMUID = "8ed15a55-6bf4-46cd-9de5-cef914d992b1";

/**
 * Globaler Trigger: Öffnet das Erstgespräch-Booking-Overlay,
 * wenn die URL den Hash #erstgespraech enthält.
 * Kann von Chatbase oder anderen externen Links genutzt werden.
 */
export const HashBookingTrigger = () => {
  const location = useLocation();
  const { openBooking, BookingDialog } = useOrbnetBooking();

  useEffect(() => {
    if (location.hash === "#erstgespraech") {
      openBooking(ERSTGESPRAECH_SEMUID);
      // Remove hash after opening so it can be triggered again
      window.history.replaceState(null, "", location.pathname + location.search);
    }
  }, [location.hash]);

  return <BookingDialog />;
};
