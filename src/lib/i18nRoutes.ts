/**
 * Zweisprachige Adressen: Jede deutsche Seite hat eine englische Entsprechung.
 * Die Sprache ergibt sich allein aus der URL (/en/... = Englisch), damit Google
 * beide Versionen getrennt findet und per hreflang verknüpft.
 *
 * Neue Seite? Hier ein Paar ergänzen – Links, Sprachumschalter, Meta-Daten und
 * Vorrendern nutzen diese Tabelle automatisch.
 */
export type Lang = "de" | "en";

export const SITE_URL = "https://fels-coach.de";

/** Deutsche Adresse → englische Adresse */
export const ROUTE_PAIRS: Record<string, string> = {
  "/": "/en",
  "/ablauf-preise": "/en/process-pricing",
  "/systemische-familienaufstellung-freiburg": "/en/family-constellation-freiburg",
  "/ueber-mich": "/en/about",
  "/kontakt": "/en/contact",
  "/blog": "/en/blog",
  "/impressum": "/en/imprint",
  "/datenschutz": "/en/privacy",
  "/agb": "/en/terms",
  "/termine": "/appointment",
};

const EN_TO_DE: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_PAIRS).map(([de, en]) => [en, de]),
);

const clean = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path);

export const languageFromPath = (pathname: string): Lang => {
  const p = clean(pathname);
  return p === "/en" || p.startsWith("/en/") || p === "/appointment" ? "en" : "de";
};

/** Deutsche Grundadresse zu einer (deutschen oder englischen) Adresse. */
export const toGermanPath = (pathname: string): string => {
  const p = clean(pathname);
  if (EN_TO_DE[p]) return EN_TO_DE[p];
  if (p.startsWith("/en/blog/")) return p.replace(/^\/en/, "");
  return p;
};

/** Englische Adresse zu einer (deutschen oder englischen) Adresse. */
export const toEnglishPath = (pathname: string): string => {
  const de = toGermanPath(pathname);
  if (ROUTE_PAIRS[de]) return ROUTE_PAIRS[de];
  if (de.startsWith("/blog/")) return `/en${de}`;
  return de; // Seiten ohne englische Version (z. B. /links)
};

/** Hat diese Seite eine Version in beiden Sprachen? */
export const hasTranslation = (pathname: string): boolean => {
  const de = toGermanPath(pathname);
  return Boolean(ROUTE_PAIRS[de]) || de.startsWith("/blog/");
};

/** Interner Link in der gewünschten Sprache – Anker (#…) und Query bleiben erhalten. */
export const localizePath = (href: string, lang: Lang): string => {
  if (!href.startsWith("/")) return href;
  const m = href.match(/^([^?#]*)(.*)$/);
  const path = m?.[1] || "/";
  const rest = m?.[2] || "";
  const target = lang === "en" ? toEnglishPath(path) : toGermanPath(path);
  return target + rest;
};
