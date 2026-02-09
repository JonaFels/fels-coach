import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ChatbaseWidget } from "@/components/ChatbaseWidget";
import { useAppTracking } from "@/hooks/useTracking";
import Index from "./pages/Index";
import Angebote from "./pages/Angebote";
import Familienaufstellung from "./pages/Familienaufstellung";
import Ebook from "./pages/Ebook";
import Kontakt from "./pages/Kontakt";
import UeberMich from "./pages/UeberMich";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Separate component for tracking (needs Router context)
const AppTracking = () => {
  useAppTracking();
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppTracking />
          <ScrollToTop />
          <ChatbaseWidget />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/angebote" element={<Angebote />} />
            <Route path="/systemische-familienaufstellung-freiburg" element={<Familienaufstellung />} />
            <Route path="/ebook" element={<Ebook />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
