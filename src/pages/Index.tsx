import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { SEOHead } from "@/components/SEOHead";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import { SectionDivider } from "@/components/SectionDivider";

// Below-the-fold per Lazy-Chunk → kleinerer initialer Bundle
const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));
const CookieBanner = lazy(() => import("@/components/CookieBanner").then((m) => ({ default: m.CookieBanner })));
const JsonLd = lazy(() => import("@/components/JsonLd").then((m) => ({ default: m.JsonLd })));
const TestimonialsSection = lazy(() =>
  import("@/components/TestimonialsSection").then((m) => ({ default: m.TestimonialsSection })),
);
const MethodSection = lazy(() =>
  import("@/components/MethodSection").then((m) => ({ default: m.MethodSection })),
);
const FAQSection = lazy(() =>
  import("@/components/FAQSection").then((m) => ({ default: m.FAQSection })),
);
const RoleCheckQuiz = lazy(() =>
  import("@/components/RoleCheckQuiz").then((m) => ({ default: m.RoleCheckQuiz })),
);

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
        el.scrollIntoView({ behavior: "smooth", block: "start" });
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
        <div className="h-20 md:h-24" />
        <Suspense fallback={null}>
          <ScrollFadeIn>
            <section
              id="rollencheck-quiz"
              aria-labelledby="rollencheck-heading"
              className="py-32 md:py-40 bg-background"
            >
              <div className="container mx-auto px-4 max-w-4xl">
                <RoleCheckQuiz />
              </div>
            </section>
          </ScrollFadeIn>
        </Suspense>
        <div className="h-20 md:h-28" />
        <SectionDivider />
        <ScrollFadeIn>
          <AboutPreview />
        </ScrollFadeIn>
        <Suspense fallback={null}>
          <ScrollFadeIn>
            <TestimonialsSection />
          </ScrollFadeIn>
          <SectionDivider />
          <ScrollFadeIn>
            <MethodSection />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <FAQSection />
          </ScrollFadeIn>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <CookieBanner />
      </Suspense>
    </div>
  );
};

export default Index;
