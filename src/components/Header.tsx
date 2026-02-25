import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { trackLinkClick, trackNavToOffers } from "@/lib/tracking";
import logoIcon from "/favicon-96x96.png";

const NAV_ITEMS = [
  { key: "nav.familienaufstellung", href: "/systemische-familienaufstellung-freiburg" },
  { key: "nav.angebote", href: "/angebote" },
  { key: "nav.ebook", href: "/ebook" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.kontakt", href: "/kontakt" },
  { key: "nav.ueber", href: "/ueber-mich" },
];

export const Header = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (key: string, href: string) => {
    trackLinkClick(t(key), href, "header_navigation");
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-muted/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex-shrink-0 flex items-center gap-3 no-underline-effect">
            <img
              src={logoIcon}
              alt="Jona Fels"
              className="h-8 w-8 md:h-9 md:w-9 object-contain"
            />
            <span className="font-serif text-sm md:text-lg font-semibold text-foreground tracking-tight leading-none">
              Jona Fels – Systemisches Coaching
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => handleNavClick(item.key, item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              size="sm"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md"
              asChild
            >
              <a
                href="/kontakt"
                onClick={() => trackNavToOffers("header")}
              >
                <Phone className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                {t("nav.contact")}
              </a>
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
                onClick={() => {
                  handleNavClick(item.key, item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center justify-between px-2 pt-3 mt-2 border-t border-border">
              <LanguageSwitcher />
              <Button
                size="sm"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md"
                asChild
              >
                <a
                  href="/kontakt"
                  onClick={() => {
                    trackNavToOffers("header");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Phone className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                  {t("nav.contact")}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
