# SSG Build-Anleitung für Apache/FTP-Server

## Statische HTML-Generierung

Da das Projekt ein React SPA ist, benötigst du für echte statische HTML-Seiten einen zusätzlichen Build-Schritt. Hier sind zwei Optionen:

### Option 1: Mit prerender-spa-plugin (Empfohlen für kleine Projekte)

Nach dem regulären Build (`npm run build`) kannst du die Seiten mit einem Tool wie `prerender-spa-plugin` oder `react-snap` vorrendern:

```bash
npm install react-snap --save-dev
```

Füge in package.json hinzu:
```json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "source": "dist",
    "destination": "dist",
    "include": [
      "/",
      "/angebote",
      "/familienaufstellung",
      "/ebook",
      "/kontakt",
      "/ueber-mich",
      "/datenschutz",
      "/impressum",
      "/agb",
      "/blog"
    ]
  }
}
```

### Option 2: .htaccess für Apache (Aktuell konfiguriert)

Die aktuelle Konfiguration nutzt eine `.htaccess`-Datei für Client-Side-Routing. Dies erfordert:

1. **mod_rewrite aktiviert** auf dem Apache-Server
2. Die `.htaccess`-Datei im Root-Verzeichnis (siehe unten)

#### .htaccess Datei

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
2. Inhalt des `dist/`-Ordners per FTP hochladen
3. `.htaccess`-Datei in das Root-Verzeichnis kopieren
4. Sicherstellen, dass `sitemap.xml`, `robots.txt` und `llms.txt` im Root liegen

## Verzeichnisstruktur nach dem Upload

```
/
├── index.html
├── .htaccess
├── sitemap.xml
├── robots.txt
├── llms.txt
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
├── favicon.ico
├── android-icon-192x192.png
└── ...
```
