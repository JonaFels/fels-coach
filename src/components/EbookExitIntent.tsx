import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, X } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";
import { useLanguage } from "@/contexts/LanguageContext";

const STORAGE_KEY = "ebook-teaser-dismissed-v1";

/**
 * Sanfter E-Book-Teaser:
 * - Erscheint einmal pro Session nach 55% Scroll-Tiefe ODER bei Exit-Intent (Mouse verlässt Viewport nach oben).
 * - Klein, unten rechts (Desktop) bzw. Bottom-Sheet (Mobile).
 * - User kann mit X dauerhaft (localStorage) schließen.
 * - Nicht aggressiv: keine Modal-Overlays, keine Verzögerung der Seite.
 */
export const EbookExitIntent = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      /* no-op */
    }

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const pct = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (pct > 0.55) show();
    };

    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) show();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* no-op */
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label={t("ebookTeaser.ariaLabel")}
      className="fixed z-40 bottom-20 md:bottom-6 right-4 md:right-6 left-4 md:left-auto md:max-w-sm animate-fade-in"
    >
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl shadow-foreground/10 p-5 md:p-6">
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-2 right-2 p-1.5 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 transition-colors"
          aria-label={t("modal.close")}
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex items-start gap-3">
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary/15">
            <BookOpen className="h-5 w-5 text-secondary" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-serif text-base md:text-lg font-semibold text-foreground leading-snug mb-1">
              {t("ebookTeaser.title")}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {t("ebookTeaser.desc")}
            </p>
            <Link
              to="/ebook"
              onClick={() => {
                trackCTAClick("exit_intent_ebook", "exit_intent", "link");
                dismiss();
              }}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-4 py-2 text-sm font-medium hover:-translate-y-0.5 transition-transform"
            >
              {t("ebookTeaser.cta")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
