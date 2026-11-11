import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  /** Seite nicht indexieren (z. B. 404). */
  noindex?: boolean;
}

const defaultMeta = {
  de: {
    title: "Familienaufstellung Freiburg | Jona Fels",
    description: "Systemische Familienaufstellungen in Freiburg. Löse unbewusste Muster und finde inneren Frieden mit Jona Fels.",
  },
  en: {
    title: "Family Constellation Freiburg | Jona Fels",
    description: "Systemic family constellations in Freiburg. Dissolve unconscious patterns and find inner peace with Jona Fels.",
  },
};

const pageMeta: Record<string, Record<string, { title: string; description: string; keywords?: string }>> = {
  "/": {
    de: { title: "Familienaufstellung Freiburg im Einzelsetting | Jona Fels", description: "Familienaufstellung in Freiburg im 1:1 Setting – mit Bodenankern, ohne Gruppe, vor Ort oder online. 90 Min. für 110 €. Kostenloses Orientierungsgespräch vereinbaren." },
    en: { title: "Family Constellation Freiburg – 1:1 Setting | Jona Fels", description: "Family constellation in Freiburg in a 1:1 setting – with floor anchors, no group, in person or online. 90 min for €110. Book your free discovery call." },
  },
  "/en": {
    de: { title: "Familienaufstellung Freiburg im Einzelsetting | Jona Fels", description: "Familienaufstellung in Freiburg im 1:1 Setting – mit Bodenankern, ohne Gruppe, vor Ort oder online. 90 Min. für 110 €. Kostenloses Orientierungsgespräch vereinbaren." },
    en: { title: "Family Constellation Freiburg – 1:1 Setting | Jona Fels", description: "Family constellation in Freiburg in a 1:1 setting – with floor anchors, no group, in person or online. 90 min for €110. Book your free discovery call." },
  },
  "/ablauf-preise": {
    de: { title: "Ablauf & Preise | Systemische Aufstellungen Freiburg", description: "Kostenloses Orientierungsgespräch (Telefon/Video), Systemische 1:1 Aufstellung 110 € (90 Min.) – vor Ort in Freiburg oder online. Jona Fels." },
    en: { title: "Process & Pricing | Systemic Constellation Freiburg", description: "Free discovery call (phone/video), Systemic 1:1 Constellation €110 (90 min) – in person in Freiburg or online. Jona Fels." },
  },
  "/systemische-familienaufstellung-freiburg": {
    de: { title: "Familienaufstellung im Einzelsetting: Ablauf & Methode | Jona Fels", description: "Wie läuft eine Familienaufstellung im Einzelsetting ab? Bodenanker statt Stellvertreter, vertraulich und ohne Gruppe – Methode und Ablauf in Freiburg erklärt." },
    en: { title: "Family Constellation Freiburg – 1:1 Setting | Jona Fels", description: "Family constellation Freiburg in a 1:1 setting: floor anchors, confidential, no group. Book your free discovery call with Jona Fels." },
  },
  "/ueber-mich": {
    de: { title: "Über mich – Jona Fels, Systemischer Aufsteller Freiburg", description: "Lerne Jona Fels kennen: Dein systemischer Aufsteller in Freiburg. Erfahre, wie ich meine eigenen Muster durchbrach – und dich durch deine Unklarheit begleite." },
    en: { title: "About Me – Jona Fels, Systemic Constellation Facilitator Freiburg", description: "Get to know Jona Fels: your systemic constellation facilitator in Freiburg. Learn how I broke through my own patterns – and accompany you through your uncertainty." },
  },
  "/kontakt": {
    de: { title: "Kontakt – Systemische Aufstellungen Freiburg | Jona Fels", description: "Kontaktiere Jona Fels in Freiburg für ein kostenloses Orientierungsgespräch zur systemischen Aufstellungsarbeit oder Familienaufstellung. Per Telefon oder E-Mail." },
    en: { title: "Contact – Systemic Constellation Freiburg | Jona Fels", description: "Contact Jona Fels in Freiburg for a free discovery call on systemic constellation or family constellation. Via phone or email." },
  },
  "/blog": {
    de: { title: "Blog – Systemische Aufstellungen & Aufstellung Freiburg | Jona Fels", description: "Artikel und Insights rund um Familienaufstellungen, systemische Prozessarbeit und persönliche Entwicklung – aus der Praxis in Freiburg." },
    en: { title: "Blog – Systemic Constellation & Constellation Freiburg | Jona Fels", description: "Articles and insights on family constellations, systemic process work and personal growth – from the practice in Freiburg." },
  },
  "/datenschutz": {
    de: { title: "Datenschutz – Familienaufstellung Freiburg | Jona Fels", description: "Datenschutzerklärung gemäß DSGVO für die Website von Jona Fels – Familienaufstellung & Aufstellungsarbeit in Freiburg." },
    en: { title: "Privacy Policy – Family Constellation Freiburg | Jona Fels", description: "Privacy policy according to GDPR for the website of Jona Fels – family constellation & coaching in Freiburg." },
  },
  "/impressum": {
    de: { title: "Impressum – Familienaufstellung Freiburg | Jona Fels", description: "Impressum und rechtliche Angaben gemäß § 5 TMG für Jona Fels – Familienaufstellung & Aufstellungsarbeit in Freiburg." },
    en: { title: "Imprint – Family Constellation Freiburg | Jona Fels", description: "Legal notice according to German law for Jona Fels – family constellation & coaching in Freiburg." },
  },
  "/links": {
    de: { title: "Links | Jona Fels", description: "Alle Links zu Jona Fels – Familienaufstellung in Freiburg, Blog, YouTube und Kontakt." },
    en: { title: "Links | Jona Fels", description: "All links to Jona Fels – family constellation in Freiburg, blog, YouTube and contact." },
  },
  "/termine": {
    de: { title: "Termin buchen | Jona Fels", description: "Termin für eine Systemische 1:1 Aufstellung bei Jona Fels buchen – 90 Minuten, 110 €, in Freiburg oder online." },
    en: { title: "Book an appointment | Jona Fels", description: "Book a systemic 1:1 constellation with Jona Fels – 90 minutes, €110, in Freiburg or online." },
  },
  "/appointment": {
    de: { title: "Termin buchen | Jona Fels", description: "Termin für eine Systemische 1:1 Aufstellung bei Jona Fels buchen – 90 Minuten, 110 €, in Freiburg oder online." },
    en: { title: "Book an appointment | Jona Fels", description: "Book a systemic 1:1 constellation with Jona Fels – 90 minutes, €110, in Freiburg or online." },
  },
  "/agb": {
    de: { title: "AGB – Familienaufstellung Freiburg | Jona Fels", description: "Buchungs- und Stornierungsregeln für Aufstellungs- und Familienaufstellungs-Sitzungen bei Jona Fels in Freiburg." },
    en: { title: "Terms – Family Constellation Freiburg | Jona Fels", description: "Booking and cancellation terms for coaching and family constellation sessions with Jona Fels in Freiburg." },
  },
};

