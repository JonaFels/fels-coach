import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

declare global {
  interface Window {
    chatbase: any;
  }
}

const CHATBASE_SCRIPT_ID = "RU4WfiTRxWed6lCvKbGt7";

/**
 * Chatbase-Widget – Click-to-Load.
 * Das Chatbase-Skript wird NICHT automatisch geladen.
 * Erst wenn der Nutzer auf den "Chat starten"-Button klickt, wird
 * das externe Skript nachgeladen und der Chat geöffnet.
 *
 * Vorteile:
 *  - DSGVO/TTDSG-konform: kein externes Script ohne aktive Nutzerhandlung
 *  - bessere Performance (kein Drittanbieter-JS beim Seitenaufruf)
 */
export const ChatbaseWidget = () => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Falls das Skript bereits geladen wurde (z.B. nach Navigation), Button verstecken
  useEffect(() => {
    if (document.getElementById(CHATBASE_SCRIPT_ID)) {
      setIsLoaded(true);
    }
  }, []);

  const handleStartChat = () => {
    if (isLoaded || isLoading) return;
    setIsLoading(true);

    // Chatbase Stub initialisieren
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }

    // Skript dynamisch laden
    if (!document.getElementById(CHATBASE_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = CHATBASE_SCRIPT_ID;
      script.setAttribute("domain", "www.chatbase.co");
      script.onload = () => {
        setIsLoaded(true);
        setIsLoading(false);

        // Robust öffnen: pollt bis das Chatbase-Widget bereit ist
        // und ruft dann mehrfach "open" auf, falls der erste Versuch
        // noch zu früh kommt (Iframe muss vollständig gemountet sein).
        let attempts = 0;
        const maxAttempts = 40; // ~8 Sekunden
        const tryOpen = () => {
          attempts++;
          try {
            // Bevorzugt: Klick auf das vom Widget injizierte Bubble-Element
            const bubble = document.querySelector<HTMLElement>(
              '[id^="chatbase-bubble-button"], button[aria-label*="hat" i][class*="chatbase" i]'
            );
            const iframe = document.getElementById("chatbase-bubble-window");

            if (iframe && (iframe as HTMLElement).style.display !== "none") {
              return; // Bereits offen
            }

            if (bubble) {
              bubble.click();
              // Prüfen, ob es wirklich aufging
              setTimeout(() => {
                const win = document.getElementById("chatbase-bubble-window") as HTMLElement | null;
                if (!win || win.style.display === "none") {
                  if (attempts < maxAttempts) setTimeout(tryOpen, 200);
                }
              }, 250);
              return;
            }

            // Fallback: API-Call
            window.chatbase?.("open");
          } catch {
            /* noop */
          }
          if (attempts < maxAttempts) setTimeout(tryOpen, 200);
        };
        tryOpen();
      };
      script.onerror = () => {
        setIsLoading(false);
      };
      document.body.appendChild(script);
    }
  };

  if (isLoaded) return null;

  const label =
    t("chat.start") === "chat.start" ? "Chat starten" : t("chat.start");

  return (
    <button
      onClick={handleStartChat}
      disabled={isLoading}
      aria-label={label}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-wait"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm font-medium hidden sm:inline">
        {isLoading ? "…" : label}
      </span>
    </button>
  );
};
