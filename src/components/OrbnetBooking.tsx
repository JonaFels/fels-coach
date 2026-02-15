import { useCallback, useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const OrbnetFAB = () => {
  const [loaded, setLoaded] = useState(false);

  const openBooking = useCallback(() => {
    if (!loaded) {
      // Create the FAB mask
      const mask = document.createElement("div");
      mask.className = "orbnet-booking-mask";
      mask.dataset.semuid = "609d5e7a-e208-4715-b073-e99206aebbf7";
      mask.dataset.source = "my.orbnet.de";
      mask.dataset.type = "fab";
      mask.dataset.vertical = "bottom";
      mask.dataset.horizontal = "end";
      document.body.appendChild(mask);

      const script = document.createElement("script");
      script.src =
        "https://static.orbnet.de/3.0/dist/booking.js?ver=7643f23565c4865f828a0e810e468eab35cf22e2";
      script.crossOrigin = "anonymous";
      script.referrerPolicy = "origin";
      script.onload = () => {
        setLoaded(true);
        // Auto-click the Orbnet FAB once it renders
        setTimeout(() => {
          const orbnetBtn = document.querySelector(".orbnet-booking-mask button, .orbnet-fab-button") as HTMLElement;
          if (orbnetBtn) orbnetBtn.click();
        }, 500);
      };
      document.body.appendChild(script);
    }
  }, [loaded]);

  if (loaded) return null; // Orbnet FAB takes over

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={openBooking}
        size="lg"
        className="rounded-full shadow-lg min-h-[56px] min-w-[56px] p-4 md:px-6 md:py-3"
        aria-label="Termin buchen"
      >
        <Calendar className="h-5 w-5 md:mr-2" aria-hidden="true" />
        <span className="hidden md:inline">Termin buchen</span>
      </Button>
    </div>
  );
};
