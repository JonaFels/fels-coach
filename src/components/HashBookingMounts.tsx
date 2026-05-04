import { useEffect } from "react";
import { useOrbnetBooking } from "@/components/OrbnetBooking";
import { ErstgespraechModal } from "@/components/ErstgespraechModal";

interface Props {
  erstgespraechOpen: boolean;
  onCloseErstgespraech: () => void;
  bookingSemuid: string | null;
  onCloseBooking: () => void;
}

/**
 * Lazy-geladener Mount-Punkt für die Booking-Dialoge.
 * Wird nur erzeugt, wenn der User wirklich ein Modal öffnet.
 */
export const HashBookingMounts = ({
  erstgespraechOpen,
  onCloseErstgespraech,
  bookingSemuid,
  onCloseBooking,
}: Props) => {
  const { openBooking, BookingDialog } = useOrbnetBooking();

  useEffect(() => {
    if (bookingSemuid) {
      openBooking(bookingSemuid);
      onCloseBooking();
    }
  }, [bookingSemuid, openBooking, onCloseBooking]);

  return (
    <>
      <BookingDialog />
      <ErstgespraechModal open={erstgespraechOpen} onClose={onCloseErstgespraech} />
    </>
  );
};