const resolveHead = (
  pathname: string,
  language: "de" | "en",
  opts: { title?: string; description?: string; image?: string; type: string; noindex?: boolean },
): ResolvedHead => {
  const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const meta = pageMeta[cleanPath]?.[language] || defaultMeta[language];
  const rawImage = opts.image || "https://fels-coach.de/og-image.png";
  // Open Graph braucht ABSOLUTE URLs (sonst zieht Facebook/LinkedIn das Bild nicht).
  const pageImage = rawImage.startsWith("http")
    ? rawImage
    : `https://fels-coach.de${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;
  return {
    title: opts.title || meta.title,
    description: opts.description || meta.description,
    image: pageImage,
    // Canonical IMMER ohne www, ohne Query-String, ohne Trailing-Slash (außer Root)
    url: `https://fels-coach.de${cleanPath}`,
    type: opts.type,
    noindex: Boolean(opts.noindex) || NOINDEX_PATHS.includes(cleanPath),
  };
};

export interface ResolvedHead {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  noindex: boolean;
}

/** Seiten, die nicht in Google erscheinen sollen (Buchungs-/Admin-Strecken). */
const NOINDEX_PATHS = ["/termine", "/appointment", "/admin", "/admin/login", "/links"];

/** Beim Vorrendern (scripts/prerender.js) sammelt SEOHead hier die Meta-Daten ein. */
export const ssrHead: { current: ResolvedHead | null } = { current: null };

export const SEOHead = ({ title, description, image, type = "website", noindex }: SEOHeadProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  const pathname = location.pathname;

  const resolved = resolveHead(pathname, language, { title, description, image, type, noindex });

  // Auf dem Server (Build) gibt es keine Effekte – Werte direkt einsammeln.
  if (typeof window === "undefined") {
    ssrHead.current = resolved;
  }

  useEffect(() => {
    const { title: pageTitle, description: pageDescription, image: pageImage, url: pageUrl } = resolved;
    // Update document title
    document.title = pageTitle;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("description", pageDescription);
    updateMeta("robots", resolved.noindex ? "noindex, follow" : "index, follow");
    updateMeta("og:title", pageTitle, true);
    updateMeta("og:description", pageDescription, true);
    updateMeta("og:image", pageImage, true);
    updateMeta("og:url", pageUrl, true);
    updateMeta("og:type", type, true);
    updateMeta("twitter:title", pageTitle);
    updateMeta("twitter:description", pageDescription);
    updateMeta("twitter:image", pageImage);
    updateMeta("og:image:alt", "Jona Fels – Systemische Aufstellungen in Freiburg", true);
    updateMeta("twitter:image:alt", "Jona Fels – Systemische Aufstellungen in Freiburg");

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pageUrl);

  }, [resolved.title, resolved.description, resolved.image, resolved.url, resolved.noindex, type]);

  return null;
};
