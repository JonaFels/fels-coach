/**
 * Sitemap-Generator
 *
 * Liest alle statischen Routen + alle Blogposts aus src/data/blogPosts.ts
 * und schreibt eine vollständige sitemap.xml nach dist/sitemap.xml.
 *
 * Wird im GitHub-Actions-Build NACH `vite build` ausgeführt, sodass jeder
 * neue Blogpost beim nächsten Push automatisch in der Sitemap landet
 * – ohne manuelles Update.
 *
 * Verwendung: node scripts/generate-sitemap.js
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = "https://fels-coach.de";
const DIST_DIR = join(__dirname, "..", "dist");
const PUBLIC_DIR = join(__dirname, "..", "public");
const BLOG_DATA_FILE = join(__dirname, "..", "src", "data", "blogPosts.ts");

/** Statische Routen mit Priorität & Änderungshäufigkeit */
const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/angebote", changefreq: "weekly", priority: "0.9" },
  { path: "/systemische-familienaufstellung-freiburg", changefreq: "monthly", priority: "0.8" },
  { path: "/impulse", changefreq: "monthly", priority: "0.8" },
  { path: "/ueber-mich", changefreq: "monthly", priority: "0.7" },
  { path: "/kontakt", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/datenschutz", changefreq: "yearly", priority: "0.3" },
  { path: "/impressum", changefreq: "yearly", priority: "0.3" },
  { path: "/agb", changefreq: "yearly", priority: "0.3" },
];

/**
 * Extrahiert Blogposts (slug + publishedAt) direkt aus dem TS-File via Regex.
 * Vorteil: kein TS-Build nötig, keine Asset-Imports zu evaluieren.
 */
function extractBlogPosts() {
  if (!existsSync(BLOG_DATA_FILE)) {
    console.warn(`[sitemap] ${BLOG_DATA_FILE} nicht gefunden – überspringe Blog-URLs.`);
    return [];
  }
  const src = readFileSync(BLOG_DATA_FILE, "utf-8");
  const posts = [];
  // Match Block: { ... slug: "...", ... publishedAt: "YYYY-MM-DD", ... }
  const regex = /\{\s*[^}]*?slug:\s*["']([^"']+)["'][^}]*?publishedAt:\s*["']([^"']+)["'][^}]*?\}/gs;
  let m;
  while ((m = regex.exec(src)) !== null) {
    posts.push({ slug: m[1], publishedAt: m[2] });
  }
  return posts;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function buildSitemap() {
  const posts = extractBlogPosts();
  const now = today();

  const urls = [
    ...staticRoutes.map((r) => ({
      loc: `${SITE_URL}${r.path}`,
      lastmod: now,
      changefreq: r.changefreq,
      priority: r.priority,
    })),
    ...posts.map((p) => ({
      loc: `${SITE_URL}/blog/${p.slug}`,
      lastmod: p.publishedAt || now,
      changefreq: "monthly",
      priority: "0.6",
    })),
  ];

  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

const xml = buildSitemap();

// Ins Build-Output schreiben (überschreibt die statische Kopie)
if (existsSync(DIST_DIR)) {
  writeFileSync(join(DIST_DIR, "sitemap.xml"), xml, "utf-8");
  console.log(`[sitemap] dist/sitemap.xml geschrieben (${xml.split("<url>").length - 1} URLs).`);
}

// Auch in /public schreiben, damit `vite dev` & lokale Previews aktuell bleiben
if (existsSync(PUBLIC_DIR)) {
  writeFileSync(join(PUBLIC_DIR, "sitemap.xml"), xml, "utf-8");
  console.log(`[sitemap] public/sitemap.xml geschrieben.`);
}
