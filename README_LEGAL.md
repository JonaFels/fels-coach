# README_LEGAL.md - Rechtliche Dokumentation (Audit-Ready)

**Projekt:** Fels-Coach - Systemische Familienaufstellungen  
**Domain:** https://www.fels-coach.de  
**Stand:** Februar 2025

---

## 1. Cookie-Consent & Analytics (DSGVO/TTDSG-konform)

### Google Analytics 4 (GA4) Konfiguration

- **Measurement ID:** `G-879GQ96R5G`
- **Consent-First:** Script wird erst nach expliziter Einwilligung geladen (Opt-in)
- **IP-Anonymisierung:** `anonymize_ip: true`
- **Google Signals:** `allow_google_signals: false` (Cross-Device-Tracking deaktiviert)
- **Werbe-Personalisierung:** `allow_ad_personalization_signals: false`

### Cookie-Banner Verhalten

- **Speicherort:** `localStorage` unter Key `fels-cookie-consent`
- **Standard:** Analytics blockiert bis zur expliziten Zustimmung
- **Kategorien:** 
  - `necessary: true` (immer aktiv, nicht abwählbar)
  - `analytics: false` (Standard, Opt-in erforderlich)

### Dateien

- `src/components/CookieBanner.tsx` - Consent-Banner mit GA4-Integration
- Kein Cookie vor Einwilligung - nur localStorage nach Interaktion

---

## 2. Bildlizenzen

### Eigene Assets

| Datei | Lizenz | Quelle |
|-------|--------|--------|
| `src/assets/jona-fels-hero.jpg` | Eigennutzung | Eigenes Foto |
| `src/assets/jona-fels-systemisches-coaching.webp` | Eigennutzung | Eigenes Foto |
| `src/assets/hintergrund-struktur.jpg` | Eigennutzung | Eigenes Foto |

### Icons & Fonts

| Asset | Lizenz | Quelle |
|-------|--------|--------|
| Lucide Icons | MIT License | https://lucide.dev |
| Playfair Display | SIL Open Font License | @fontsource/playfair-display |
| Montserrat | SIL Open Font License | @fontsource/montserrat |

**Hinweis:** Alle Fonts werden lokal via `@fontsource` eingebunden - keine Verbindung zu Google-Servern.

---

## 3. Drittanbieter-Dienste

### Supabase (Backend)

- **Zweck:** Datenbank für Kontaktformular und E-Book-Leads
- **Standort:** EU (via Lovable Cloud)
- **Verarbeitung:** Formulardaten, E-Mail-Adressen
- **Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)

### Resend (E-Mail-Versand)

- **Zweck:** Transaktions-E-Mails (Kontaktbestätigung, E-Book-Versand)
- **Standort:** USA mit EU-Standardvertragsklauseln
- **Verarbeitung:** Name, E-Mail-Adresse, Nachrichteninhalt
- **Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO

### Chatbase (KI-Chatbot)

- **Zweck:** Automatisierte Kundenberatung
- **Standort:** USA mit EU-Standardvertragsklauseln
- **Verarbeitung:** Chat-Nachrichten
- **Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)

### Cal.com (Terminbuchung)

- **Zweck:** Online-Terminvereinbarung
- **Standort:** EU (self-hosted oder EU-Region)
- **Verarbeitung:** Name, E-Mail, gewählter Termin
- **Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO

---

## 4. Spam-Schutz (Honeypot)

### Implementierung

Alle Formulare enthalten ein unsichtbares Honeypot-Feld:

```html
<div class="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
  <input type="text" name="website" tabindex="-1" autocomplete="off">
</div>
```

### Verhalten

- **Leeres Feld:** Normale Verarbeitung
- **Ausgefülltes Feld:** Bot erkannt → Formular wird stumm abgelehnt (keine Fehlermeldung)
- **Barrierefreiheit:** `aria-hidden="true"` + `tabindex="-1"` für Screenreader-Kompatibilität

### Betroffene Formulare

- `src/components/ContactForm.tsx`
- `src/pages/Ebook.tsx`

---

## 5. Rechtliche Pflichtseiten

| Seite | URL | Rechtsgrundlage |
|-------|-----|-----------------|
| Impressum | /impressum | § 5 DDG (ehem. TMG) |
| Datenschutz | /datenschutz | Art. 13/14 DSGVO |
| AGB | /agb | BGB |

### VSBG-Klausel (Impressum)

> Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.

### EU-Streitschlichtungsplattform

Link im Impressum: https://ec.europa.eu/consumers/odr/

---

## 6. Barrierefreiheit (BFSG/WCAG 2.1 AA)

### Implementierte Maßnahmen

- [x] Skip-Link ("Zum Inhalt springen") als erstes Element in `<body>`
- [x] Hochkontrastreicher Fokus-Ring (3px solid, outline-offset: 2px)
- [x] Semantische HTML5-Elemente (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [x] Label-Verknüpfung: Alle `<input>` mit zugehörigem `<label>` via `htmlFor`/`id`
- [x] Motion-Safety: `@media (prefers-reduced-motion: reduce)` implementiert
- [x] Touch-Targets: Minimum 44x44px für interaktive Elemente
- [x] ARIA-Labels für Icon-Buttons
- [x] `aria-hidden="true"` für dekorative Elemente

### Dateien

- `src/index.css` - CSS für Skip-Link, Fokus-Ring, Motion-Safety
- `index.html` - Skip-Link im `<body>`

---

## 7. Sicherheitsmaßnahmen

### HTTP Headers (.htaccess)

```apache
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Link-Sicherheit

Alle externen Links (`target="_blank"`) erhalten `rel="noopener noreferrer"`.

### HTTPS

Durchgängige Nutzung von HTTPS oder relativen Pfaden in allen Ressourcen.

---

## 8. Änderungshistorie

| Datum | Änderung | Verantwortlich |
|-------|----------|----------------|
| 2025-02 | Google Signals deaktiviert | Automatisch |
| 2025-02 | Honeypot-Spam-Schutz hinzugefügt | Automatisch |
| 2025-02 | Resend/Supabase/Chatbase in Datenschutz dokumentiert | Automatisch |
| 2025-02 | Fokus-Ring für Barrierefreiheit hinzugefügt | Automatisch |

---

*Diese Dokumentation dient als Audit-Nachweis für die DSGVO-, DDG- und BFSG-Konformität der Website.*
