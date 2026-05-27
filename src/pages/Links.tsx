import { useErstgespraech } from "@/components/HashBookingTrigger";
import { User } from "lucide-react";

const Links = () => {
  const booking = useErstgespraech();

  return (
    <div className="min-h-screen flex flex-col items-center bg-background">
      <div className="w-full max-w-[500px] flex flex-col items-center px-4 flex-1">
        {/* Profilbild-Platzhalter */}
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mt-8 overflow-hidden">
          <User className="w-12 h-12 text-muted-foreground" aria-hidden="true" />
        </div>

        {/* Name + Titel */}
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Jona Fels
        </h1>
        <p className="text-base text-gray-700 mb-8 text-center">
          Systemisches Coaching & Familienaufstellung
        </p>

        {/* Link-Buttons */}
        <div className="flex flex-col gap-4 w-full">
          {/* Primary Action: Booking-Modal */}
          <button
            type="button"
            onClick={() => booking?.openErstgespraech()}
            className="w-full rounded-lg bg-primary text-primary-foreground font-semibold py-3.5 px-6 text-center hover:scale-[1.02] transition-transform shadow-sm"
          >
            📞 Kostenloses Erstgespräch buchen
          </button>

          {/* Secondary Action 1: Quiz */}
          <a
            href="/#rollencheck-quiz"
            className="w-full rounded-lg border-2 border-primary text-primary font-semibold py-3.5 px-6 text-center hover:scale-[1.02] transition-transform shadow-sm no-underline-effect"
          >
            🧭 Test: Was ist deine unbewusste Loyalität?
          </a>

          {/* Secondary Action 2: Homepage */}
          <a
            href="/"
            className="w-full rounded-lg border-2 border-primary text-primary font-semibold py-3.5 px-6 text-center hover:scale-[1.02] transition-transform shadow-sm no-underline-effect"
          >
            🌐 Mehr über meine Arbeit erfahren
          </a>
        </div>

        {/* Footer-Links */}
        <div className="mt-auto pb-8 pt-12 flex justify-center gap-4">
          <a
            href="/impressum"
            className="text-xs text-gray-500 hover:text-gray-700 no-underline-effect"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-xs text-gray-500 hover:text-gray-700 no-underline-effect"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
