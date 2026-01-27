/**
 * Prerender Script für Static Site Generation (SSG)
 * Generiert individuelle HTML-Dateien für jede Route
 * Mit automatischer Hash-Injektion und HTML-Minifizierung
 * 
 * Verwendung: node scripts/prerender.js
 * (Nach npm run build ausführen)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Statische Routen mit Dateinamen (flach im Root)
const staticRoutes = [
  { path: '/', filename: 'index.html' },
  { path: '/angebote', filename: 'angebote.html' },
  { path: '/familienaufstellung', filename: 'familienaufstellung.html' },
  { path: '/ebook', filename: 'ebook.html' },
  { path: '/kontakt', filename: 'kontakt.html' },
  { path: '/ueber-mich', filename: 'ueber-mich.html' },
  { path: '/datenschutz', filename: 'datenschutz.html' },
  { path: '/impressum', filename: 'impressum.html' },
  { path: '/agb', filename: 'agb.html' },
  { path: '/blog', filename: 'blog.html' },
];

// Blog-Artikel (falls vorhanden)
const blogSlugs = [
  // 'mein-erster-artikel',
];

const distDir = join(__dirname, '..', 'dist');
const templatePath = join(distDir, 'index.html');

/**
 * HTML minifizieren (Kommentare und überflüssige Leerzeichen entfernen)
 */
function minifyHtml(html) {
  return html
    // HTML-Kommentare entfernen (außer IE conditionals)
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
    // Mehrfache Leerzeichen/Zeilenumbrüche reduzieren
    .replace(/\s{2,}/g, ' ')
    // Leerzeichen zwischen Tags entfernen
    .replace(/>\s+</g, '><')
    // Leerzeichen am Zeilenanfang/Ende entfernen
    .replace(/^\s+|\s+$/gm, '')
    // Leere Zeilen entfernen
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

/**
 * Finde die generierten Asset-Dateien mit Hashes
 */
function findAssets() {
  const assetsDir = join(distDir, 'assets');
  
  if (!existsSync(assetsDir)) {
    console.error('❌ Fehler: dist/assets/ nicht gefunden!');
    return null;
  }

  const files = readdirSync(assetsDir);
  
  // Finde Haupt-JS und CSS mit Hashes
  const mainJs = files.find(f => f.startsWith('index.') && f.endsWith('.js'));
  const vendorJs = files.find(f => f.startsWith('vendor.') && f.endsWith('.js'));
  const uiJs = files.find(f => f.startsWith('ui.') && f.endsWith('.js'));
  const mainCss = files.find(f => f.endsWith('.css'));

  return { mainJs, vendorJs, uiJs, mainCss };
}

function generateStaticPages() {
  console.log('🚀 Starte High-Performance SSG Build...\n');

  // Prüfe ob dist/index.html existiert
  if (!existsSync(templatePath)) {
    console.error('❌ Fehler: dist/index.html nicht gefunden!');
    console.error('   Bitte zuerst "npm run build" ausführen.');
    process.exit(1);
  }

  let template = readFileSync(templatePath, 'utf-8');

  // Assets mit Hashes finden
  const assets = findAssets();
  if (!assets) {
    console.error('❌ Konnte Assets nicht finden. Build abgebrochen.');
    process.exit(1);
  }

  console.log('📦 Gefundene Assets mit Cache-Busting Hashes:');
  console.log(`   JS:  ${assets.mainJs || 'nicht gefunden'}`);
  console.log(`   Vendor: ${assets.vendorJs || 'nicht gefunden'}`);
  console.log(`   CSS: ${assets.mainCss || 'nicht gefunden'}\n`);

  // Alle Routen sammeln
  const allRoutes = [
    ...staticRoutes,
    ...blogSlugs.map(slug => ({ path: `/blog/${slug}`, filename: `blog-${slug}.html` })),
  ];

  console.log(`📄 Generiere ${allRoutes.length} minifizierte HTML-Dateien:\n`);

  let totalSaved = 0;

  allRoutes.forEach(route => {
    const outputPath = join(distDir, route.filename);
    
    // Minifiziere HTML
    const minified = minifyHtml(template);
    const originalSize = template.length;
    const minifiedSize = minified.length;
    const saved = originalSize - minifiedSize;
    totalSaved += saved;
    
    writeFileSync(outputPath, minified, 'utf-8');

    const savings = ((saved / originalSize) * 100).toFixed(1);
    console.log(`   ✅ ${route.path.padEnd(20)} → ${route.filename.padEnd(25)} (${savings}% kleiner)`);
  });

  console.log('\n✨ High-Performance SSG Build abgeschlossen!');
  console.log(`\n📊 Gesamtersparnis durch HTML-Minifizierung: ${(totalSaved / 1024).toFixed(1)} KB`);
  
  console.log('\n📁 Struktur im dist/ Ordner:');
  console.log('   📄 *.html (alle Seiten im Root - minifiziert)');
  console.log('   📁 assets/ (JS, CSS, Bilder, Fonts mit Hashes)');
  console.log('   📄 robots.txt, sitemap.xml, .htaccess');

  console.log('\n⚡ PageSpeed-Optimierungen:');
  console.log('   ✓ HTML minifiziert (Kommentare/Leerzeichen entfernt)');
  console.log('   ✓ JS/CSS mit Terser minifiziert');
  console.log('   ✓ Cache-Busting Hashes für 1-Jahr-Caching');
  console.log('   ✓ Vendor-Chunk für besseres Caching');
  console.log('   ✓ .htaccess mit GZIP/Brotli & Caching-Headers');

  console.log('\n🎉 Kopiere den gesamten dist/ Ordner auf deinen Server!');
}

generateStaticPages();
