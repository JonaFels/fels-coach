import { HeartHandshake, BookOpen, BadgeCheck, Users } from "lucide-react";
import portrait from "@/assets/jona-fels-systemisches-coaching.webp";

const Links = () => {


  return (
    <div className="min-h-screen w-full flex flex-col items-center px-5 py-10 bg-background">
      <div className="w-full max-w-[500px] flex flex-col items-center text-foreground">
        {/* Avatar */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[hsl(var(--fels-cream))] shadow-[var(--shadow-elevated)]">
            <img
              src={portrait}
              alt="Jona Fels – Systemischer Aufsteller in Freiburg"
              className="w-full h-full object-cover object-[center_18%]"
              loading="eager"
              decoding="async"
            />
          </div>
          <BadgeCheck
            className="absolute -bottom-1 -right-1 w-7 h-7 text-secondary bg-background rounded-full p-0.5 shadow-[var(--shadow-soft)]"
            aria-hidden="true"
          />
        </div>

        {/* Handle */}
        <h1 className="mt-4 text-lg font-semibold tracking-tight">@jona.fels</h1>
        <p className="text-sm text-muted-foreground text-center mt-1 max-w-[320px] leading-relaxed">
          Systemische Aufstellung & Familienaufstellung · Freiburg
        </p>


        {/* Link list — psychologischer Funnel */}
        <div className="flex flex-col gap-3 w-full mt-8">


          {/* 2. 1:1 Aufstellungsarbeit */}
          <a
            href="/"
            className="group w-full rounded-full bg-card text-foreground py-3.5 px-5 flex items-center gap-4 border border-border/60 shadow-[var(--shadow-soft)] hover:bg-card hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] active:scale-[0.99] transition-all duration-200 no-underline-effect"
          >
            <span className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-4 h-4 text-secondary" aria-hidden="true" />
            </span>
            <span className="flex-1 text-left leading-tight">
              <span className="block text-[14.5px] font-semibold">1:1 Aufstellungsarbeit in Freiburg</span>
              <span className="block text-[12px] text-muted-foreground">Systemische Aufstellung & Familienaufstellung</span>
            </span>
          </a>

          {/* 3. Gruppenformat */}
          <a
            href="https://fels-familienstellen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full rounded-full bg-card text-foreground py-3.5 px-5 flex items-center gap-4 border border-border/60 shadow-[var(--shadow-soft)] hover:bg-card hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] active:scale-[0.99] transition-all duration-200 no-underline-effect"
          >
            <span className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 text-secondary" aria-hidden="true" />
            </span>
            <span className="flex-1 text-left leading-tight">
              <span className="block text-[14.5px] font-semibold">Gruppen-Familienaufstellung</span>
              <span className="block text-[12px] text-muted-foreground">Termine und Infos auf fels-familienstellen.de</span>
            </span>
          </a>

          {/* 4. Blog */}
          <a
            href="/blog"
            className="group w-full rounded-full bg-card text-foreground py-3.5 px-5 flex items-center gap-4 border border-border/60 shadow-[var(--shadow-soft)] hover:bg-card hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)] active:scale-[0.99] transition-all duration-200 no-underline-effect"
          >
            <span className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4 text-secondary" aria-hidden="true" />
            </span>
            <span className="flex-1 text-left leading-tight">
              <span className="block text-[14.5px] font-semibold">Blog</span>
              <span className="block text-[12px] text-muted-foreground">Impulse zu Familie, Mustern & Wachstum</span>
            </span>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 mb-2 flex justify-center gap-4 text-[11px] text-muted-foreground">
          <a href="/impressum" className="hover:text-foreground no-underline-effect">Impressum</a>
          <span aria-hidden="true">·</span>
          <a href="/datenschutz" className="hover:text-foreground no-underline-effect">Datenschutz</a>
        </div>
        <p className="text-[10px] text-muted-foreground tracking-wider uppercase">fels-coach.de</p>
      </div>
    </div>
  );
};

export default Links;
