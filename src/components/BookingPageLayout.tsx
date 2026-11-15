import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { BookingModeSwitch } from "@/components/BookingModeSwitch";
import type { BookingEmbed } from "@/components/BookingOnsiteFirst";
import profilBild from "@/assets/jona-fels-systemisches-coaching.webp";

export interface BookingPageTexts {
  lang: "de" | "en";
  brand: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  trust: string;
  groupLabel: string;
  onsite: BookingEmbed;
  online: BookingEmbed;
  discoveryPrompt: string;
  discoveryLink: string;
  discoveryUrl: string;
  footer: string;
}

/** Gemeinsames Layout der versteckten Buchungsseiten /termine (DE) und /appointment (EN). */
export const BookingPageLayout = ({ t }: { t: BookingPageTexts }) => (
  <div className="min-h-screen bg-background" lang={t.lang}>
    <SEOHead />
    <header className="py-6 border-b border-border/40">
      <div className="container mx-auto px-4 max-w-3xl flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
        <img
          src={profilBild}
          alt="Jona Fels"
          className="shrink-0 w-10 h-10 rounded-full object-cover object-[center_18%]"
        />
        <span className="font-serif text-sm sm:text-base text-foreground leading-snug">{t.brand}</span>
        </div>

        <nav
          aria-label={t.lang === "de" ? "Sprache" : "Language"}
          className="shrink-0 flex items-center gap-1.5 text-sm font-medium"
        >
          {t.lang === "de" ? (
            <>
              <span className="text-foreground" aria-current="page">DE</span>
              <span className="text-muted-foreground/60">|</span>
              <Link to="/appointment" hrefLang="en" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">EN</Link>
            </>
          ) : (
            <>
              <Link to="/termine" hrefLang="de" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">DE</Link>
              <span className="text-muted-foreground/60">|</span>
              <span className="text-foreground" aria-current="page">EN</span>
            </>
          )}
        </nav>
      </div>
    </header>

    <main id="main-content">
      <section className="pt-16 pb-8 md:pt-28 md:pb-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-secondary mb-4">
            {t.eyebrow}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-4">
            {t.title}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-4">
            {t.subtitle}
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-foreground/80">
            <CheckCircle2 className="h-4 w-4 text-secondary" aria-hidden="true" />
            {t.trust}
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <BookingModeSwitch onsite={t.onsite} online={t.online} groupLabel={t.groupLabel} />
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <p className="text-sm text-muted-foreground mb-2">{t.discoveryPrompt}</p>
          <a
            href={t.discoveryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 decoration-secondary/60 hover:decoration-secondary"
          >
            <MessageCircle className="h-4 w-4 text-secondary" aria-hidden="true" />
            {t.discoveryLink}
          </a>
        </div>
      </section>
    </main>

    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {t.footer}
      </div>
    </footer>
  </div>
);
