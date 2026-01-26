/**
 * Prerender Script für Static Site Generation (SSG)
 * Generiert individuelle HTML-Dateien für jede Route
 * 
 * Verwendung: node scripts/prerender.js
 * (Nach npm run build ausführen)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Statische Routen
const staticRoutes = [
  '/',
  '/angebote',
  '/familienaufstellung',
  '/ebook',
  '/kontakt',
  '/ueber-mich',
  '/datenschutz',
  '/impressum',
  '/agb',
  '/blog',
];

// Dynamische Blog-Routen werden aus blogPosts.ts gelesen
// Für jetzt: Leere Blog-Posts-Liste (kann manuell erweitert werden)
const blogSlugs = [
  // Hier Blog-Slugs hinzufügen wenn vorhanden, z.B.:
  // 'mein-erster-artikel',
];

const distDir = join(__dirname, '..', 'dist');
const templatePath = join(distDir, 'index.html');

function ensureDirectoryExists(filePath) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function generateStaticPages() {
  console.log('🚀 Starte Static Site Generation...\n');

  // Prüfe ob dist/index.html existiert
  if (!existsSync(templatePath)) {
    console.error('❌ Fehler: dist/index.html nicht gefunden!');
    console.error('   Bitte zuerst "npm run build" ausführen.');
    process.exit(1);
  }

  const template = readFileSync(templatePath, 'utf-8');

  // Alle Routen sammeln
  const allRoutes = [
    ...staticRoutes,
    ...blogSlugs.map(slug => `/blog/${slug}`),
  ];

  console.log(`📄 Generiere ${allRoutes.length} statische Seiten:\n`);

  allRoutes.forEach(route => {
    let outputPath;
    
    if (route === '/') {
      // Root bleibt als index.html
      outputPath = join(distDir, 'index.html');
    } else {
      // Andere Routen bekommen eigene Ordner mit index.html
      // z.B. /angebote -> /angebote/index.html
      outputPath = join(distDir, route, 'index.html');
    }

    ensureDirectoryExists(outputPath);

    // Kopiere die Vorlage (bei SPA reicht die gleiche index.html)
    // Der Router übernimmt das Rendering client-seitig
    writeFileSync(outputPath, template, 'utf-8');

    console.log(`   ✅ ${route} -> ${outputPath.replace(distDir, 'dist')}`);
  });

  console.log('\n✨ Static Site Generation abgeschlossen!');
  console.log('\n📁 Verzeichnisstruktur:');
  printDirectoryStructure(distDir, '   ', 2);
}

function printDirectoryStructure(dir, prefix = '', maxDepth = 2, currentDepth = 0) {
  if (currentDepth >= maxDepth) return;

  const items = readdirSync(dir, { withFileTypes: true });
  const folders = items.filter(item => item.isDirectory());
  const htmlFiles = items.filter(item => item.isFile() && item.name.endsWith('.html'));

  // Zeige nur HTML-Dateien und Ordner
  [...folders, ...htmlFiles].forEach(item => {
    console.log(`${prefix}${item.isDirectory() ? '📁' : '📄'} ${item.name}`);
    if (item.isDirectory()) {
      printDirectoryStructure(join(dir, item.name), prefix + '   ', maxDepth, currentDepth + 1);
    }
  });
}

generateStaticPages();
