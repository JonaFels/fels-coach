import React, { createContext, useContext, useState, useCallback } from "react";
import { translations, Language } from "@/i18n/translations";
import { useCMS } from "@/contexts/CMSContext";

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getText } = useCMS();
  const [language, setLanguageState] = useState<Language>(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    if (urlLang === "en" || urlLang === "de") {
      localStorage.setItem("language", urlLang);
      return urlLang;
    }
    const saved = localStorage.getItem("language");
    return saved === "en" ? "en" : "de";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // Clean ?lang= from URL so it doesn't persist in the address bar
  React.useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.delete("lang");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

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
