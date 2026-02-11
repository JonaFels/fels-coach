import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CoachingSection } from "@/components/CoachingSection";
import { TrustBadges } from "@/components/TrustBadges";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { SEOHead } from "@/components/SEOHead";
import { JsonLd } from "@/components/JsonLd";
import { QuickContactCTA } from "@/components/QuickContactCTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead />
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBadges />
        <CoachingSection />
        <QuickContactCTA />
        <FAQSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
