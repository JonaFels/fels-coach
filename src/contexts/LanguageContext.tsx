import React, { createContext, useContext, useState, useCallback } from "react";

export type Language = "de" | "en" | "fr";

type Translations = {
  [key: string]: {
    de: string;
    en: string;
    fr: string;
  };
};

const translations: Translations = {
  // Navigation
  "nav.coaching": {
    de: "Coaching",
    en: "Coaching",
    fr: "Coaching",
  },
  "nav.familienaufstellung": {
    de: "Familienaufstellung",
    en: "Family Constellation",
    fr: "Constellation Familiale",
  },
  "nav.ebook": {
    de: "E-Book",
    en: "E-Book",
    fr: "E-Book",
  },
  "nav.kontakt": {
    de: "Kontakt",
    en: "Contact",
    fr: "Contact",
  },
  "nav.ueber": {
    de: "Über mich",
    en: "About me",
    fr: "À propos",
  },
  "nav.termin": {
    de: "Termin ausmachen",
    en: "Book Appointment",
    fr: "Prendre RDV",
  },

  // Hero Section
  "hero.title": {
    de: "Systemische Familienaufstellungen",
    en: "Systemic Family Constellations",
    fr: "Constellations Familiales Systémiques",
  },
  "hero.subtitle": {
    de: "Entdecke die verborgenen Dynamiken deiner Familie und finde deinen Weg zu innerem Frieden",
    en: "Discover the hidden dynamics of your family and find your path to inner peace",
    fr: "Découvrez les dynamiques cachées de votre famille et trouvez votre chemin vers la paix intérieure",
  },
  "hero.cta": {
    de: "Jetzt Termin buchen",
    en: "Book Now",
    fr: "Réserver maintenant",
  },

  // Offerings Section
  "offerings.title": {
    de: "Buchungsoptionen",
    en: "Booking Options",
    fr: "Options de réservation",
  },
  "offerings.kennenlernen.title": {
    de: "Kennenlernen",
    en: "Get to Know",
    fr: "Découverte",
  },
  "offerings.kennenlernen.desc": {
    de: "Ein erstes Gespräch zum gegenseitigen Kennenlernen",
    en: "A first conversation to get to know each other",
    fr: "Une première conversation pour faire connaissance",
  },
  "offerings.coaching.title": {
    de: "Systemisches Coaching",
    en: "Systemic Coaching",
    fr: "Coaching Systémique",
  },
  "offerings.coaching.desc": {
    de: "Einzelsitzung für tiefgreifende Veränderung",
    en: "Individual session for profound change",
    fr: "Séance individuelle pour un changement profond",
  },
  "offerings.paket5.title": {
    de: "5er-Paket",
    en: "5-Session Package",
    fr: "Forfait 5 séances",
  },
  "offerings.paket5.desc": {
    de: "Fünf Sitzungen zum vergünstigten Preis",
    en: "Five sessions at a discounted price",
    fr: "Cinq séances à prix réduit",
  },
  "offerings.paket10.title": {
    de: "10er-Paket",
    en: "10-Session Package",
    fr: "Forfait 10 séances",
  },
  "offerings.paket10.desc": {
    de: "Zehn Sitzungen für nachhaltige Transformation",
    en: "Ten sessions for lasting transformation",
    fr: "Dix séances pour une transformation durable",
  },
  "offerings.book": {
    de: "Termin buchen",
    en: "Book Session",
    fr: "Réserver",
  },
  "offerings.duration": {
    de: "Dauer",
    en: "Duration",
    fr: "Durée",
  },
  "offerings.minutes": {
    de: "Minuten",
    en: "minutes",
    fr: "minutes",
  },

  // Cookie Banner
  "cookie.title": {
    de: "Cookie-Einstellungen",
    en: "Cookie Settings",
    fr: "Paramètres des cookies",
  },
  "cookie.text": {
    de: "Wir nutzen Cookies, um deine Erfahrung zu verbessern.",
    en: "We use cookies to improve your experience.",
    fr: "Nous utilisons des cookies pour améliorer votre expérience.",
  },
  "cookie.accept": {
    de: "Alle annehmen",
    en: "Accept All",
    fr: "Tout accepter",
  },
  "cookie.reject": {
    de: "Ablehnen",
    en: "Reject",
    fr: "Refuser",
  },
  "cookie.settings": {
    de: "Einstellungen",
    en: "Settings",
    fr: "Paramètres",
  },
  "cookie.necessary": {
    de: "Notwendige Cookies",
    en: "Necessary Cookies",
    fr: "Cookies nécessaires",
  },
  "cookie.necessary.desc": {
    de: "Diese Cookies sind für die Grundfunktionen der Website erforderlich.",
    en: "These cookies are required for basic website functionality.",
    fr: "Ces cookies sont nécessaires au fonctionnement de base du site.",
  },
  "cookie.analytics": {
    de: "Google Analytics",
    en: "Google Analytics",
    fr: "Google Analytics",
  },
  "cookie.analytics.desc": {
    de: "Hilft uns zu verstehen, wie Besucher die Website nutzen.",
    en: "Helps us understand how visitors use the website.",
    fr: "Nous aide à comprendre comment les visiteurs utilisent le site.",
  },
  "cookie.save": {
    de: "Einstellungen speichern",
    en: "Save Settings",
    fr: "Enregistrer",
  },

  // Footer
  "footer.rights": {
    de: "Alle Rechte vorbehalten",
    en: "All rights reserved",
    fr: "Tous droits réservés",
  },
  "footer.privacy": {
    de: "Datenschutz",
    en: "Privacy Policy",
    fr: "Politique de confidentialité",
  },
  "footer.imprint": {
    de: "Impressum",
    en: "Imprint",
    fr: "Mentions légales",
  },
  "footer.terms": {
    de: "AGB",
    en: "Terms",
    fr: "CGV",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("de");

  const t = useCallback(
    (key: string): string => {
      const translation = translations[key];
      if (!translation) {
        console.warn(`Missing translation for key: ${key}`);
        return key;
      }
      return translation[language];
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
