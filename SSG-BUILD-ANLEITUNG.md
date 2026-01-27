# SSG Build-Anleitung für Apache/FTP-Server (High-Performance)

## Statische HTML-Generierung mit PageSpeed 100 Optimierungen

Dieses Projekt generiert automatisch minifizierte HTML-Dateien mit Cache-Busting für maximale Performance.

### Build mit SSG ausführen

```bash
# 1. Normaler Build (mit Minifizierung)
npm run build

# 2. SSG Script ausführen (generiert minifizierte HTML-Dateien)
node scripts/prerender.js
```

Oder in einem Befehl:
```bash
npm run build && node scripts/prerender.js
```

### Generierte Dateistruktur

Nach dem SSG-Build hat der `dist/`-Ordner diese Struktur:

```
dist/
├── index.html              ← Startseite (minifiziert)
├── angebote.html           ← Alle HTML-Seiten im Root
├── familienaufstellung.html
├── ebook.html
├── kontakt.html
├── ueber-mich.html
├── datenschutz.html
├── impressum.html
├── agb.html
├── blog.html
│
├── assets/                 ← Alle Assets mit Cache-Busting Hashes
│   ├── index.[hash].js     ← Minifiziertes JavaScript
│   ├── vendor.[hash].js    ← React & Libraries (separater Cache)
│   ├── ui.[hash].js        ← UI Components
│   ├── index.[hash].css    ← Minifiziertes CSS
│   ├── [bilder].[hash].png/jpg
│   └── [fonts].[hash].woff2
│
├── robots.txt
├── sitemap.xml
├── llms.txt
└── .htaccess               ← Caching, GZIP, Clean URLs
```

### PageSpeed-Optimierungen

| Optimierung | Status |
|-------------|--------|
| HTML Minifizierung | ✅ Kommentare & Leerzeichen entfernt |
| JS Minifizierung (Terser) | ✅ Mit Tree-Shaking |
| CSS Minifizierung | ✅ Aktiviert |
| Cache-Busting Hashes | ✅ 1 Jahr Caching möglich |
| Vendor Chunk Splitting | ✅ Besseres Browser-Caching |
| GZIP/Brotli | ✅ Via .htaccess |
| Sourcemaps | ❌ Deaktiviert für Production |

### Deployment

**Einfach den gesamten `dist/`-Ordner per FTP hochladen.**

Die `.htaccess` sorgt für:
- **Clean URLs**: `deinedomain.de/kontakt` → lädt `kontakt.html`
- **1 Jahr Caching** für Assets in `/assets/` (durch Hashes sicher)
- **GZIP/Brotli Komprimierung** für alle Textdateien
- **Security Headers** (X-Frame-Options, CSP, etc.)

### Blog-Artikel hinzufügen

Wenn du Blog-Artikel hast, füge die Slugs in `scripts/prerender.js` hinzu:

```javascript
const blogSlugs = [
  'mein-erster-artikel',
  'zweiter-artikel',
];
```

## Vorteile dieser Konfiguration

- ✅ **PageSpeed 100**: Minifizierung + Caching + Komprimierung
- ✅ **SEO-optimiert**: Suchmaschinen sehen sofort den vollständigen HTML-Inhalt
- ✅ **Schnellste Ladezeit**: Assets werden für 1 Jahr gecacht
- ✅ **Cache-Busting**: Neue Deployments sind sofort sichtbar (Hash ändert sich)
- ✅ **Apache-kompatibel**: Funktioniert auf jedem Shared Hosting

## Unterschied zur vorherigen "lesbaren" Konfiguration

Die vorherige Konfiguration war für **manuelle Server-Edits** optimiert (unminifiziert, keine Hashes).

Diese neue Konfiguration ist für **maximale Performance** optimiert:
- Code ist nicht mehr manuell editierbar auf dem Server
- Dafür: Deutlich schnellere Ladezeiten und besseres Caching
- Änderungen müssen über Lovable/Build gemacht werden

Falls du die lesbare Ausgabe zurück möchtest, revertiere die vite.config.ts Änderungen.
