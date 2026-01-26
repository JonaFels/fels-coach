# SSG Build-Anleitung für Apache/FTP-Server

## Statische HTML-Generierung (SSG)

Dieses Projekt generiert automatisch individuelle HTML-Dateien für jede Unterseite.

### Build mit SSG ausführen

```bash
# 1. Normaler Build
npm run build

# 2. SSG Script ausführen (generiert individuelle HTML-Dateien)
node scripts/prerender.js
```

Oder in einem Befehl:
```bash
npm run build && node scripts/prerender.js
```

### Generierte Seiten

Nach dem SSG-Build enthält der `dist/`-Ordner:

```
dist/
├── index.html                    (Startseite)
├── angebote/
│   └── index.html               (/angebote)
├── familienaufstellung/
│   └── index.html               (/familienaufstellung)
├── ebook/
│   └── index.html               (/ebook)
├── kontakt/
│   └── index.html               (/kontakt)
├── ueber-mich/
│   └── index.html               (/ueber-mich)
├── datenschutz/
│   └── index.html               (/datenschutz)
├── impressum/
│   └── index.html               (/impressum)
├── agb/
│   └── index.html               (/agb)
├── blog/
│   └── index.html               (/blog)
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── ...
```

### Blog-Artikel hinzufügen

Wenn du Blog-Artikel hast, füge die Slugs in `scripts/prerender.js` hinzu:

```javascript
const blogSlugs = [
  'mein-erster-artikel',
  'zweiter-artikel',
];
```

## .htaccess für Apache (Empfohlen)

Trotz der individuellen HTML-Dateien empfiehlt sich eine `.htaccess` als Fallback:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Wenn die Anfrage keine existierende Datei ist
  RewriteCond %{REQUEST_FILENAME} !-f
  # Wenn die Anfrage kein existierendes Verzeichnis ist
  RewriteCond %{REQUEST_FILENAME} !-d
  # Leite zur index.html weiter
  RewriteRule ^ index.html [L]
</IfModule>

# Caching für statische Assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

# Gzip-Komprimierung
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css
  AddOutputFilterByType DEFLATE application/javascript application/json
</IfModule>
```

## Deployment-Schritte

1. `npm run build` ausführen
2. `node scripts/prerender.js` ausführen
3. Inhalt des `dist/`-Ordners per FTP hochladen
4. `.htaccess`-Datei in das Root-Verzeichnis kopieren
5. Sicherstellen, dass `sitemap.xml`, `robots.txt` und `llms.txt` im Root liegen

## Vorteile der SSG-Lösung

- ✅ **SEO-optimiert**: Suchmaschinen sehen sofort den vollständigen HTML-Inhalt
- ✅ **Schnellere Ladezeit**: Keine Abhängigkeit von JavaScript für initiales Rendering
- ✅ **Fallback-sicher**: Funktioniert auch wenn .htaccess-Regeln nicht greifen
- ✅ **Crawlbar**: Jede Seite hat eine eigene URL mit vollständigem HTML
```
