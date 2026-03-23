import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CoachingSection } from "@/components/CoachingSection";
import { AboutPreview } from "@/components/AboutPreview";
import { MethodSection } from "@/components/MethodSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { PraxisHeroBanner } from "@/components/PraxisHeroBanner";


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
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
