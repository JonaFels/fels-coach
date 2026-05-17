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
    title: "Systemisches Coaching & Familienaufstellung in Freiburg – Jona Fels",
    description: "Systemische Familienaufstellungen und Coaching in Freiburg. Löse unbewusste Muster und finde inneren Frieden mit Jona Fels.",
  },
  en: {
    title: "Systemic Coaching & Family Constellation in Freiburg – Jona Fels",
    description: "Systemic family constellations and coaching in Freiburg. Dissolve unconscious patterns and find inner peace with Jona Fels.",
  },
};

const pageMeta: Record<string, Record<string, { title: string; description: string }>> = {
  "/": {
    de: { title: "Familienaufstellung & Coaching Freiburg – toxische Familienmuster lösen | Jona Fels", description: "Familienaufstellung & systemisches Coaching in Freiburg. Befrei dich aus toxischen Familienmustern – für klare Grenzen, innere Standfestigkeit und einen freien Weg." },
    en: { title: "Family Constellation & Coaching Freiburg – release toxic family patterns | Jona Fels", description: "Family constellation & systemic coaching in Freiburg. Free yourself from toxic family patterns – for clear boundaries, inner steadiness and a free path." },
  },
  "/angebote": {
    de: { title: "Termine & Preise – Familienaufstellung Freiburg | Jona Fels", description: "Buche dein systemisches Coaching oder eine Familienaufstellung in Freiburg. Kennenlern-Session 55 €, Coaching mit Einzelaufstellung 95 € – inkl. kostenloser Erstgespräch." },
    en: { title: "Appointments & Prices – Family Constellation Freiburg | Jona Fels", description: "Book your systemic coaching or family constellation in Freiburg. Intro session €55, coaching with individual constellation €95 – free first call included." },
  },
  "/systemische-familienaufstellung-freiburg": {
    de: { title: "Familienaufstellung Einzelsitzung Freiburg – 1:1 mit Bodenankern", description: "Familienaufstellung als Einzelsitzung in Freiburg: 1:1 mit Bodenankern, geschützt und vertraulich – ohne Gruppe. Jetzt kostenloses Erstgespräch buchen." },
    en: { title: "Family Constellation 1:1 Session Freiburg | Jona Fels", description: "Family constellation as a 1:1 individual session in Freiburg with floor anchors – confidential, no group. Book your free intro now." },
  },
  "/impulse": {
    de: { title: "Impulse zur Familienaufstellung – Freiburg | Jona Fels", description: "Kostenlose Impulse rund um Familienaufstellung & systemisches Coaching: Erkenne unbewusste Familienmuster, finde zurück zu dir selbst und werde zum Fels in deinem Leben." },
    en: { title: "Impulses on Family Constellation – Freiburg | Jona Fels", description: "Free impulses on family constellation & systemic coaching: Recognise unconscious family patterns, find your way back to yourself and become the rock in your own life." },
  },
  "/ebook": {
    de: { title: "Impulse zur Familienaufstellung – Freiburg | Jona Fels", description: "Kostenlose Impulse rund um Familienaufstellung & systemisches Coaching: Erkenne unbewusste Familienmuster, finde zurück zu dir selbst und werde zum Fels in deinem Leben." },
    en: { title: "Impulses on Family Constellation – Freiburg | Jona Fels", description: "Free impulses on family constellation & systemic coaching: Recognise unconscious family patterns, find your way back to yourself and become the rock in your own life." },
  },
  "/ueber-mich": {
    de: { title: "Über mich – Jona Fels, Systemischer Coach & Familienaufsteller in Freiburg", description: "Lerne Jona Fels kennen: systemischer Coach und Familienaufsteller in Freiburg. Erfahre, wie ich meine eigenen Muster durchbrochen habe – und dich auf deinem Weg begleite." },
    en: { title: "About Me – Jona Fels, Systemic Coach & Family Constellator in Freiburg", description: "Get to know Jona Fels: systemic coach and family constellator in Freiburg. Learn how I broke through my own patterns – and how I'll accompany you on your path." },
  },
  "/kontakt": {
    de: { title: "Kontakt – Familienaufstellung & Coaching Freiburg | Jona Fels", description: "Kontaktiere Jona Fels in Freiburg für ein kostenloses Erstgespräch zur Familienaufstellung oder zum systemischen Coaching. Per Telefon, E-Mail oder Telegram." },
    en: { title: "Contact – Family Constellation & Coaching Freiburg | Jona Fels", description: "Contact Jona Fels in Freiburg for a free initial consultation on family constellation or systemic coaching. Via phone, email or Telegram." },
  },
  "/blog": {
    de: { title: "Blog – Familienaufstellung & systemisches Coaching Freiburg | Jona Fels", description: "Artikel und Insights rund um Familienaufstellung, systemisches Coaching und persönliche Entwicklung – aus der Praxis in Freiburg." },
    en: { title: "Blog – Family Constellation & Systemic Coaching Freiburg | Jona Fels", description: "Articles and insights on family constellation, systemic coaching and personal growth – from the practice in Freiburg." },
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
