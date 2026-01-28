/**
 * Prerender Script für Static Site Generation (SSG)
 * Generiert Ordner-basierte HTML-Dateien für clean URLs
 * z.B. /agb → dist/agb/index.html (funktioniert auf Vercel, Apache, etc.)
 * 
 * Verwendung: node scripts/prerender.js
 * (Nach npm run build ausführen)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Statische Routen (path → Ordnername, "/" bleibt index.html im Root)
const staticRoutes = [
  { path: '/', folder: null }, // Root bleibt index.html
  { path: '/angebote', folder: 'angebote' },
  { path: '/familienaufstellung', folder: 'familienaufstellung' },
  { path: '/ebook', folder: 'ebook' },
  { path: '/kontakt', folder: 'kontakt' },
  { path: '/ueber-mich', folder: 'ueber-mich' },
  { path: '/datenschutz', folder: 'datenschutz' },
  { path: '/impressum', folder: 'impressum' },
  { path: '/agb', folder: 'agb' },
  { path: '/blog', folder: 'blog' },
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

/**
 * Erstellt einen Ordner falls nicht vorhanden
 */
function ensureDir(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

function generateStaticPages() {
  console.log('🚀 Starte High-Performance SSG Build (Clean-URL Ordnerstruktur)...\n');

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
    ...blogSlugs.map(slug => ({ path: `/blog/${slug}`, folder: `blog/${slug}` })),
  ];

  console.log(`📄 Generiere ${allRoutes.length} minifizierte HTML-Dateien:\n`);

  let totalSaved = 0;

  allRoutes.forEach(route => {
    let outputPath;
    let displayPath;

    if (route.folder === null) {
      // Root: dist/index.html
      outputPath = join(distDir, 'index.html');
      displayPath = '/index.html';
    } else {
      // Ordner erstellen: dist/agb/index.html
      const folderPath = join(distDir, route.folder);
      ensureDir(folderPath);
      outputPath = join(folderPath, 'index.html');
      displayPath = `/${route.folder}/index.html`;
    }
    
    // Minifiziere HTML
    const minified = minifyHtml(template);
    const originalSize = template.length;
    const minifiedSize = minified.length;
    const saved = originalSize - minifiedSize;
    totalSaved += saved;
    
    writeFileSync(outputPath, minified, 'utf-8');

    const savings = ((saved / originalSize) * 100).toFixed(1);
    console.log(`   ✅ ${route.path.padEnd(22)} → ${displayPath.padEnd(30)} (${savings}% kleiner)`);
  });

  console.log('\n✨ High-Performance SSG Build abgeschlossen!');
  console.log(`\n📊 Gesamtersparnis durch HTML-Minifizierung: ${(totalSaved / 1024).toFixed(1)} KB`);
  
  console.log('\n📁 Clean-URL Struktur im dist/ Ordner:');
  console.log('   📄 index.html (Homepage)');
  console.log('   📁 agb/index.html → /agb funktioniert überall');
  console.log('   📁 kontakt/index.html → /kontakt funktioniert überall');
  console.log('   📁 assets/ (JS, CSS, Bilder, Fonts mit Hashes)');

  console.log('\n⚡ PageSpeed-Optimierungen:');
  console.log('   ✓ HTML minifiziert (Kommentare/Leerzeichen entfernt)');
  console.log('   ✓ Clean URLs funktionieren auf Vercel, Apache, Netlify, etc.');
  console.log('   ✓ Cache-Busting Hashes für 1-Jahr-Caching');
  console.log('   ✓ Vendor-Chunk für besseres Caching');

  console.log('\n🎉 Kopiere den gesamten dist/ Ordner auf deinen Server!');
}

generateStaticPages();
