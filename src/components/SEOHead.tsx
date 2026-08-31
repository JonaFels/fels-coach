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
    de: { title: "Systemische Aufstellung Freiburg | Jona Fels", description: "Systemische Aufstellung in der Aufstellungspraxis Freiburg – 1:1, geschützt, auch online. Jetzt kostenloses Orientierungsgespräch vereinbaren." },
    en: { title: "Systemic Constellation Freiburg | Jona Fels", description: "Systemic constellation in my Freiburg practice – 1:1, confidential, also online. Book your free discovery call with Jona Fels today." },
  },
  "/ablauf-preise": {
    de: { title: "Ablauf & Preise | Systemische Aufstellung Freiburg", description: "Kostenloses Erstgespräch, Kennenlern-Sitzung 55 €, Aufstellung mit Einzelaufstellung 110 € – in Freiburg oder online. Jona Fels." },
    en: { title: "Process & Pricing | Systemic Constellation Freiburg", description: "Free discovery call, getting-to-know session €55, constellation work with individual constellation €110 – in Freiburg or online. Jona Fels." },
  },
  "/systemische-familienaufstellung-freiburg": {
    de: { title: "Familienaufstellung Freiburg – Einzelsetting | Jona Fels", description: "Familienaufstellung Freiburg im Einzelsetting: 1:1 mit Bodenankern, vertraulich und ohne Gruppe. Kostenloses Orientierungsgespräch sichern." },
    en: { title: "Family Constellation Freiburg – 1:1 Setting | Jona Fels", description: "Family constellation Freiburg in a 1:1 setting: floor anchors, confidential, no group. Book your free discovery call with Jona Fels." },
  },
  "/ueber-mich": {
    de: { title: "Über mich – Jona Fels, Systemischer Aufsteller Freiburg", description: "Lerne Jona Fels kennen: Dein systemischer Aufsteller in Freiburg. Erfahre, wie ich meine eigenen Muster durchbrach – und dich durch deine Unklarheit begleite." },
    en: { title: "About Me – Jona Fels, Systemic Constellation Facilitator Freiburg", description: "Get to know Jona Fels: your systemic constellation facilitator in Freiburg. Learn how I broke through my own patterns – and accompany you through your uncertainty." },
  },
  "/kontakt": {
    de: { title: "Kontakt – Systemische Aufstellung Freiburg | Jona Fels", description: "Kontaktiere Jona Fels in Freiburg für ein kostenloses Erstgespräch zur systemischen Aufstellungsarbeit oder Familienaufstellung. Per Telefon, E-Mail oder WhatsApp." },
    en: { title: "Contact – Systemic Constellation Freiburg | Jona Fels", description: "Contact Jona Fels in Freiburg for a free discovery call on systemic constellation or family constellation. Via phone, email or WhatsApp." },
  },
  "/blog": {
    de: { title: "Blog – Systemische Aufstellung & Aufstellung Freiburg | Jona Fels", description: "Artikel und Insights rund um Familienaufstellungen, systemische Prozessarbeit und persönliche Entwicklung – aus der Praxis in Freiburg." },
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
  "/agb": {
    de: { title: "AGB – Familienaufstellung Freiburg | Jona Fels", description: "Buchungs- und Stornierungsregeln für Aufstellungs- und Familienaufstellungs-Sitzungen bei Jona Fels in Freiburg." },
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
    const rawImage = image || "https://fels-coach.de/og-image.png";
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
    const pageKeywords = (meta as { keywords?: string }).keywords;
    if (pageKeywords) {
      updateMeta("keywords", pageKeywords);
    }
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

  }, [pathname, language, title, description, image, type]);

  return null;
};
