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
    de: { title: "Toxische Familienmuster lösen – Coaching Freiburg | Jona Fels", description: "Befrei dich aus toxischen, manipulativen Familienmustern. Systemisches Coaching & Familienaufstellung in Freiburg – für klare Grenzen und innere Standfestigkeit." },
    en: { title: "Free Yourself from Toxic Family Patterns – Coaching Freiburg | Jona Fels", description: "Free yourself from toxic, manipulative family patterns. Systemic coaching & family constellation in Freiburg – for clear boundaries and inner steadiness." },
  },
  "/angebote": {
    de: { title: "Angebote & Termine in Freiburg – Jona Fels", description: "Buche dein systemisches Coaching: Kennenlern-Session oder tiefgreifende Familienaufstellung in Freiburg." },
    en: { title: "Offers & Appointments in Freiburg – Jona Fels", description: "Book your systemic coaching: Introduction session or deep family constellation in Freiburg." },
  },
  "/systemische-familienaufstellung-freiburg": {
    de: { title: "Familienaufstellung in Freiburg: Einzelsitzungen | Jona Fels", description: "Systemisches Coaching & Familienaufstellung in Freiburg: Löse unbewusste Verstrickungen im diskreten 1:1 Setting. Jetzt 30 Min. Gratis-Vorgespräch!" },
    en: { title: "Family Constellation in Freiburg: 1:1 Sessions | Jona Fels", description: "Systemic coaching & family constellation in Freiburg: Dissolve unconscious entanglements in a discreet 1:1 setting. Free 30-min intro call now!" },
  },
  "/ebook": {
    de: { title: "Gratis E-Book: Warum du dich in alten Familienmustern verlierst", description: "Kostenloses E-Book (6 Seiten): Erkenne, wie vereinnahmende oder grenzüberschreitende Familienstrukturen wirken – und finde zurück zu dir selbst." },
    en: { title: "Free E-Book: Why You Lose Yourself in Old Family Patterns", description: "Free e-book (6 pages): Understand how engulfing or boundary-crossing family structures affect you – and find your way back to yourself." },
  },
  "/ueber-mich": {
    de: { title: "Über mich | Jona Fels – Systemischer Coach in Freiburg", description: "Lerne Jona Fels kennen. Erfahre, wie ich als zertifizierter Familiensteller meine eigenen Muster durchbrochen habe und dir helfe, dein wahres Selbst zu leben." },
    en: { title: "About Me | Jona Fels – Systemic Coach in Freiburg", description: "Get to know Jona Fels. Learn how I broke through my own patterns as a certified family constellator and help you live your true self." },
  },
  "/kontakt": {
    de: { title: "Kontakt – Systemisches Coaching Freiburg – Jona Fels", description: "Kontaktiere Jona Fels für ein kostenloses Erstgespräch. Erreichbar per E-Mail, WhatsApp oder Telegram." },
    en: { title: "Contact – Systemic Coaching Freiburg – Jona Fels", description: "Contact Jona Fels for a free initial consultation. Reachable via email, WhatsApp or Telegram." },
  },
  "/blog": {
    de: { title: "Blog – Systemisches Coaching & Familienaufstellung – Jona Fels", description: "Artikel und Insights zu Familienaufstellungen, systemischem Coaching und persönlicher Entwicklung." },
    en: { title: "Blog – Systemic Coaching & Family Constellation – Jona Fels", description: "Articles and insights on family constellations, systemic coaching and personal development." },
  },
  "/datenschutz": {
    de: { title: "Datenschutz – Systemisches Coaching Freiburg – Jona Fels", description: "Datenschutzerklärung gemäß DSGVO für die Website von Jona Fels Coaching." },
    en: { title: "Privacy Policy – Systemic Coaching Freiburg – Jona Fels", description: "Privacy policy according to GDPR for Jona Fels Coaching website." },
  },
  "/impressum": {
    de: { title: "Impressum – Systemisches Coaching Freiburg – Jona Fels", description: "Impressum und rechtliche Angaben gemäß § 5 TMG für Jona Fels Coaching." },
    en: { title: "Imprint – Systemic Coaching Freiburg – Jona Fels", description: "Legal notice according to German law for Jona Fels Coaching." },
  },
  "/agb": {
    de: { title: "AGB – Systemisches Coaching Freiburg – Jona Fels", description: "Buchungs- und Stornierungsregeln für Coaching-Sessions bei Jona Fels." },
    en: { title: "Terms – Systemic Coaching Freiburg – Jona Fels", description: "Booking and cancellation terms for coaching sessions with Jona Fels." },
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
    const pageImage = image || "https://fels-coach.de/og-image.webp";
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
