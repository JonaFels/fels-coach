/**
 * Prerender Script für Static Site Generation (SSG)
 * Generiert Ordner-basierte HTML-Dateien für clean URLs
 * Injiziert pro Seite korrekte Meta-Tags (Title, Description, Canonical, OG)
 * damit Crawler (Google, Medium, etc.) sofort die richtigen Infos im HTML finden.
 * 
 * Verwendung: node scripts/prerender.js
 * (Nach npm run build ausführen)
 */

import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITE_URL = 'https://fels-coach.de';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.webp`;

// Alle Routen mit SEO-Meta-Daten
const routes = [
  {
    path: '/', folder: null,
    title: 'Systemische Familienaufstellungen | Jona Fels',
    description: 'Systemische Familienaufstellung & Coaching in Freiburg ✓ Unbewusste Muster lösen ✓ Einzelsitzungen mit Bodenankern ✓ Samstags 14–20 Uhr ✓ Jona Fels',
  },
  {
    path: '/angebote', folder: 'angebote',
    title: 'Jona Fels | Angebote & Termine',
    description: 'Buche dein systemisches Coaching: Kennenlern-Session oder tiefgreifende Familienaufstellung in Freiburg.',
  },
  {
    path: '/systemische-familienaufstellung-freiburg', folder: 'systemische-familienaufstellung-freiburg',
    title: 'Jona Fels | Familienaufstellung',
    description: 'Erfahre, wie Familienaufstellungen unbewusste Dynamiken aufdecken. Ablauf, Nutzen und Methodik erklärt.',
  },
  {
    path: '/ebook', folder: 'ebook',
    title: 'Jona Fels | Kostenloses E-Book',
    description: 'Lade das kostenlose E-Book herunter und starte deine persönliche Transformation. Lerne unbewusste Muster zu durchbrechen.',
  },
  {
    path: '/kontakt', folder: 'kontakt',
    title: 'Jona Fels | Kontakt',
    description: 'Kontaktiere Jona Fels für ein kostenloses Erstgespräch. Erreichbar per E-Mail, WhatsApp oder Telegram.',
  },
  {
    path: '/ueber-mich', folder: 'ueber-mich',
    title: 'Jona Fels | Über mich',
    description: 'Lerne Jona Fels kennen: Familienaufsteller i.A. und Coach. Präzise und mitfühlende Begleitung auf deinem Weg.',
  },
  {
    path: '/datenschutz', folder: 'datenschutz',
    title: 'Jona Fels | Datenschutz',
    description: 'Datenschutzerklärung gemäß DSGVO für die Website von Jona Fels Coaching.',
  },
  {
    path: '/impressum', folder: 'impressum',
    title: 'Jona Fels | Impressum',
    description: 'Impressum und rechtliche Angaben gemäß § 5 TMG für Jona Fels Coaching.',
  },
  {
    path: '/agb', folder: 'agb',
    title: 'Jona Fels | AGB',
    description: 'Buchungs- und Stornierungsregeln für Coaching-Sessions bei Jona Fels.',
  },
  {
    path: '/blog', folder: 'blog',
    title: 'Jona Fels | Blog',
    description: 'Artikel und Insights zu Familienaufstellungen, systemischem Coaching und persönlicher Entwicklung.',
  },
  // Blog-Artikel
  {
    path: '/blog/familienstellen-in-einer-einzelsitzung', folder: 'blog/familienstellen-in-einer-einzelsitzung',
    title: 'Keine Gruppe nötig: Familienstellen in einer Einzelsitzung | Jona Fels',
    description: 'Erfahre, wie Familienaufstellungen auch ohne Gruppe funktionieren – in der Einzelsitzung mit Bodenankern.',
  },
  {
    path: '/blog/von-freud-bis-hellinger-woher-das-familienstellen-kommt', folder: 'blog/von-freud-bis-hellinger-woher-das-familienstellen-kommt',
    title: 'Von Freud bis Hellinger: Woher das Familienstellen kommt | Jona Fels',
    description: 'Die Geschichte der Familienaufstellung – von Sigmund Freud über Virginia Satir bis zu Bert Hellinger.',
  },
  {
    path: '/blog/das-wissende-feld-wahrnehmung-beim-familienstellen', folder: 'blog/das-wissende-feld-wahrnehmung-beim-familienstellen',
    title: 'Das wissende Feld: Wahrnehmung beim Familienstellen | Jona Fels',
    description: 'Was ist das wissende Feld? Wie funktioniert die repräsentierende Wahrnehmung in Familienaufstellungen?',
  },
  {
    path: '/blog/gefangen-im-alten-drehbuch-warum-das-glueck-oft-ausbleibt', folder: 'blog/gefangen-im-alten-drehbuch-warum-das-glueck-oft-ausbleibt',
    title: 'Gefangen im alten Drehbuch: Warum das Glück oft ausbleibt | Jona Fels',
    description: 'Warum wiederholen wir immer die gleichen Muster? Wie unbewusste Lebensskripte dein Glück blockieren.',
  },
];

const distDir = join(__dirname, '..', 'dist');
const templatePath = join(distDir, 'index.html');

/**
 * Injiziert seitenspezifische Meta-Tags in das HTML-Template
 */
function injectMeta(html, route) {
  const url = `${SITE_URL}${route.path}`;
  const title = route.title;
  const description = route.description;
  const image = route.image || DEFAULT_IMAGE;
  const type = route.path.startsWith('/blog/') && route.path !== '/blog' ? 'article' : 'website';

  // Title ersetzen
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // Meta description ersetzen
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`
  );

  // OG Tags ersetzen
  html = html.replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta property="og:type" content="[^"]*"\s*\/?>/, `<meta property="og:type" content="${type}" />`);
  html = html.replace(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${image}" />`);

  // Twitter Tags ersetzen
  html = html.replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`);
  html = html.replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${image}" />`);

  // Canonical Link einfügen / ersetzen (vor </head>)
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `  <link rel="canonical" href="${url}" />\n  </head>`);
  } else {
    html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  }

  // Hreflang-Tags: Self-Reference + x-default (nur DE, EN nur als Toggle, nicht eigenständig indexierbar)
  html = html.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*"\s*\/?>\s*/g, '');
  const hreflangTags =
    `<link rel="alternate" hreflang="de" href="${url}" />` +
    `<link rel="alternate" hreflang="x-default" href="${url}" />`;
  html = html.replace('</head>', `${hreflangTags}\n  </head>`);

  return html;
}

