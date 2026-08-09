import { lazy, type ComponentType } from "react";

const RELOAD_FLAG = "chunk-reload-attempt";

/**
 * Lädt Route-Chunks robust nach. Wenn nach einem Deployment eine veraltete
 * index.html gecached ist, existieren die referenzierten JS-Chunks nicht mehr
 * (Cloudflare liefert dann HTML statt JS) – die Unterseite bliebe leer.
 * In dem Fall wird die Seite genau einmal hart neu geladen.
 */
export function lazyWithRetry<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      window.sessionStorage?.removeItem(RELOAD_FLAG);
      return mod;
    } catch (error) {
      let alreadyTried = false;
      try {
        alreadyTried = window.sessionStorage?.getItem(RELOAD_FLAG) === "1";
        window.sessionStorage?.setItem(RELOAD_FLAG, "1");
      } catch {
        // sessionStorage nicht verfügbar – dann nur einmaliger Versuch ohne Flag
      }

      if (!alreadyTried) {
        window.location.reload();
        // Promise offen lassen, bis der Reload greift
        return new Promise<{ default: T }>(() => {});
      }

      throw error;
    }
  });
}
