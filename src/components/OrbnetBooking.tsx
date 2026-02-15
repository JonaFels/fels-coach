import { useEffect, useRef } from "react";

interface OrbnetBookingProps {
  semuid: string;
  title: string;
}

export const OrbnetBooking = ({ semuid, title }: OrbnetBookingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create the booking mask div
    const mask = document.createElement("div");
    mask.className = "orbnet-booking-mask";
    mask.dataset.semuid = semuid;
    mask.dataset.source = "my.orbnet.de";
    mask.dataset.type = "embed";
    containerRef.current.appendChild(mask);

    // Load script only once globally
    const scriptId = "orbnet-booking-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://static.orbnet.de/3.0/dist/booking.js?ver=7643f23565c4865f828a0e810e468eab35cf22e2";
      script.crossOrigin = "anonymous";
      script.referrerPolicy = "origin";
      document.body.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [semuid]);

  return (
    <div>
      <h3 className="font-serif text-xl font-semibold text-foreground text-center mb-6">
        {title}
      </h3>
      <div ref={containerRef} className="min-h-[400px]" />
      <noscript>
        <p className="text-center text-muted-foreground">
          Dieser Kalender benötigt aktiviertes Javascript.
        </p>
      </noscript>
    </div>
  );
};
