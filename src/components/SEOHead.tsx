import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const defaultMeta = {
  de: {
    title: "Familienaufstellung & Coaching Freiburg | Jona Fels",
    description: "Systemische Familienaufstellungen und Coaching in Freiburg. Löse unbewusste Muster und finde inneren Frieden mit Jona Fels.",
  },
  en: {
    title: "Family Constellation & Coaching Freiburg | Jona Fels",
    description: "Systemic family constellations and coaching in Freiburg. Dissolve unconscious patterns and find inner peace with Jona Fels.",
  },
};

const pageMeta: Record<string, Record<string, { title: string; description: string }>> = {
  "/": {
    de: { title: "Systemische Beratung & Aufstellung Freiburg | Jona Fels", description: "Fühlst du dich orientierungslos? Systemische Beratung und Familienaufstellung im Einzelsetting in Freiburg. Löse innere Blockaden und finde Klarheit." },
    en: { title: "Systemic Counseling & Constellation Freiburg | Jona Fels", description: "Feeling disoriented? Systemic counseling and family constellation as 1:1 sessions in Freiburg. Dissolve inner blockages and find clarity." },
  },
  "/systemische-beratung-freiburg": {
    de: { title: "Systemische Beratung Freiburg 1:1 | Jona Fels", description: "Systemische Beratung in Freiburg: 1:1 Gespräche, Anteile-Arbeit und Systembrett. Sortiere dein inneres Chaos und gewinne Handlungsfähigkeit zurück." },
    en: { title: "Systemic Counseling Freiburg 1:1 | Jona Fels", description: "Systemic counseling in Freiburg: 1:1 conversations, parts work and the systemic board. Sort your inner chaos and regain your ability to act." },
  },
  "/angebote": {
    de: { title: "Termine & Preise – Familienaufstellung Freiburg | Jona Fels", description: "Buche Coaching oder Familienaufstellung in Freiburg. Kennenlern-Session 55 €, Coaching 95 € – inkl. kostenlosem Erstgespräch." },
    en: { title: "Appointments & Prices Freiburg | Jona Fels", description: "Book your systemic coaching or family constellation in Freiburg. Intro session €55, coaching with individual constellation €95 – free first call included." },
  },
  "/systemische-familienaufstellung-freiburg": {
    de: { title: "Familienaufstellung Einzelsetting Freiburg | Jona Fels", description: "Familienaufstellung als Einzelsitzung in Freiburg: 1:1 mit Bodenankern, geschützt und vertraulich – ohne Gruppe. Jetzt kostenloses Erstgespräch buchen." },
    en: { title: "Family Constellation Individual Session Freiburg | Jona Fels", description: "Family constellation as a 1:1 individual session in Freiburg with floor anchors – confidential, no group. Book your free intro now." },
  },
  "/impulse": {
    de: { title: "Impulse zur Familienaufstellung – Freiburg | Jona Fels", description: "Kostenlose Impulse zu Familienaufstellung & Coaching: Erkenne unbewusste Muster, finde zurück zu dir und werde zum Fels." },
    en: { title: "Impulses on Family Constellation – Freiburg | Jona Fels", description: "Free impulses on family constellation & coaching: Recognise unconscious patterns, find yourself and become the rock." },
  },
  "/ebook": {
    de: { title: "Impulse zur Familienaufstellung – Freiburg | Jona Fels", description: "Kostenlose Impulse zu Familienaufstellung & Coaching: Erkenne unbewusste Muster, finde zurück zu dir und werde zum Fels." },
    en: { title: "Impulses on Family Constellation – Freiburg | Jona Fels", description: "Free impulses on family constellation & coaching: Recognise unconscious patterns, find yourself and become the rock." },
  },
  "/ueber-mich": {
    de: { title: "Über mich – Jona Fels, Coach Freiburg", description: "Lerne Jona Fels kennen: systemischer Coach in Freiburg. Erfahre, wie ich meine eigenen Muster durchbrach – und dich begleite." },
    en: { title: "About Me – Jona Fels, Coach Freiburg", description: "Get to know Jona Fels: systemic coach in Freiburg. Learn how I broke through my own patterns – and accompany you." },
  },
  "/kontakt": {
    de: { title: "Kontakt – Coaching Freiburg | Jona Fels", description: "Kontaktiere Jona Fels in Freiburg für ein kostenloses Erstgespräch zur Familienaufstellung oder zum systemischen Coaching. Per Telefon, E-Mail oder WhatsApp." },
    en: { title: "Contact – Coaching Freiburg | Jona Fels", description: "Contact Jona Fels in Freiburg for a free initial consultation on family constellation or systemic coaching. Via phone, email or WhatsApp." },
  },
  "/blog": {
    de: { title: "Blog – Coaching Freiburg | Jona Fels", description: "Artikel und Insights rund um Familienaufstellung, systemisches Coaching und persönliche Entwicklung – aus der Praxis in Freiburg." },
    en: { title: "Blog – Coaching Freiburg | Jona Fels", description: "Articles and insights on family constellation, systemic coaching and personal growth – from the practice in Freiburg." },
  },
  "/datenschutz": {
    de: { title: "Datenschutz – Familienaufstellung Freiburg | Jona Fels", description: "Datenschutzerklärung gemäß DSGVO für die Website von Jona Fels – Familienaufstellung & Coaching in Freiburg." },
    en: { title: "Privacy Policy – Family Constellation Freiburg | Jona Fels", description: "Privacy policy according to GDPR for the website of Jona Fels – family constellation & coaching in Freiburg." },
  },
  "/impressum": {
    de: { title: "Impressum – Familienaufstellung Freiburg | Jona Fels", description: "Impressum und rechtliche Angaben gemäß § 5 TMG für Jona Fels – Familienaufstellung & Coaching in Freiburg." },
    en: { title: "Imprint – Family Constellation Freiburg | Jona Fels", description: "Legal notice according to German law for Jona Fels – family constellation & coaching in Freiburg." },
  },
  "/agb": {
    de: { title: "AGB – Familienaufstellung Freiburg | Jona Fels", description: "Buchungs- und Stornierungsregeln für Coaching- und Familienaufstellungs-Sitzungen bei Jona Fels in Freiburg." },
    en: { title: "Terms – Family Constellation Freiburg | Jona Fels", description: "Booking and cancellation terms for coaching and family constellation sessions with Jona Fels in Freiburg." },
  },
};

