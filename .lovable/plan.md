## Ziel
Editierbares CMS für alle Texte der Website. Bestehende `translations.ts` bleibt als Fallback. Admin kann jeden Key über `/admin` überschreiben. Nur Deutsch.

## Architektur

```
translations.ts (DE)  ──┐
                        ├──►  t(key)  ──► CMS-Override falls vorhanden, sonst translations.ts
site_content (DB)    ──┘
```

- **CMS lädt einmalig alle Overrides** beim App-Start in einen Context (`CMSProvider`).
- **`useLanguage().t(key)`** wird erweitert: schaut zuerst in CMS-Map, dann in translations.ts.
- **Realtime-Aktualisierung** im Admin nach Speichern (re-fetch).

## Datenbank (Migration)

**Tabelle `site_content`:**
- `id` (uuid, pk)
- `key` (text, unique, not null) — z.B. `hero.title`
- `value` (text, not null)
- `created_at`, `updated_at`

**RLS:**
- Public SELECT: `true` (Texte müssen für alle lesbar sein)
- Admin INSERT/UPDATE/DELETE: `has_role(auth.uid(), 'admin')`

**Trigger:** `updated_at` automatisch aktualisieren.

`user_roles` + `has_role()` existieren bereits → wiederverwenden.

## Auth

- Supabase Email/Password Auth (kein Google, da reiner Admin-Bereich)
- **Auto-Confirm aktivieren** (sonst musst du E-Mail bestätigen für deinen einen Admin-Account)
- Keine offene Registrierung im UI — du legst dich einmal über `/admin/login` an, danach füge ich dich manuell zum `user_roles` als admin hinzu.

## Frontend

**Neue Dateien:**
- `src/contexts/CMSContext.tsx` — lädt `site_content` einmalig, stellt Map bereit
- `src/hooks/useAuth.ts` — Session-Management mit `onAuthStateChange`
- `src/pages/admin/Login.tsx` — `/admin/login` (öffentlich)
- `src/pages/admin/Dashboard.tsx` — `/admin` (geschützt)
  - Liste aller verfügbaren Keys aus translations.ts (DE)
  - Pro Zeile: Key, aktueller Wert (CMS-Override oder Fallback), "Bearbeiten"-Button
  - Dialog mit Textarea zum Editieren + Speichern + "Zurücksetzen" (löscht Override)
  - Suche/Filter über Keys (bei hunderten Keys nötig)
  - Logout-Button im Header
- `src/components/admin/ProtectedRoute.tsx` — Route-Guard (eingeloggt + admin-Rolle)

**Geänderte Dateien:**
- `src/contexts/LanguageContext.tsx` — `t()` konsultiert zuerst CMS-Map
- `src/App.tsx` — `CMSProvider` einbinden, neue Routes `/admin` + `/admin/login`

## Technische Details

- CMS-Map wird **einmal** beim App-Mount geladen (1 Query, alle Keys). Kein Performance-Impact da `site_content` klein bleibt.
- Wenn DB-Fetch fehlschlägt: leere Map → alles fällt auf translations.ts zurück. Site bleibt funktionsfähig.
- Admin-Edit triggert Re-Fetch der CMS-Map.
- Kein Realtime-Subscription nötig (Inhalte ändern sich selten).

## Nach Migration & Deploy

1. Du gehst auf `/admin/login`, registrierst dich mit deiner E-Mail.
2. Sagst mir die E-Mail → ich füge `INSERT INTO user_roles (user_id, role) VALUES (..., 'admin')` ein.
3. Du loggst dich neu ein, siehst das Dashboard.

## Aus dem Scope ausgeschlossen

- Keine Bild/Asset-Verwaltung (nur Text)
- Kein Versioning/History
- Kein Mehrsprachen-Support (nur DE, wie gewünscht)
- Keine Rich-Text-Editor (Plain Text + Zeilenumbrüche reichen für Headlines/Buttons)
