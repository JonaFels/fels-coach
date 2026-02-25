import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 py-12 md:py-16" style={{ contentVisibility: "auto" }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-serif text-base font-semibold text-foreground mb-2">
              Jona Fels
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Systemisches Coaching<br />in Freiburg &amp; online
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col items-center md:items-start gap-2 text-sm" aria-label="Footer-Navigation">
            <a href="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </a>
            <a href="/datenschutz" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.imprint")}
            </a>
            <a href="/agb" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.terms")}
            </a>
          </nav>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/jona.fels" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full bg-muted hover:bg-border transition-colors">
                <Instagram className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="https://m.facebook.com/profile.php?id=61562014600393" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full bg-muted hover:bg-border transition-colors">
                <Facebook className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="https://de.linkedin.com/in/jona-fels-coach" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full bg-muted hover:bg-border transition-colors">
                <Linkedin className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border/60 text-center">
          <p className="text-xs text-muted-foreground/70">
            © {currentYear} Jona Fels – Systemisches Coaching. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
