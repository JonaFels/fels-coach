import { useEffect } from "react";

export const OrbnetFAB = () => {
  useEffect(() => {
    // Create the FAB booking mask
    const mask = document.createElement("div");
    mask.className = "orbnet-booking-mask";
    mask.dataset.semuid = "609d5e7a-e208-4715-b073-e99206aebbf7";
    mask.dataset.source = "my.orbnet.de";
    mask.dataset.type = "fab";
    mask.dataset.vertical = "bottom";
    mask.dataset.horizontal = "end";
    document.body.appendChild(mask);

    // Load script
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
      mask.remove();
    };
  }, []);

  return null;
};
