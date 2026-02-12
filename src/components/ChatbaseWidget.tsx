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
    // Check consent before loading
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) return;

    const prefs = JSON.parse(consent);
    if (!prefs.analytics) return;

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

  return null;
};
