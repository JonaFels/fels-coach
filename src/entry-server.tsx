/**
 * Server-Einstieg nur für das Vorrendern beim Build (scripts/prerender.js).
 * Rendert jede Route zu fertigem HTML (Text + Meta-Daten), damit Google, Bing
 * und KI-Bots den Seiteninhalt direkt finden – ohne JavaScript auszuführen.
 */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { CMSProvider } from "@/contexts/CMSContext";
import { LanguageProvider, type Language } from "@/contexts/LanguageContext";
import { ssrHead, type ResolvedHead } from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";
import { AppRoutes } from "./App";

/** Alle Seiten, die als eigene HTML-Datei erzeugt werden. */
export const prerenderRoutes: { path: string; language: Language; sitemap: boolean; priority: string; changefreq: string; lastmod?: string }[] = [
  { path: "/", language: "de", sitemap: true, priority: "1.0", changefreq: "weekly" },
  { path: "/ablauf-preise", language: "de", sitemap: true, priority: "0.9", changefreq: "monthly" },
  { path: "/systemische-familienaufstellung-freiburg", language: "de", sitemap: true, priority: "0.9", changefreq: "monthly" },
  { path: "/ueber-mich", language: "de", sitemap: true, priority: "0.7", changefreq: "monthly" },
  { path: "/kontakt", language: "de", sitemap: true, priority: "0.7", changefreq: "monthly" },
  { path: "/blog", language: "de", sitemap: true, priority: "0.7", changefreq: "weekly" },
  { path: "/impressum", language: "de", sitemap: true, priority: "0.2", changefreq: "yearly" },
  { path: "/datenschutz", language: "de", sitemap: true, priority: "0.2", changefreq: "yearly" },
  { path: "/agb", language: "de", sitemap: true, priority: "0.2", changefreq: "yearly" },
  // Englische Startseite (Sprachumschalter):
  { path: "/en", language: "en", sitemap: true, priority: "0.4", changefreq: "monthly" },
  // Nicht in Google (noindex), aber als echte Seite erreichbar:
  { path: "/links", language: "de", sitemap: false, priority: "0.1", changefreq: "yearly" },
  { path: "/termine", language: "de", sitemap: false, priority: "0.1", changefreq: "yearly" },
  { path: "/appointment", language: "en", sitemap: false, priority: "0.1", changefreq: "yearly" },
  { path: "/admin", language: "de", sitemap: false, priority: "0.1", changefreq: "yearly" },
  { path: "/admin/login", language: "de", sitemap: false, priority: "0.1", changefreq: "yearly" },
  ...blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    language: "de" as Language,
    sitemap: true,
    priority: "0.6",
    changefreq: "yearly",
    lastmod: p.publishedAt,
  })),
];

export function render(url: string, language: Language = "de"): { html: string; head: ResolvedHead | null } {
  ssrHead.current = null;
  const html = renderToString(
    <CMSProvider>
      <LanguageProvider initialLanguage={language}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </LanguageProvider>
    </CMSProvider>,
  );
  return { html, head: ssrHead.current };
}
