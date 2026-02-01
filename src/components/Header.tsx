import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "nav.coaching", href: "/" },
  { key: "nav.familienaufstellung", href: "/familienaufstellung" },
  { key: "nav.ebook", href: "/ebook" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.kontakt", href: "/kontakt" },
  { key: "nav.ueber", href: "/ueber-mich" },
];

export const Header = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/angebote" className="flex-shrink-0">
            <h1 className="font-serif text-lg md:text-xl font-semibold text-foreground tracking-tight">
              Systemische Familienaufstellungen
            </h1>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button asChild size="sm">
              <a href="/angebote">{t("nav.termin")}</a>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2 pt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center justify-between px-2 pt-3 mt-2 border-t border-border">
              <LanguageSwitcher />
              <Button asChild size="sm">
                <a href="/angebote" onClick={() => setIsMobileMenuOpen(false)}>
                  {t("nav.termin")}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
