import { useLanguage } from "@/contexts/LanguageContext";

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
          <nav className="flex items-center gap-6">
            <a
              href="/datenschutz"
              className="hover:text-foreground transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="/impressum"
              className="hover:text-foreground transition-colors"
            >
              {t("footer.imprint")}
            </a>
            <a
              href="/agb"
              className="hover:text-foreground transition-colors"
            >
              {t("footer.terms")}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
