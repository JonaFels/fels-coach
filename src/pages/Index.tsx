import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { SEOHead } from "@/components/SEOHead";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import { SectionDivider } from "@/components/SectionDivider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MethodSection } from "@/components/MethodSection";
import { FAQSection } from "@/components/FAQSection";
import { RoleCheckQuiz } from "@/components/RoleCheckQuiz";
import { YouTubeIntro } from "@/components/YouTubeIntro";
import { CoachingPainPoints } from "@/components/CoachingPainPoints";
import { OfferingsCards } from "@/components/OfferingsCards";

// Below-the-fold per Lazy-Chunk → kleinerer initialer Bundle
const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));
const CookieBanner = lazy(() => import("@/components/CookieBanner").then((m) => ({ default: m.CookieBanner })));
const JsonLd = lazy(() => import("@/components/JsonLd").then((m) => ({ default: m.JsonLd })));
const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    let cancelled = false;
    let attempts = 0;
    const tryScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "center" });
        return;
      }
      if (attempts++ < 40) {
        window.setTimeout(tryScroll, 100);
      }
    };
    tryScroll();
    return () => {
      cancelled = true;
    };
  }, [hash]);

  return (
    <div className="min-h-screen flex flex-col">

      <SEOHead />
      <Suspense fallback={null}>
        <JsonLd />
      </Suspense>
      <Header />
      <main id="main-content">
        <PraxisHeroBanner variant="sitzbereich" />
        <Hero />
        <YouTubeIntro videoId="uzgmW4lzsqk" />
        <OfferingsCards />
        <CoachingPainPoints />
        <section
          id="rollencheck-quiz"
          aria-labelledby="rollencheck-heading"
          className="relative py-40 md:py-52 overflow-hidden isolate"
        >
          {/* Layered editorial background — matches site palette (lavender/plum) */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--accent) / 0.55) 0%, transparent 65%), radial-gradient(ellipse 70% 55% at 50% 100%, hsl(var(--fels-sage-gray) / 0.6) 0%, transparent 65%), linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--muted) / 0.7) 50%, hsl(var(--card)) 100%)",
            }}
          />
          {/* Subtle paper grain for warmth */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-[0.5] mix-blend-multiply"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          {/* Hairline rules top & bottom for editorial frame */}
          <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(90%,40rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(90%,40rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="container mx-auto px-4 max-w-4xl relative">
            <RoleCheckQuiz />
          </div>
        </section>
        <div className="h-20 md:h-28" />
        <SectionDivider />
        <AboutPreview />
        <TestimonialsSection />
        <SectionDivider />
        <MethodSection />
        <FAQSection />
      </main>
      <Suspense fallback={null}>
        <Footer />
        <CookieBanner />
      </Suspense>
    </div>
  );
};

export default Index;
