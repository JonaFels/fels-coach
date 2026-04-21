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
  fr: {
    title: "Coaching Systémique & Constellation Familiale à Freiburg – Jona Fels",
    description: "Constellations familiales systémiques et coaching à Freiburg. Dissolvez les schémas inconscients avec Jona Fels.",
  },
};

const pageMeta: Record<string, Record<string, { title: string; description: string }>> = {
  "/": {
    de: { title: "Systemische Familienaufstellung & Coaching Freiburg | Jona Fels", description: "Systemische Familienaufstellung in Freiburg. ✓ Unbewusste Blockaden lösen ✓ Klarheit gewinnen ✓ Diskrete Einzelsitzungen mit Jona Fels." },
    en: { title: "Systemic Family Constellation & Coaching Freiburg | Jona Fels", description: "Systemic family constellation in Freiburg. ✓ Dissolve unconscious blockages ✓ Gain clarity ✓ Discreet 1:1 sessions with Jona Fels." },
    fr: { title: "Constellation Familiale & Coaching Systémique Freiburg | Jona Fels", description: "Constellation familiale systémique à Freiburg. ✓ Dissoudre les blocages inconscients ✓ Gagner en clarté ✓ Séances individuelles discrètes." },
  },
  "/angebote": {
    de: { title: "Angebote & Termine in Freiburg – Jona Fels", description: "Buche dein systemisches Coaching: Kennenlern-Session oder tiefgreifende Familienaufstellung in Freiburg." },
    en: { title: "Offers & Appointments in Freiburg – Jona Fels", description: "Book your systemic coaching: Introduction session or deep family constellation in Freiburg." },
    fr: { title: "Offres & Rendez-vous à Freiburg – Jona Fels", description: "Réservez votre coaching systémique : séance découverte ou constellation familiale approfondie." },
  },
  "/systemische-familienaufstellung-freiburg": {
    de: { title: "Einzelsitzungen: Familienaufstellung mit Bodenankern | Jona Fels", description: "Erfahre, wie eine Familienaufstellung im geschützten Einzelsetting funktioniert. Mit Bodenankern familiäre Verstrickungen lösen und neue Wege finden." },
    en: { title: "Individual Sessions: Family Constellation with Floor Anchors | Jona Fels", description: "Discover how a family constellation works in a protected 1:1 setting. Use floor anchors to dissolve family entanglements and find new paths." },
    fr: { title: "Séances Individuelles : Constellation Familiale avec Ancres au Sol | Jona Fels", description: "Découvrez comment une constellation familiale fonctionne en cadre individuel protégé. Avec des ancres au sol pour dénouer les enchevêtrements familiaux." },
  },
  "/ebook": {
    de: { title: "E-Book: Systemische Familienaufstellung verstehen | Jona Fels", description: "Hole dir mein E-Book zur systemischen Arbeit. ✓ Praxisnahe Impulse ✓ Verstrickungen erkennen ✓ Jetzt herunterladen und den ersten Schritt machen." },
    en: { title: "E-Book: Understanding Systemic Family Constellation | Jona Fels", description: "Get my e-book on systemic work. ✓ Practical impulses ✓ Recognise entanglements ✓ Download now and take the first step." },
    fr: { title: "E-Book : Comprendre la Constellation Familiale Systémique | Jona Fels", description: "Obtenez mon e-book sur le travail systémique. ✓ Impulsions pratiques ✓ Reconnaître les enchevêtrements ✓ Téléchargez maintenant." },
  },
  "/ueber-mich": {
    de: { title: "Über mich: Dein systemischer Coach in Freiburg | Jona Fels", description: "Lerne Jona Fels kennen. Erfahre mehr über meine Philosophie, meine Erfahrung und wie ich dir als systemischer Coach in Freiburg zur Seite stehe." },
    en: { title: "About Me: Your Systemic Coach in Freiburg | Jona Fels", description: "Get to know Jona Fels. Learn more about my philosophy, my experience and how I can support you as a systemic coach in Freiburg." },
    fr: { title: "À propos : Votre Coach Systémique à Freiburg | Jona Fels", description: "Faites connaissance avec Jona Fels. Découvrez ma philosophie, mon expérience et comment je vous accompagne en tant que coach systémique à Freiburg." },
  },
  "/kontakt": {
    de: { title: "Kontakt – Systemisches Coaching Freiburg – Jona Fels", description: "Kontaktiere Jona Fels für ein kostenloses Erstgespräch. Erreichbar per E-Mail, WhatsApp oder Telegram." },
    en: { title: "Contact – Systemic Coaching Freiburg – Jona Fels", description: "Contact Jona Fels for a free initial consultation. Reachable via email, WhatsApp or Telegram." },
    fr: { title: "Contact – Coaching Systémique Freiburg – Jona Fels", description: "Contactez Jona Fels pour une première consultation gratuite. Joignable par e-mail, WhatsApp ou Telegram." },
  },
  "/blog": {
    de: { title: "Blog – Systemisches Coaching & Familienaufstellung – Jona Fels", description: "Artikel und Insights zu Familienaufstellungen, systemischem Coaching und persönlicher Entwicklung." },
    en: { title: "Blog – Systemic Coaching & Family Constellation – Jona Fels", description: "Articles and insights on family constellations, systemic coaching and personal development." },
    fr: { title: "Blog – Coaching Systémique & Constellations – Jona Fels", description: "Articles sur les constellations familiales, le coaching systémique et le développement personnel." },
  },
  "/datenschutz": {
    de: { title: "Datenschutz – Systemisches Coaching Freiburg – Jona Fels", description: "Datenschutzerklärung gemäß DSGVO für die Website von Jona Fels Coaching." },
    en: { title: "Privacy Policy – Systemic Coaching Freiburg – Jona Fels", description: "Privacy policy according to GDPR for Jona Fels Coaching website." },
    fr: { title: "Confidentialité – Coaching Systémique Freiburg – Jona Fels", description: "Politique de confidentialité conforme au RGPD pour le site Jona Fels Coaching." },
  },
  "/impressum": {
    de: { title: "Impressum – Systemisches Coaching Freiburg – Jona Fels", description: "Impressum und rechtliche Angaben gemäß § 5 TMG für Jona Fels Coaching." },
    en: { title: "Imprint – Systemic Coaching Freiburg – Jona Fels", description: "Legal notice according to German law for Jona Fels Coaching." },
    fr: { title: "Mentions Légales – Coaching Systémique Freiburg – Jona Fels", description: "Mentions légales conformément à la loi allemande pour Jona Fels Coaching." },
  },
  "/agb": {
    de: { title: "AGB – Systemisches Coaching Freiburg – Jona Fels", description: "Buchungs- und Stornierungsregeln für Coaching-Sessions bei Jona Fels." },
    en: { title: "Terms – Systemic Coaching Freiburg – Jona Fels", description: "Booking and cancellation terms for coaching sessions with Jona Fels." },
    fr: { title: "CGV – Coaching Systémique Freiburg – Jona Fels", description: "Conditions de réservation et d'annulation pour les séances de coaching avec Jona Fels." },
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
