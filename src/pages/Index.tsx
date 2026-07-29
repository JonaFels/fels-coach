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
import { YouTubeIntro } from "@/components/YouTubeIntro";
import { CoachingPainPoints } from "@/components/CoachingPainPoints";
import { OfferingsCards } from "@/components/OfferingsCards";
import { PraxisLocal } from "@/components/PraxisLocal";

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
        <SectionDivider />
        <YouTubeIntro videoId="uzgmW4lzsqk" />
        <OfferingsCards />
        <CoachingPainPoints />
        <SectionDivider />
        <AboutPreview />
        <PraxisLocal />
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
