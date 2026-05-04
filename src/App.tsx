import { lazy, Suspense } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CMSProvider } from "@/contexts/CMSContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HashBookingTrigger } from "@/components/HashBookingTrigger";

// Lazy: Toaster, Sonner und ChatbaseWidget sind nicht LCP-kritisch
const Toaster = lazy(() => import("@/components/ui/toaster").then((m) => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })));
const ChatbaseWidget = lazy(() => import("@/components/ChatbaseWidget").then((m) => ({ default: m.ChatbaseWidget })));


import { useAppTracking } from "@/hooks/useTracking";
// Eager: Startseite (LCP-kritisch) + 404
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy: alle übrigen Routen + Admin (nicht im kritischen Pfad) → kleinerer initialer Bundle
const Angebote = lazy(() => import("./pages/Angebote"));
const Familienaufstellung = lazy(() => import("./pages/Familienaufstellung"));
const Ebook = lazy(() => import("./pages/Ebook"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const UeberMich = lazy(() => import("./pages/UeberMich"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const Impressum = lazy(() => import("./pages/Impressum"));
const AGB = lazy(() => import("./pages/AGB"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const ProtectedRouteLazy = lazy(() =>
  import("./components/admin/ProtectedRoute").then((m) => ({ default: m.ProtectedRoute }))
);

const queryClient = new QueryClient();

// Separate component for tracking (needs Router context)
const AppTracking = () => {
  useAppTracking();
  return null;
};

// Minimaler Fallback (kein Layout-Shift, schnell sichtbar)
const RouteFallback = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CMSProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Suspense fallback={null}>
            <Toaster />
            <Sonner />
          </Suspense>
          <BrowserRouter>
            <AppTracking />
            <ScrollToTop />
            <Suspense fallback={null}>
              <ChatbaseWidget />
            </Suspense>
            <HashBookingTrigger>
              <Suspense fallback={<RouteFallback />}>
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
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route
                    path="/admin"
                    element={
                      <ProtectedRouteLazy>
                        <AdminDashboard />
                      </ProtectedRouteLazy>
                    }
                  />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </HashBookingTrigger>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </CMSProvider>
  </QueryClientProvider>
);

export default App;
