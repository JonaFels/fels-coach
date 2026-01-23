import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold">
              Jona Fels
            </p>
            <p className="text-sm text-primary-foreground/70 mt-1">
              © {currentYear} {t("footer.rights")}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="/datenschutz"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="/impressum"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t("footer.imprint")}
            </a>
            <a
              href="/agb"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
