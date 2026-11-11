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
import { hasTranslation, toEnglishPath } from "@/lib/i18nRoutes";

type PrerenderRoute = { path: string; language: Language; sitemap: boolean; priority: string; changefreq: string; lastmod?: string };

/** Deutsche Seiten; die englischen Entsprechungen werden unten automatisch ergänzt. */
const germanRoutes: Omit<PrerenderRoute, "language">[] = [
  { path: "/", sitemap: true, priority: "1.0", changefreq: "weekly" },
  { path: "/ablauf-preise", sitemap: true, priority: "0.9", changefreq: "monthly" },
  { path: "/systemische-familienaufstellung-freiburg", sitemap: true, priority: "0.9", changefreq: "monthly" },
  { path: "/ueber-mich", sitemap: true, priority: "0.7", changefreq: "monthly" },
  { path: "/kontakt", sitemap: true, priority: "0.7", changefreq: "monthly" },
  { path: "/blog", sitemap: true, priority: "0.7", changefreq: "weekly" },
  { path: "/impressum", sitemap: true, priority: "0.2", changefreq: "yearly" },
  { path: "/datenschutz", sitemap: true, priority: "0.2", changefreq: "yearly" },
  { path: "/agb", sitemap: true, priority: "0.2", changefreq: "yearly" },
  ...blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    sitemap: true,
    priority: "0.6",
    changefreq: "yearly",
    lastmod: p.publishedAt,
  })),
  // Nicht in Google (noindex), aber als echte Seite erreichbar:
  { path: "/termine", sitemap: false, priority: "0.1", changefreq: "yearly" },
  { path: "/links", sitemap: false, priority: "0.1", changefreq: "yearly" },
  { path: "/admin", sitemap: false, priority: "0.1", changefreq: "yearly" },
  { path: "/admin/login", sitemap: false, priority: "0.1", changefreq: "yearly" },
];

/** Alle Seiten, die als eigene HTML-Datei erzeugt werden (DE + EN). */
export const prerenderRoutes: PrerenderRoute[] = germanRoutes.flatMap((r) => {
  const de: PrerenderRoute = { ...r, language: "de" };
  if (!hasTranslation(r.path)) return [de];
  const enPath = toEnglishPath(r.path);
  // Rechtstexte auf Englisch: erreichbar, aber nicht in der Sitemap (noindex).
  const legal = ["/impressum", "/datenschutz", "/agb"].includes(r.path);
  return [de, { ...r, path: enPath, language: "en", sitemap: r.sitemap && !legal }];
});

export function render(url: string): { html: string; head: ResolvedHead | null } {
  ssrHead.current = null;
  const html = renderToString(
    <StaticRouter location={url}>
      <CMSProvider>
        <LanguageProvider>
          <AppRoutes />
        </LanguageProvider>
      </CMSProvider>
    </StaticRouter>,
  );
  return { html, head: ssrHead.current };
}
