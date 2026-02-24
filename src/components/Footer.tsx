import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Jona Fels – Systemisches Coaching. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <a href="/datenschutz" className="hover:text-foreground transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="/impressum" className="hover:text-foreground transition-colors">
                {t("footer.imprint")}
              </a>
              <a href="/agb" className="hover:text-foreground transition-colors">
                {t("footer.terms")}
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/jonafels_coaching" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61575071498991" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/jona-fels" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
