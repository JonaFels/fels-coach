import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

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
          <a href="/kontakt" className="hover:text-foreground transition-colors no-underline-effect">
            {t("footer.contact")}
          </a>
          <span className="hidden md:inline text-border">·</span>
          <a href="/angebote#anfahrt" className="hover:text-foreground transition-colors no-underline-effect">
            {t("nav.anfahrt")}
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
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-border/40 pt-4">
          <p className="text-center text-xs text-muted-foreground tracking-wide">
            © {currentYear} Systemisches Coaching & Familienaufstellung in Freiburg – Jona Fels. {t("footer.rights")}
          </p>
          <p className="text-center text-xs text-muted-foreground/70 mt-2">
            {language === "de" ? (
              <>
                Auch:{" "}
                <a
                  href="https://praxinode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-secondary underline underline-offset-2 decoration-secondary hover:decoration-2 hover:text-secondary/80 transition-colors"

                >
                  Praxinode
                </a>
                {" "}– Webseiten für Therapeuten & Coaches
              </>
            ) : (
              <>
                Also:{" "}
                <a
                  href="https://praxinode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-secondary underline underline-offset-2 decoration-secondary hover:decoration-2 hover:text-secondary/80 transition-colors"
                >
                  Praxinode
                </a>
                {" "}– Websites for therapists & coaches
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
