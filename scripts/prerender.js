/**
 * Prerender Script für Static Site Generation (SSG)
 * Generiert individuelle HTML-Dateien für jede Route
 * 
 * Verwendung: node scripts/prerender.js
 * (Nach npm run build ausführen)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Statische Routen mit Dateinamen
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
    ...blogSlugs.map(slug => ({ path: `/blog/${slug}`, filename: `blog-${slug}.html` })),
  ];

  console.log(`📄 Generiere ${allRoutes.length} statische HTML-Dateien:\n`);

  allRoutes.forEach(route => {
    const outputPath = join(distDir, route.filename);
    
    // Kopiere die Vorlage
    writeFileSync(outputPath, template, 'utf-8');

    console.log(`   ✅ ${route.path} -> ${route.filename}`);
  });

  console.log('\n✨ Static Site Generation abgeschlossen!');
  console.log('\n📁 Generierte Dateien im dist/ Ordner:');
  
  // Zeige alle wichtigen Dateien
  console.log('\n   HTML-Seiten:');
  allRoutes.forEach(route => {
    console.log(`   📄 ${route.filename}`);
  });
  
  console.log('\n   Assets:');
  console.log('   📁 js/       (JavaScript)');
  console.log('   📁 css/      (Stylesheets)');
  console.log('   📁 images/   (Bilder)');
  console.log('   📁 fonts/    (Schriftarten)');
  
  console.log('\n   Sonstige:');
  const otherFiles = ['robots.txt', 'sitemap.xml', 'llms.txt', '.htaccess'];
  otherFiles.forEach(file => {
    if (existsSync(join(distDir, file))) {
      console.log(`   📄 ${file}`);
    }
  });

  console.log('\n🎉 Kopiere den gesamten dist/ Ordner auf deinen Server!');
}

generateStaticPages();
