// CMS-Registry: Kuratierte Liste aller im Admin-Dashboard editierbaren Inhalte.
// Jeder Eintrag definiert Key, Typ (text/image/link), Kategorie + Standardwert (Fallback).
// Texte zusätzlich aus translations.ts (Key muss übereinstimmen) — der Fallback hier ist
// nur zur Anzeige im Dashboard, falls weder DB-Override noch translations.ts existieren.

export type CMSType = "text" | "image" | "link";

export interface CMSEntry {
  key: string;
  type: CMSType;
  category: string;
  label: string;
  fallback: string;
  description?: string;
}

export const cmsRegistry: CMSEntry[] = [
  // ===== Hero-Bereich =====
  { key: "hero.title", type: "text", category: "Hero-Bereich", label: "Headline", fallback: "" },
  { key: "hero.subtitle", type: "text", category: "Hero-Bereich", label: "Unter-Headline", fallback: "" },
  { key: "hero.cta", type: "text", category: "Hero-Bereich", label: "Button-Text", fallback: "" },
  { key: "hero.image", type: "image", category: "Hero-Bereich", label: "Hero-Bild URL", fallback: "" },

  // ===== Über mich =====
  { key: "about.title", type: "text", category: "Über mich", label: "Überschrift", fallback: "" },
  { key: "about.subtitle", type: "text", category: "Über mich", label: "Untertitel", fallback: "" },
  { key: "about.text", type: "text", category: "Über mich", label: "Beschreibung", fallback: "" },
  { key: "about.image", type: "image", category: "Über mich", label: "Portrait URL", fallback: "" },

  // ===== Angebote / Coaching =====
  { key: "offerings.title", type: "text", category: "Angebote", label: "Überschrift", fallback: "" },
  { key: "offerings.subtitle", type: "text", category: "Angebote", label: "Untertitel", fallback: "" },

  // ===== Kontakt =====
  { key: "contact.title", type: "text", category: "Kontakt", label: "Überschrift", fallback: "" },
  { key: "contact.subtitle", type: "text", category: "Kontakt", label: "Untertitel", fallback: "" },
  { key: "contact.email", type: "text", category: "Kontakt", label: "E-Mail Adresse", fallback: "kontakt@fels-coach.de" },
  { key: "contact.phone", type: "text", category: "Kontakt", label: "Telefon", fallback: "" },
  { key: "contact.address", type: "text", category: "Kontakt", label: "Adresse", fallback: "Karlstraße 51, 79104 Freiburg" },
  { key: "contact.booking_url", type: "link", category: "Kontakt", label: "Booking-Link (Orbnet)", fallback: "" },

  // ===== Footer =====
  { key: "footer.tagline", type: "text", category: "Footer", label: "Tagline / Slogan", fallback: "" },
  { key: "footer.copyright", type: "text", category: "Footer", label: "Copyright", fallback: "" },
  { key: "footer.instagram", type: "link", category: "Footer", label: "Instagram URL", fallback: "https://www.instagram.com/jona.fels" },
  { key: "footer.linkedin", type: "link", category: "Footer", label: "LinkedIn URL", fallback: "" },
  { key: "footer.facebook", type: "link", category: "Footer", label: "Facebook URL", fallback: "" },
];

export const cmsRegistryByKey: Record<string, CMSEntry> = Object.fromEntries(
  cmsRegistry.map((e) => [e.key, e])
);

export const cmsCategories = Array.from(
  new Set(cmsRegistry.map((e) => e.category))
);
