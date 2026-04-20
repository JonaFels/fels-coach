import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1 flex items-center justify-center bg-muted/30 py-16">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-serif font-semibold text-primary/20">
              404
            </span>
          </div>
          <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            {t("notFound.title")}
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {t("notFound.text")}
          </p>
          <Button asChild size="lg" className="min-h-[44px]">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              {t("notFound.backHome")}
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
