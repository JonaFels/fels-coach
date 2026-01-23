import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Offerings } from "@/components/Offerings";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Offerings />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
