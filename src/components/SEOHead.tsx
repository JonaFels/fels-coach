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
    title: "Jona Fels | Systemisches Coaching",
    description: "Systemische Familienaufstellungen und Coaching in Freiburg. Löse unbewusste Muster und finde inneren Frieden mit Jona Fels.",
  },
  en: {
    title: "Jona Fels | Systemic Coaching",
    description: "Systemic family constellations and coaching in Freiburg. Dissolve unconscious patterns and find inner peace with Jona Fels.",
  },
  fr: {
    title: "Jona Fels | Coaching Systémique",
    description: "Constellations familiales systémiques et coaching à Freiburg. Dissolvez les schémas inconscients avec Jona Fels.",
  },
};

const pageMeta: Record<string, Record<string, { title: string; description: string }>> = {
  "/": {
    de: { title: "Jona Fels | Systemisches Coaching", description: "Entdecke verborgene Familiendynamiken und finde inneren Frieden. 1:1 Coaching mit systemischem Ansatz in Freiburg." },
    en: { title: "Jona Fels | Systemic Coaching", description: "Discover hidden family dynamics and find inner peace. 1:1 coaching with systemic approach in Freiburg." },
    fr: { title: "Jona Fels | Coaching Systémique", description: "Découvrez les dynamiques familiales cachées. Coaching 1:1 avec approche systémique à Freiburg." },
  },
  "/angebote": {
    de: { title: "Jona Fels | Angebote & Termine", description: "Buche dein systemisches Coaching: Kennenlern-Session oder tiefgreifende Familienaufstellung. Online-Terminbuchung." },
    en: { title: "Jona Fels | Offers & Appointments", description: "Book your systemic coaching: Introduction session or deep family constellation. Online appointment booking." },
    fr: { title: "Jona Fels | Offres de Coaching", description: "Réservez votre coaching systémique : séance découverte ou constellation familiale approfondie." },
  },
  "/systemische-familienaufstellung-freiburg": {
    de: { title: "Jona Fels | Familienaufstellung", description: "Erfahre, wie Familienaufstellungen unbewusste Dynamiken aufdecken. Ablauf, Nutzen und Methodik erklärt." },
    en: { title: "Jona Fels | Family Constellation", description: "Learn how family constellations uncover unconscious dynamics. Process, benefits and methodology explained." },
    fr: { title: "Jona Fels | Constellation Familiale", description: "Découvrez comment les constellations révèlent les dynamiques inconscientes." },
  },
  "/ebook": {
    de: { title: "Jona Fels | Kostenloses E-Book", description: "Lade das kostenlose E-Book herunter und starte deine persönliche Transformation. Lerne unbewusste Muster zu durchbrechen." },
    en: { title: "Jona Fels | Free E-Book", description: "Download the free e-book and start your personal transformation. Learn to break through unconscious patterns." },
    fr: { title: "Jona Fels | E-Book Gratuit", description: "Téléchargez l'e-book gratuit et commencez votre transformation personnelle." },
  },
  "/ueber-mich": {
    de: { title: "Jona Fels | Über mich", description: "Lerne Jona Fels kennen: Familienaufsteller i.A. und Coach. Präzise und mitfühlende Begleitung auf deinem Weg." },
    en: { title: "Jona Fels | About Me", description: "Meet Jona Fels: Family constellation facilitator in training and coach. Precise and compassionate guidance." },
    fr: { title: "Jona Fels | À propos", description: "Découvrez Jona Fels : Facilitateur en formation en constellations familiales. Accompagnement précis et bienveillant." },
  },
  "/kontakt": {
    de: { title: "Jona Fels | Kontakt", description: "Kontaktiere Jona Fels für ein kostenloses Erstgespräch. Erreichbar per E-Mail, WhatsApp oder Telegram." },
    en: { title: "Jona Fels | Contact", description: "Contact Jona Fels for a free initial consultation. Reachable via email, WhatsApp or Telegram." },
    fr: { title: "Jona Fels | Contact", description: "Contactez Jona Fels pour une première consultation gratuite. Joignable par e-mail, WhatsApp ou Telegram." },
  },
  "/blog": {
    de: { title: "Jona Fels | Blog", description: "Artikel und Insights zu Familienaufstellungen, systemischem Coaching und persönlicher Entwicklung." },
    en: { title: "Jona Fels | Blog", description: "Articles and insights on family constellations, systemic coaching and personal development." },
    fr: { title: "Jona Fels | Blog", description: "Articles sur les constellations familiales, le coaching systémique et le développement personnel." },
  },
  "/datenschutz": {
    de: { title: "Jona Fels | Datenschutz", description: "Datenschutzerklärung gemäß DSGVO für die Website von Jona Fels Coaching." },
    en: { title: "Jona Fels | Privacy Policy", description: "Privacy policy according to GDPR for Jona Fels Coaching website." },
    fr: { title: "Jona Fels | Confidentialité", description: "Politique de confidentialité conforme au RGPD pour le site Jona Fels Coaching." },
  },
  "/impressum": {
    de: { title: "Jona Fels | Impressum", description: "Impressum und rechtliche Angaben gemäß § 5 TMG für Jona Fels Coaching." },
    en: { title: "Jona Fels | Imprint", description: "Legal notice according to German law for Jona Fels Coaching." },
    fr: { title: "Jona Fels | Mentions Légales", description: "Mentions légales conformément à la loi allemande pour Jona Fels Coaching." },
  },
  "/agb": {
    de: { title: "Jona Fels | AGB", description: "Buchungs- und Stornierungsregeln für Coaching-Sessions bei Jona Fels." },
    en: { title: "Jona Fels | Terms", description: "Booking and cancellation terms for coaching sessions with Jona Fels." },
    fr: { title: "Jona Fels | CGV", description: "Conditions de réservation et d'annulation pour les séances de coaching avec Jona Fels." },
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
    const pageImage = image || "https://fels-coach.de/assets/og-image.jpg";
    const pageUrl = `https://www.fels-coach.de${pathname}`;

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
