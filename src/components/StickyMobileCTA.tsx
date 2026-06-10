import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useErstgespraech } from "@/components/HashBookingTrigger";
import { trackCTAClick } from "@/lib/tracking";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Floating CTA-Button für Mobile.
 * - Wird erst nach 600px Scroll sichtbar (nicht im ersten Viewport, da Hero bereits CTA hat).
 * - Versteckt sich, wenn der Footer-Bereich nahezu erreicht ist (verhindert Überdecken).
 * - Nur sichtbar auf Mobile (<md), Desktop hat Header-CTA.
 */
export const StickyMobileCTA = () => {
  const { t } = useLanguage();
  const booking = useErstgespraech();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.documentElement.scrollHeight - 240;
      setVisible(y > 600 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-4 inset-x-4 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <a
        href="/kontakt#erstgespraech"
        onClick={(e) => {
          if (booking) {
            e.preventDefault();
            booking.openErstgespraech();
          }
          trackCTAClick("sticky_mobile_cta", "sticky_bottom", "link");
        }}
        className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground rounded-full py-4 shadow-xl shadow-foreground/15 ring-1 ring-foreground/5 font-medium text-base active:scale-[0.98] transition-transform"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {t("cta.mobileCta")}
      </a>
    </div>
  );
};
