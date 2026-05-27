import { useErstgespraech } from "@/components/HashBookingTrigger";
import { Compass, Globe, Phone } from "lucide-react";
import portrait from "@/assets/jona-fels-freigestellt.webp";

const Links = () => {
  const booking = useErstgespraech();

  return (
    <div className="min-h-screen flex flex-col items-center bg-background">
      <div className="w-full max-w-[480px] flex flex-col items-center px-5 flex-1">
        {/* Portrait */}
        <div className="w-24 h-24 rounded-full bg-card mt-10 overflow-hidden ring-4 ring-card shadow-md">
          <img
            src={portrait}
            alt="Jona Fels – Systemischer Coach in Freiburg"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Name + Titel */}
        <h1 className="text-xl font-semibold text-gray-900 mt-4">
          Jona Fels
        </h1>
        <p className="text-sm text-gray-600 mb-10 text-center">
          Systemisches Coaching &amp; Familienaufstellung
        </p>

        {/* Link-Buttons */}
        <div className="flex flex-col gap-4 w-full">
          {/* Primary: Selbsttest */}
          <a
            href="/#rollencheck-quiz"
            className="w-full rounded-lg bg-primary text-primary-foreground font-medium py-3.5 px-5 text-[15px] flex items-center justify-center gap-2.5 hover:scale-[1.01] transition-transform duration-200 no-underline-effect"
          >
            <Compass className="w-[18px] h-[18px]" aria-hidden="true" />
            🧭 3-Minuten Selbsttest: Unbewusste Loyalitäten erkennen
          </a>

          {/* Secondary: Homepage */}
          <a
            href="/"
            className="w-full rounded-lg border border-primary/40 bg-card text-primary font-medium py-3.5 px-5 text-[15px] flex items-center justify-center gap-2.5 hover:scale-[1.01] transition-transform duration-200 no-underline-effect"
          >
            <Globe className="w-[18px] h-[18px]" aria-hidden="true" />
            🌐 Meine Arbeitsweise &amp; Philosophie
          </a>

          {/* Soft CTA: Erstgespräch */}
          <button
            type="button"
            onClick={() => booking?.openErstgespraech()}
            className="w-full rounded-lg bg-muted text-foreground font-medium py-3.5 px-5 text-[15px] flex items-center justify-center gap-2.5 hover:scale-[1.01] transition-transform duration-200"
          >
            <Phone className="w-[18px] h-[18px]" aria-hidden="true" />
            📞 Lass uns einfach mal reden (Kostenfreies Erstgespräch)
          </button>
        </div>

        {/* Footer-Links */}
        <div className="mt-auto pb-8 pt-12 flex justify-center gap-4">
          <a
            href="/impressum"
            className="text-xs text-gray-400 hover:text-gray-600 no-underline-effect"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-xs text-gray-400 hover:text-gray-600 no-underline-effect"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
