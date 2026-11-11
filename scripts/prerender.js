/**
 * Vorrendern (Static Site Generation) – läuft automatisch bei `npm run build`.
 *
 * Für jede Route wird eine eigene HTML-Datei erzeugt (z. B. dist/kontakt.html),
 * die bereits enthält:
 *   - den kompletten sichtbaren Seitentext (gerendert aus denselben React-Komponenten)
 *   - Title, Description, Canonical, Open Graph, Twitter, robots, hreflang
 * Dadurch sehen Google, Bing und KI-Bots (ChatGPT, Perplexity, Claude) den Inhalt
 * sofort, ohne JavaScript ausführen zu müssen.
 *
 * Meta-Daten kommen aus src/components/SEOHead.tsx (eine Quelle für Browser + Build),
 * die Routenliste aus src/entry-server.tsx, Blogartikel aus src/data/blogPosts.ts.
 *
 * Außerdem: dist/404.html (echter 404-Status bei Cloudflare/GitHub Pages) und
 * dist/sitemap.xml.
 *
 * Fällt das Rendern einer Seite aus, wird sie trotzdem mit Meta-Daten erzeugt –
 * das Deployment bricht nicht ab.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://fels-coach.de";
const distDir = join(__dirname, "..", "dist");
const ssrEntry = join(__dirname, "..", "dist-ssr", "entry-server.js");
const templatePath = join(distDir, "index.html");

const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function setMeta(html, attr, name, content) {
  const re = new RegExp(`<meta ${attr}="${name.replace(/:/g, "\\:")}" content="[^"]*"\\s*\\/?>`);
  const tag = `<meta ${attr}="${name}" content="${esc(content)}" />`;
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `  ${tag}\n  </head>`);
}

function injectHead(html, head, path, language) {
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${language}"`);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(head.title)}</title>`);
  html = setMeta(html, "name", "description", head.description);
  html = setMeta(html, "name", "robots", head.noindex ? "noindex, follow" : "index, follow");
  html = setMeta(html, "property", "og:title", head.title);
  html = setMeta(html, "property", "og:description", head.description);
  html = setMeta(html, "property", "og:url", head.url);
  html = setMeta(html, "property", "og:type", head.type);
  html = setMeta(html, "property", "og:image", head.image);
  html = setMeta(html, "property", "og:locale", language === "en" ? "en_US" : "de_DE");
  html = setMeta(html, "name", "twitter:title", head.title);
  html = setMeta(html, "name", "twitter:description", head.description);
  html = setMeta(html, "name", "twitter:image", head.image);
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${head.url}" />`);

  // hreflang: verknüpft deutsche und englische Version derselben Seite.
  html = html.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>\s*/g, "");
  const alt = head.alternates;
  const tags =
    head.noindex || !alt
      ? ""
      : alt.en
        ? `<link rel="alternate" hreflang="de" href="${alt.de}" /><link rel="alternate" hreflang="en" href="${alt.en}" /><link rel="alternate" hreflang="x-default" href="${alt.de}" />`
        : `<link rel="alternate" hreflang="de" href="${alt.de}" /><link rel="alternate" hreflang="x-default" href="${alt.de}" />`;
  if (tags) html = html.replace("</head>", `${tags}\n  </head>`);
  return html;
}

function injectBody(html, body) {
  return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const minify = (html) =>
  html
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, "")
    .replace(/\n\s*\n/g, "\n")
    .trim();

function write(path, html) {
  // "/kontakt" → dist/kontakt.html: Cloudflare Pages und GitHub Pages liefern das
  // unter /kontakt aus (ohne Schrägstrich am Ende = passend zum Canonical).
  const out = path === "/" ? join(distDir, "index.html") : join(distDir, `${path.replace(/^\//, "")}.html`);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html, "utf-8");
}

function writeSitemap(routes) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .filter((r) => r.sitemap)
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${r.lastmod || today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`,
    )
    .join("\n");
  writeFileSync(
    join(distDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    "utf-8",
  );
}

async function main() {
  if (!existsSync(templatePath)) {
    console.error("❌ dist/index.html nicht gefunden – erst `vite build` ausführen.");
    process.exit(1);
  }
  if (!existsSync(ssrEntry)) {
    console.warn("⚠️  dist-ssr/entry-server.js fehlt – Vorrendern übersprungen, Seite bleibt reine SPA.");
    return;
  }

  // React-Hinweise zu useLayoutEffect beim Server-Rendern sind harmlos – ausblenden.
  const origError = console.error;
  console.error = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("useLayoutEffect does nothing on the server")) return;
    origError(...args);
  };

  const template = readFileSync(templatePath, "utf-8");
  const { render, prerenderRoutes } = await import(pathToFileURL(ssrEntry).href);

  let ok = 0;
  for (const route of prerenderRoutes) {
    try {
      const { html: body, head } = render(route.path);
      if (!head) throw new Error("Seite ohne <SEOHead />");
      write(route.path, minify(injectBody(injectHead(template, head, route.path, route.language), body)));
      ok++;
      console.log(`   ✅ ${route.path.padEnd(70)} ${head.noindex ? "(noindex)" : ""}`);
    } catch (err) {
      // Fallback: leere App-Hülle (noindex), damit die Adresse trotzdem funktioniert.
      write(route.path, minify(setMeta(template, "name", "robots", "noindex, nofollow")));
      console.warn(`   ⚠️  ${route.path}: ${err.message} – nur App-Hülle ohne vorgerenderten Inhalt (noindex).`);
    }
  }

  // 404-Seite: Cloudflare Pages und GitHub Pages liefern sie mit Status 404 aus.
  try {
    const { html: body, head } = render("/__404__");
    const notFoundHead = { ...head, title: "Seite nicht gefunden | Jona Fels", noindex: true, url: `${SITE_URL}/` };
    let html = injectHead(template, notFoundHead, "/__404__", "de");
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, "");
    writeFileSync(join(distDir, "404.html"), minify(injectBody(html, body)), "utf-8");
    console.log("   ✅ 404.html");
  } catch (err) {
    console.warn(`   ⚠️  404.html: ${err.message}`);
  }

  writeSitemap(prerenderRoutes);
  console.error = origError;
  console.log(`\n✨ ${ok}/${prerenderRoutes.length} Seiten vorgerendert, sitemap.xml geschrieben.`);
}

main();