export const SEOHead = ({ title, description, image, type = "website" }: SEOHeadProps) => {
  const { language } = useLanguage();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const meta = pageMeta[pathname]?.[language] || defaultMeta[language];
    const pageTitle = title || meta.title;
    const pageDescription = description || meta.description;
    const rawImage = image || "https://fels-coach.de/og-image.webp?v=3";
    // Open Graph braucht ABSOLUTE URLs (sonst zieht Facebook/LinkedIn das Bild nicht).
    // Vite-Asset-Imports (z. B. /assets/blog-xxx.webp) zur Domain ergänzen.
    const pageImage = rawImage.startsWith("http")
      ? rawImage
      : `https://fels-coach.de${rawImage.startsWith("/") ? "" : "/"}${rawImage}`;
    // Canonical IMMER ohne www, ohne Query-String, ohne Trailing-Slash (außer Root)
    const cleanPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    const pageUrl = `https://fels-coach.de${cleanPath}`;

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
    updateMeta("og:title", pageTitle, true);
    updateMeta("og:description", pageDescription, true);
    updateMeta("og:image", pageImage, true);
    updateMeta("og:url", pageUrl, true);
    updateMeta("og:type", type, true);
    updateMeta("twitter:title", pageTitle);
    updateMeta("twitter:description", pageDescription);
    updateMeta("twitter:image", pageImage);
    updateMeta("og:image:alt", "Jona Fels – Systemisches Coaching & Familienaufstellung in Freiburg", true);
    updateMeta("twitter:image:alt", "Jona Fels – Systemisches Coaching & Familienaufstellung in Freiburg");

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", pageUrl);

  }, [pathname, language, title, description, image, type]);

  return null;
};
