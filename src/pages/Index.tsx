import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CoachingSection } from "@/components/CoachingSection";
import { AboutPreview } from "@/components/AboutPreview";
import { MethodSection } from "@/components/MethodSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <JsonLd />
      <Header />
      <main id="main-content">
        {/* 1. Hero: Was bietest du an? */}
        <Hero />
        {/* 2. Pain Point: Gummiband-Effekt */}
        <CoachingSection />
        {/* 3. Die Story: Warum du das verstehst */}
        <AboutPreview />
        {/* 4. Die Methode: System-Audit / Aufstellung */}
        <MethodSection />
        {/* 5. FAQ: Ablauf, Preise, Standort */}
        <FAQSection />
        {/* 6. Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
