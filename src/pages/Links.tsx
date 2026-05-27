import { useErstgespraech } from "@/components/HashBookingTrigger";
import { Calendar, Compass, Globe, Instagram, Linkedin } from "lucide-react";
import portrait from "@/assets/jona-fels-freigestellt.webp";

const Links = () => {
  const booking = useErstgespraech();

  return (
    <div className="min-h-screen flex flex-col items-center bg-background">
      {/* Subtile Brand-Atmosphäre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-accent/60 via-background to-background"
      />

      <div className="relative w-full max-w-[500px] flex flex-col items-center px-5 flex-1">
        {/* Portrait */}
        <div className="w-28 h-28 rounded-full bg-card mt-12 overflow-hidden ring-4 ring-card shadow-lg">
          <img
            src={portrait}
            alt="Jona Fels – Systemischer Coach in Freiburg"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Name + Titel */}
        <h1 className="font-serif text-3xl font-semibold text-foreground mt-5 tracking-tight">
          Jona Fels
        </h1>
        <p className="text-sm text-muted-foreground mt-1.5 text-center">
          Systemisches Coaching &amp; Familienaufstellung
        </p>
        <p className="text-xs text-muted-foreground/80 mt-1 text-center">
          Freiburg · in Präsenz
        </p>

        {/* Link-Buttons */}
        <div className="flex flex-col gap-3 w-full mt-10">
          {/* Primary: Erstgespräch */}
          <button
            type="button"
            onClick={() => booking?.openErstgespraech()}
            className="group w-full rounded-2xl bg-primary text-primary-foreground font-medium py-4 px-5 text-[15px] flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <Calendar className="w-[18px] h-[18px]" aria-hidden="true" />
            Kostenloses Erstgespräch buchen
          </button>

          {/* Secondary: Quiz */}
          <a
            href="/#rollencheck-quiz"
            className="group w-full rounded-2xl bg-card border border-border text-foreground font-medium py-4 px-5 text-[15px] flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 transition-all no-underline-effect"
          >
            <Compass className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
            Test: Was ist deine unbewusste Loyalität?
          </a>

          {/* Secondary: Homepage */}
          <a
            href="/"
            className="group w-full rounded-2xl bg-card border border-border text-foreground font-medium py-4 px-5 text-[15px] flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 transition-all no-underline-effect"
          >
            <Globe className="w-[18px] h-[18px] text-primary" aria-hidden="true" />
            Mehr über meine Arbeit erfahren
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mt-8">
          <a
            href="https://www.instagram.com/jona.fels/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors no-underline-effect"
          >
            <Instagram className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/jona-fels"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary/40 transition-colors no-underline-effect"
          >
            <Linkedin className="w-[18px] h-[18px]" />
          </a>
        </div>

        {/* Footer-Links */}
        <div className="mt-auto pb-8 pt-12 flex justify-center gap-4">
          <a
            href="/impressum"
            className="text-xs text-muted-foreground hover:text-foreground no-underline-effect"
          >
            Impressum
          </a>
          <span className="text-xs text-muted-foreground/50" aria-hidden="true">·</span>
          <a
            href="/datenschutz"
            className="text-xs text-muted-foreground hover:text-foreground no-underline-effect"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
