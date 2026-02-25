import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30 py-6 md:py-8" style={{ contentVisibility: "auto" }}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Top row: Brand + Links + Social inline */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="font-serif text-sm font-semibold text-foreground whitespace-nowrap">
            Jona Fels <span className="font-sans font-normal text-muted-foreground">· Systemisches Coaching</span>
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground" aria-label="Footer-Navigation">
            <a href="/kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
            <a href="/datenschutz" className="hover:text-foreground transition-colors">{t("footer.privacy")}</a>
            <a href="/impressum" className="hover:text-foreground transition-colors">{t("footer.imprint")}</a>
            <a href="/agb" className="hover:text-foreground transition-colors">{t("footer.terms")}</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/jona.fels" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://m.facebook.com/profile.php?id=61562014600393" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://de.linkedin.com/in/jona-fels-coach" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-4 pt-4 border-t border-border/40 text-center text-[11px] text-muted-foreground/60">
          © {currentYear} Jona Fels – Systemisches Coaching. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};
