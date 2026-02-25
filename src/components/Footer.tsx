import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Linkedin } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-primary/[0.03] mt-12 md:mt-16" style={{ contentVisibility: "auto" }}>
      <div className="container mx-auto px-4 max-w-5xl py-10 md:py-14">
        {/* Top: Brand centered */}
        <div className="text-center mb-8">
          <p className="font-serif text-lg font-semibold text-foreground tracking-tight">
            Jona Fels – Systemisches Coaching & Familienaufstellungen
          </p>
        </div>

        {/* Middle: Nav links */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-8"
          aria-label="Footer-Navigation"
        >
          <a href="/kontakt" className="hover:text-foreground transition-colors no-underline-effect">
            Kontakt
          </a>
          <span className="hidden md:inline text-border">·</span>
          <a href="/datenschutz" className="hover:text-foreground transition-colors no-underline-effect">
            {t("footer.privacy")}
          </a>
          <span className="hidden md:inline text-border">·</span>
          <a href="/impressum" className="hover:text-foreground transition-colors no-underline-effect">
            {t("footer.imprint")}
          </a>
          <span className="hidden md:inline text-border">·</span>
          <a href="/agb" className="hover:text-foreground transition-colors no-underline-effect">
            {t("footer.terms")}
          </a>
        </nav>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/jona.fels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 no-underline-effect"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://m.facebook.com/profile.php?id=61562014600393"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 no-underline-effect"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://de.linkedin.com/in/jona-fels-coach"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 no-underline-effect"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-border/40 pt-5">
          <p className="text-center text-[11px] text-muted-foreground/50 tracking-wide">
            © {currentYear} Jona Fels – Systemisches Coaching. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
