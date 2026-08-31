import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook, Linkedin, Youtube, Users } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";
import { FooterDirections } from "@/components/FooterDirections";


export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-primary/[0.03] mt-12 md:mt-16" style={{ contentVisibility: "auto" }}>
      <FooterDirections />
      <div className="border-t border-border/50">
        <div className="container mx-auto px-5 max-w-5xl py-14 md:py-16 flex flex-col items-center gap-10">

          {/* Nav links */}
          <nav
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
            aria-label="Footer-Navigation"
          >
            <a href="/kontakt#anfahrt" className="hover:text-foreground transition-colors no-underline-effect">
              Anfahrt
            </a>
            <a href="/impressum" className="hover:text-foreground transition-colors no-underline-effect">
              {t("footer.imprint")}
            </a>
            <a href="/datenschutz" className="hover:text-foreground transition-colors no-underline-effect">
              {t("footer.privacy")}
            </a>
            <a href="/agb" className="hover:text-foreground transition-colors no-underline-effect">
              {t("footer.terms")}
            </a>
          </nav>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-3">
            {[
              { href: "https://www.instagram.com/jona.fels", label: "Instagram", Icon: Instagram },
              { href: "https://m.facebook.com/profile.php?id=61562014600393", label: "Facebook", Icon: Facebook },
              { href: "https://de.linkedin.com/in/jona-fels-coach", label: "LinkedIn", Icon: Linkedin },
              {
                href:
                  language === "en"
                    ? "https://www.youtube.com/channel/UC8HPUPoQKXvC10jNBec8paw"
                    : "https://www.youtube.com/@JonaFels",
                label: "YouTube",
                Icon: Youtube,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-muted/60 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 no-underline-effect"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Group offerings link */}
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

          {/* Divider + Copyright */}
          <div className="w-full border-t border-border/40 pt-8">
            <p className="text-center text-xs text-muted-foreground tracking-wide leading-relaxed">
              © {currentYear} Jona Fels – Systemische Aufstellungen, Freiburg. {t("footer.rights")}
            </p>
          </div>

        </div>
      </div>
    </footer>

    </footer>
  );
};
