import { useEffect } from "react";

declare global {
  interface Window {
    chatbase: any;
  }
}

const COOKIE_CONSENT_KEY = "fels-cookie-consent";

/**
 * Chatbase-Widget – wird nur geladen, wenn der Nutzer Analytics-Cookies zugestimmt hat.
 */
export const ChatbaseWidget = () => {
  useEffect(() => {
    // Check cookie consent before loading
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) return;

    try {
      const prefs = JSON.parse(consent);
      if (!prefs.analytics) return;
    } catch {
      return;
    }

    // Initialize chatbase
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          return (...args: any[]) => target(prop, ...args);
        },
      });
    }

    // Load the Chatbase script
    const onLoad = () => {
      if (document.getElementById("RU4WfiTRxWed6lCvKbGt7")) return;

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "RU4WfiTRxWed6lCvKbGt7";
      script.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(script);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  // Also listen for consent changes (e.g. user accepts cookies after page load)
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== COOKIE_CONSENT_KEY) return;
      // Reload page to apply consent (simplest reliable approach)
      window.location.reload();
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return null;
};
