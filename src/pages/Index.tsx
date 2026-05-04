import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { SEOHead } from "@/components/SEOHead";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";
import { LazyMount } from "@/components/LazyMount";

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
const FinalCTA = lazy(() =>
  import("@/components/FinalCTA").then((m) => ({ default: m.FinalCTA })),
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <JsonLd />
      <Header />
      <main id="main-content">
        <PraxisHeroBanner variant="sitzbereich" />
        <Hero />
        <ScrollFadeIn>
          <AboutPreview />
        </ScrollFadeIn>
        <Suspense fallback={null}>
          <LazyMount minHeight="400px">
            <ScrollFadeIn>
              <TestimonialsSection />
            </ScrollFadeIn>
          </LazyMount>
          <LazyMount minHeight="400px">
            <ScrollFadeIn>
              <MethodSection />
            </ScrollFadeIn>
          </LazyMount>
          <LazyMount minHeight="500px">
            <ScrollFadeIn>
              <FAQSection />
            </ScrollFadeIn>
          </LazyMount>
          <LazyMount minHeight="300px">
            <FinalCTA />
          </LazyMount>
        </Suspense>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
