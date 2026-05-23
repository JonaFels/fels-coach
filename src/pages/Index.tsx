import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { SEOHead } from "@/components/SEOHead";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";



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
const RoleCheckQuiz = lazy(() =>
  import("@/components/RoleCheckQuiz").then((m) => ({ default: m.RoleCheckQuiz })),
);

const Index = () => {
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
        <Suspense fallback={null}>
          <ScrollFadeIn>
            <section
              id="rollencheck-quiz"
              aria-labelledby="rollencheck-heading"
              className="py-16 md:py-24 bg-background"
            >
              <div className="container mx-auto px-4 max-w-4xl">
                <RoleCheckQuiz />
              </div>
            </section>
          </ScrollFadeIn>
        </Suspense>
        <ScrollFadeIn>
          <AboutPreview />
        </ScrollFadeIn>
        <Suspense fallback={null}>
          <ScrollFadeIn>
            <TestimonialsSection />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <MethodSection />
          </ScrollFadeIn>
          <ScrollFadeIn>
            <FAQSection />
          </ScrollFadeIn>
          <FinalCTA />
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
