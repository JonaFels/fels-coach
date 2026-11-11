import React, { createContext, useContext, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { languageFromPath, localizePath } from "@/lib/i18nRoutes";
import { translations, Language } from "@/i18n/translations";
import { useCMS } from "@/contexts/CMSContext";

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  /** Internen Link in die aktuelle Sprache übersetzen, z. B. "/kontakt" → "/en/contact". */
  localize: (href: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getText } = useCMS();
  const location = useLocation();
  const navigate = useNavigate();

  // Die Sprache ergibt sich aus der Adresse: /en/... = Englisch, sonst Deutsch.
  const language: Language = languageFromPath(location.pathname);

  // Umschalten = zur Entsprechung in der anderen Sprache wechseln (Anker bleibt erhalten).
  const setLanguage = useCallback(
    (lang: Language) => {
      if (lang === language) return;
      navigate(localizePath(location.pathname, lang) + location.hash);
    },
    [language, location.pathname, location.hash, navigate],
  );

  const localize = useCallback((href: string) => localizePath(href, language), [language]);

  // Alte Links mit ?lang=en / ?lang=de auf die passende Adresse umleiten.
  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlLang = params.get("lang");
    if (urlLang !== "en" && urlLang !== "de") return;
    params.delete("lang");
    const qs = params.toString();
    navigate(localizePath(location.pathname, urlLang) + (qs ? `?${qs}` : "") + location.hash, { replace: true });
  }, [location.search, location.pathname, location.hash, navigate]);

  const t = useCallback(
    (key: string): string => {
      // CMS-Override gilt nur für Deutsch (siehe Plan: nur DE)
      if (language === "de") {
        const override = getText(key);
        if (override !== undefined) return override;
      }
      const translation = translations[key];
      if (!translation) {
        console.warn(`Missing translation for key: ${key}`);
        return key;
      }
      return translation[language];
    },
    [language, getText]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, localize }}>
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
