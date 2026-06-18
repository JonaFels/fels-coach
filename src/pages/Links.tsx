import { useErstgespraech } from "@/components/HashBookingTrigger";
import { Compass, HeartHandshake, BookOpen, Phone, Instagram, Facebook, Linkedin, Youtube, BadgeCheck } from "lucide-react";
import portrait from "@/assets/jona-fels-systemisches-coaching.webp";

const linkButtons = [
  {
    href: "/#rollencheck-quiz",
    icon: Compass,
    label: "3-Minuten Selbsttest",
    sub: "Unbewusste Loyalitäten erkennen",
  },
  {
    href: "/",
    icon: HeartHandshake,
    label: "1:1 Coaching in Freiburg",
    sub: "Systemisches Coaching & Familienaufstellung",
  },
  {
    href: "/blog",
    icon: BookOpen,
    label: "Blog",
    sub: "Impulse zu Familie, Mustern & Wachstum",
  },
];

const socials = [
  { href: "https://www.instagram.com/jona.fels", icon: Instagram, label: "Instagram" },
  { href: "https://de.linkedin.com/in/jona-fels-coach", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@JonaFels", icon: Youtube, label: "YouTube" },
  { href: "https://m.facebook.com/profile.php?id=61562014600393", icon: Facebook, label: "Facebook" },
];

const Links = () => {
  const booking = useErstgespraech();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center px-5 py-10"
      style={{
        background:
          "linear-gradient(160deg, #2F4F4F 0%, #3d6464 35%, #6b8a7a 70%, #d9c9a8 100%)",
      }}
    >
      <div className="w-full max-w-[500px] flex flex-col items-center text-white">
        {/* Avatar */}
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/90 shadow-xl">
            <img
              src={portrait}
              alt="Jona Fels – Systemischer Coach in Freiburg"
              className="w-full h-full object-cover object-[center_18%]"
              loading="eager"
              decoding="async"
            />
          </div>
          <BadgeCheck
            className="absolute -bottom-1 -right-1 w-7 h-7 text-sky-300 bg-white rounded-full p-0.5 shadow"
            aria-hidden="true"
          />
        </div>

        {/* Handle */}
        <h1 className="mt-4 text-lg font-semibold tracking-tight">@jona.fels</h1>
        <p className="text-sm text-white/85 text-center mt-1 max-w-[320px] leading-relaxed">
          Systemisches Coaching & Familienaufstellung · Freiburg
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3 mt-5">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center hover:bg-white/25 hover:scale-110 transition-all duration-200 no-underline-effect"
            >
              <Icon className="w-4 h-4 text-white" />
            </a>
          ))}
        </div>

        {/* Link list — psychologischer Funnel */}
        <div className="flex flex-col gap-3 w-full mt-8">
          {/* 1. Selbsttest */}
          <a
            href="/#rollencheck-quiz"
            className="group w-full rounded-full bg-white/95 text-[#1f3535] py-3.5 px-5 flex items-center gap-4 shadow-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] transition-all duration-200 no-underline-effect"
          >
            <span className="w-9 h-9 rounded-full bg-[#2F4F4F]/10 flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4 text-[#2F4F4F]" aria-hidden="true" />
            </span>
            <span className="flex-1 text-left leading-tight">
              <span className="block text-[14.5px] font-semibold">3-Minuten Selbsttest</span>
              <span className="block text-[12px] text-[#1f3535]/60">Unbewusste Loyalitäten erkennen</span>
            </span>
          </a>

          {/* 2. 1:1 Coaching */}
          <a
            href="/"
            className="group w-full rounded-full bg-white/95 text-[#1f3535] py-3.5 px-5 flex items-center gap-4 shadow-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] transition-all duration-200 no-underline-effect"
          >
            <span className="w-9 h-9 rounded-full bg-[#2F4F4F]/10 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-4 h-4 text-[#2F4F4F]" aria-hidden="true" />
            </span>
            <span className="flex-1 text-left leading-tight">
              <span className="block text-[14.5px] font-semibold">1:1 Coaching in Freiburg</span>
              <span className="block text-[12px] text-[#1f3535]/60">Systemisches Coaching & Familienaufstellung</span>
            </span>
          </a>

          {/* 3. Primärer CTA — Erstgespräch (Akzent: warmes Sand/Gold) */}
          <button
            type="button"
            onClick={() => booking?.openErstgespraech()}
            className="group relative w-full rounded-full py-4 px-5 flex items-center justify-center gap-3 font-semibold text-[15px] text-[#1f3535] shadow-[0_8px_28px_-6px_rgba(217,201,168,0.65)] hover:shadow-[0_12px_36px_-6px_rgba(217,201,168,0.85)] hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 ring-1 ring-white/40"
            style={{
              background:
                "linear-gradient(135deg, #f3e6c4 0%, #e8d4a4 50%, #d9c9a8 100%)",
            }}
          >
            <span className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4 text-[#2F4F4F]" aria-hidden="true" />
            </span>
            <span>Kostenfreies Erstgespräch</span>
          </button>

          {/* 4. Blog */}
          <a
            href="/blog"
            className="group w-full rounded-full bg-white/95 text-[#1f3535] py-3.5 px-5 flex items-center gap-4 shadow-sm hover:bg-white hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] transition-all duration-200 no-underline-effect"
          >
            <span className="w-9 h-9 rounded-full bg-[#2F4F4F]/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4 text-[#2F4F4F]" aria-hidden="true" />
            </span>
            <span className="flex-1 text-left leading-tight">
              <span className="block text-[14.5px] font-semibold">Blog</span>
              <span className="block text-[12px] text-[#1f3535]/60">Impulse zu Familie, Mustern & Wachstum</span>
            </span>
          </a>
        </div>


        {/* Footer */}
        <div className="mt-12 mb-2 flex justify-center gap-4 text-[11px] text-white/70">
          <a href="/impressum" className="hover:text-white no-underline-effect">Impressum</a>
          <span aria-hidden="true">·</span>
          <a href="/datenschutz" className="hover:text-white no-underline-effect">Datenschutz</a>
        </div>
        <p className="text-[10px] text-white/50 tracking-wider uppercase">fels-coach.de</p>
      </div>
    </div>
  );
};

export default Links;
