import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Linkedin, Youtube, Users } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";


export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-primary/[0.03] mt-12 md:mt-16" style={{ contentVisibility: "auto" }}>
      <div className="container mx-auto px-4 max-w-5xl py-8 md:py-10">

        {/* Middle: Nav links */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-5"
          aria-label="Footer-Navigation"
        >
          <a href="/impressum" className="hover:text-foreground transition-colors no-underline-effect">
            {t("footer.imprint")}
          </a>
          <span className="hidden md:inline text-border">·</span>
          <a href="/datenschutz" className="hover:text-foreground transition-colors no-underline-effect">
            {t("footer.privacy")}
          </a>
          <span className="hidden md:inline text-border">·</span>
          <a href="/agb" className="hover:text-foreground transition-colors no-underline-effect">
            {t("footer.terms")}
          </a>
        </nav>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-5">
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
          <a
            href={language === "en" ? "https://www.youtube.com/channel/UC8HPUPoQKXvC10jNBec8paw" : "https://www.youtube.com/@JonaFels"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-9 h-9 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 no-underline-effect"
          >
            <Youtube className="h-4 w-4" />
          </a>
        </div>

        {/* Group offerings link */}
        <div className="mb-5 text-center">
          <a
            href="https://fels-familienstellen.de"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("fels_familienstellen", "footer", "external_link")}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors no-underline-effect"
          >
            <Users className="h-4 w-4" aria-hidden="true" />
            {t("group.footerLink")}
          </a>
        </div>

        {/* Divider + Copyright */}

        <div className="border-t border-border/40 pt-4">
          <p className="text-center text-xs text-muted-foreground tracking-wide">
            © {currentYear} Jona Fels – Systemische Aufstellung, Freiburg. {t("footer.rights")}
          </p>
        </div>

      </div>
    </footer>
  );
};
