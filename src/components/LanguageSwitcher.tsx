import { useLanguage, Language } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const languages: { code: Language; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "text-sm font-medium transition-colors px-1",
              language === lang.code
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-muted-foreground/50 mx-0.5">|</span>
          )}
        </span>
      ))}
    </div>
  );
};
