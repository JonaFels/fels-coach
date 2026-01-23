import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CoachingSection } from "@/components/CoachingSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { PageBackground } from "@/components/PageBackground";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageBackground className="py-0">
        <Hero />
        <CoachingSection />
      </PageBackground>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
