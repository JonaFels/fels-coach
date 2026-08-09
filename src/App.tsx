import { Suspense } from "react";
import { lazyWithRetry } from "@/lib/lazyWithRetry";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CMSProvider } from "@/contexts/CMSContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HashBookingTrigger } from "@/components/HashBookingTrigger";
import { Toaster } from "@/components/ui/toaster";

// Eager-Import: vermeidet "Failed to fetch dynamically imported module" im Lovable-Preview
import { ChatbaseWidget } from "@/components/ChatbaseWidget";


import { useAppTracking } from "@/hooks/useTracking";
// Eager: Startseite (LCP-kritisch) + 404
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy: alle übrigen Routen + Admin (nicht im kritischen Pfad) → kleinerer initialer Bundle
const Angebote = lazyWithRetry(() => import("./pages/Angebote"));
const Familienaufstellung = lazyWithRetry(() => import("./pages/Familienaufstellung"));
const SystemischeBeratung = lazyWithRetry(() => import("./pages/SystemischeBeratung"));
const Kontakt = lazyWithRetry(() => import("./pages/Kontakt"));
const UeberMich = lazyWithRetry(() => import("./pages/UeberMich"));
const Datenschutz = lazyWithRetry(() => import("./pages/Datenschutz"));
const Impressum = lazyWithRetry(() => import("./pages/Impressum"));
const AGB = lazyWithRetry(() => import("./pages/AGB"));
const Links = lazyWithRetry(() => import("./pages/Links"));
const Blog = lazyWithRetry(() => import("./pages/Blog"));
const BlogPost = lazyWithRetry(() => import("./pages/BlogPost"));
const AdminLogin = lazyWithRetry(() => import("./pages/admin/Login"));
const AdminDashboard = lazyWithRetry(() => import("./pages/admin/Dashboard"));
const Start = lazyWithRetry(() => import("./pages/Start"));
const ErstgespraechBeta = lazyWithRetry(() => import("./pages/ErstgespraechBeta"));
const BookingLogin = lazyWithRetry(() => import("./pages/booking/Login"));
const BookingDashboard = lazyWithRetry(() => import("./pages/booking/Dashboard"));
const ProtectedRouteLazy = lazyWithRetry(() =>
  import("./components/admin/ProtectedRoute").then((m) => ({ default: m.ProtectedRoute }))
);

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
  <CMSProvider>
    <LanguageProvider>
      <Toaster />
      <BrowserRouter>
        <AppTracking />
        <ScrollToTop />
        <ChatbaseWidget />
        <HashBookingTrigger>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/index" element={<Index />} />
              <Route path="/en" element={<Index />} />
              <Route path="/ablauf-preise" element={<Angebote />} />
              <Route path="/angebote" element={<Navigate to="/ablauf-preise" replace />} />
              <Route path="/systemische-familienaufstellung-freiburg" element={<Familienaufstellung />} />
              <Route path="/systemische-beratung-freiburg" element={<SystemischeBeratung />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/ueber-mich" element={<UeberMich />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="/links" element={<Links />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/start" element={<Start />} />
              <Route path="/erstgespraech-beta" element={<ErstgespraechBeta />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/buchungen/login" element={<BookingLogin />} />
              <Route path="/buchungen" element={<BookingDashboard />} />

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
    </LanguageProvider>
  </CMSProvider>
);

export default App;