/**
 * HTML minifizieren
 */
function minifyHtml(html) {
  return html
    .replace(/<!--(?!\[if)[\s\S]*?-->/g, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/^\s+|\s+$/gm, '')
    .replace(/\n\s*\n/g, '\n')
    .trim();
}

function ensureDir(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
}

function generateStaticPages() {
  console.log('🚀 Starte SEO-optimiertes SSG Build...\n');

  if (!existsSync(templatePath)) {
    console.error('❌ Fehler: dist/index.html nicht gefunden!');
    process.exit(1);
  }

  const template = readFileSync(templatePath, 'utf-8');

  console.log(`📄 Generiere ${routes.length} HTML-Dateien mit individuellen Meta-Tags:\n`);

  routes.forEach(route => {
    let outputPath;
    if (route.folder === null) {
      outputPath = join(distDir, 'index.html');
    } else {
      const folderPath = join(distDir, route.folder);
      ensureDir(folderPath);
      outputPath = join(folderPath, 'index.html');
    }

    // Meta-Tags injizieren, dann minifizieren
    const withMeta = injectMeta(template, route);
    const minified = minifyHtml(withMeta);

    writeFileSync(outputPath, minified, 'utf-8');
    console.log(`   ✅ ${route.path.padEnd(60)} → title: "${route.title}"`);
  });

  console.log('\n✨ SEO-optimiertes SSG Build abgeschlossen!');
  console.log('   ✓ Individuelle <title>, <meta description>, <link canonical> pro Seite');
  console.log('   ✓ Open Graph Tags (og:title, og:description, og:url, og:type)');
  console.log('   ✓ Twitter Card Tags');
  console.log('   ✓ HTML minifiziert');
}

generateStaticPages();
