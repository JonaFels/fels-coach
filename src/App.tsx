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
import Angebote from "./pages/Angebote";
import Familienaufstellung from "./pages/Familienaufstellung";

import Kontakt from "./pages/Kontakt";
import UeberMich from "./pages/UeberMich";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import AGB from "./pages/AGB";
import Links from "./pages/Links";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import Start from "./pages/Start";
import Appointment from "./pages/Appointment";
import ErstgespraechBeta from "./pages/ErstgespraechBeta";

import { ProtectedRoute } from "./components/admin/ProtectedRoute";

// Separate component for tracking (needs Router context)
const AppTracking = () => {
  useAppTracking();
  return null;
};

const App = () => (
  <CMSProvider>
    <LanguageProvider>
      <Toaster />
      <BrowserRouter>
        <AppTracking />
        <ScrollToTop />
        <ChatbaseWidget />
        <HashBookingTrigger>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/index" element={<Index />} />
              <Route path="/en" element={<Index />} />
              <Route path="/ablauf-preise" element={<Angebote />} />
              <Route path="/angebote" element={<Navigate to="/ablauf-preise" replace />} />
              <Route path="/systemische-familienaufstellung-freiburg" element={<Familienaufstellung />} />
              <Route path="/systemische-beratung-freiburg" element={<Navigate to="/systemische-familienaufstellung-freiburg" replace />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/ueber-mich" element={<UeberMich />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/agb" element={<AGB />} />
              <Route path="/links" element={<Links />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/termin" element={<Start />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/start" element={<Navigate to="/termin" replace />} />

              <Route path="/erstgespraech-beta" element={<ErstgespraechBeta />} />
              <Route path="/admin/login" element={<AdminLogin />} />

              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
          </Routes>
        </HashBookingTrigger>
      </BrowserRouter>
    </LanguageProvider>
  </CMSProvider>
);

export default App;
