// CMS-Registry: Alle im Admin-Dashboard editierbaren Inhalte.
// Text-Keys MÜSSEN mit Keys aus translations.ts übereinstimmen, damit der
// CMS-Override im LanguageContext greift. Bilder/Links sind eigene Keys.

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
  { key: "hero.eyebrow", type: "text", category: "Hero-Bereich", label: "Eyebrow / Kleiner Text oben" },
  { key: "hero.title", type: "text", category: "Hero-Bereich", label: "Headline" },
  { key: "hero.subtitle", type: "text", category: "Hero-Bereich", label: "Unter-Headline" },
  { key: "hero.ctaConsultation", type: "text", category: "Hero-Bereich", label: "Button-Text (Erstgespräch)" },
  { key: "hero.ctaMicrocopy", type: "text", category: "Hero-Bereich", label: "Microcopy unter Button" },
  { key: "hero.image", type: "image", category: "Hero-Bereich", label: "Portrait Hero (Desktop)" },
  { key: "hero.image_mobile", type: "image", category: "Hero-Bereich", label: "Portrait Hero (Mobil)" },

  // ===== Logo / Branding =====
  { key: "branding.logo", type: "image", category: "Logo & Branding", label: "Logo (Header)" },

  // ===== About-Preview (Startseite) =====
  { key: "aboutPreview.title", type: "text", category: "Über mich (Vorschau)", label: "Überschrift" },
  { key: "aboutPreview.text1", type: "text", category: "Über mich (Vorschau)", label: "Absatz 1" },
  { key: "aboutPreview.text2", type: "text", category: "Über mich (Vorschau)", label: "Absatz 2" },
  { key: "aboutPreview.cta", type: "text", category: "Über mich (Vorschau)", label: "Button-Text" },
  { key: "about.image", type: "image", category: "Über mich (Vorschau)", label: "Portrait" },

  // ===== Über mich (Seite) =====
  { key: "about.title", type: "text", category: "Über mich (Seite)", label: "Seitentitel" },
  { key: "about.subtitle", type: "text", category: "Über mich (Seite)", label: "Untertitel" },
  { key: "about.intro1", type: "text", category: "Über mich (Seite)", label: "Intro 1" },
  { key: "about.intro2", type: "text", category: "Über mich (Seite)", label: "Intro 2" },
  { key: "about.core.title", type: "text", category: "Über mich (Seite)", label: "Kern-Überschrift" },
  { key: "about.core1", type: "text", category: "Über mich (Seite)", label: "Kern Absatz 1" },
  { key: "about.core2", type: "text", category: "Über mich (Seite)", label: "Kern Absatz 2" },
  { key: "about.guidance.title", type: "text", category: "Über mich (Seite)", label: "Leitprinzipien-Titel" },
  { key: "about.guidance1", type: "text", category: "Über mich (Seite)", label: "Leitprinzip 1" },
  { key: "about.guidance2", type: "text", category: "Über mich (Seite)", label: "Leitprinzip 2" },
  { key: "about.guidance3", type: "text", category: "Über mich (Seite)", label: "Leitprinzip 3" },
  { key: "about.cv.title", type: "text", category: "Über mich (Seite)", label: "CV-Überschrift" },
  { key: "about.cv1.year", type: "text", category: "Über mich (Seite)", label: "CV1 Jahr" },
  { key: "about.cv1.title", type: "text", category: "Über mich (Seite)", label: "CV1 Titel" },
  { key: "about.cv1.desc", type: "text", category: "Über mich (Seite)", label: "CV1 Beschreibung" },
  { key: "about.cv1.badge", type: "text", category: "Über mich (Seite)", label: "CV1 Badge" },
  { key: "about.cv2.year", type: "text", category: "Über mich (Seite)", label: "CV2 Jahr" },
  { key: "about.cv2.title", type: "text", category: "Über mich (Seite)", label: "CV2 Titel" },
  { key: "about.cv2.desc", type: "text", category: "Über mich (Seite)", label: "CV2 Beschreibung" },
  { key: "about.cv3.year", type: "text", category: "Über mich (Seite)", label: "CV3 Jahr" },
  { key: "about.cv3.title", type: "text", category: "Über mich (Seite)", label: "CV3 Titel" },
  { key: "about.cv3.desc", type: "text", category: "Über mich (Seite)", label: "CV3 Beschreibung" },

  // ===== Method-Section =====
  { key: "method.title", type: "text", category: "Methode", label: "Überschrift" },
  { key: "method.intro", type: "text", category: "Methode", label: "Intro" },
  { key: "method.description", type: "text", category: "Methode", label: "Beschreibung" },
  { key: "method.cta", type: "text", category: "Methode", label: "Button-Text" },

  // ===== Testimonials =====
  { key: "testimonials.title", type: "text", category: "Testimonials", label: "Überschrift" },
  { key: "testimonials.subtitle", type: "text", category: "Testimonials", label: "Untertitel" },

  // ===== FAQ =====
  { key: "faq.title", type: "text", category: "FAQ", label: "Überschrift" },
  { key: "faq.subtitle", type: "text", category: "FAQ", label: "Untertitel" },

  // ===== Final CTA =====
  { key: "finalCta.title", type: "text", category: "Final CTA", label: "Überschrift" },
  { key: "finalCta.description", type: "text", category: "Final CTA", label: "Beschreibung" },
  { key: "finalCta.button", type: "text", category: "Final CTA", label: "Button-Text" },
  { key: "finalCta.microcopy", type: "text", category: "Final CTA", label: "Microcopy" },

  // ===== Quick CTA / Quick Request =====
  { key: "quickCTA.headline", type: "text", category: "Quick CTA", label: "Headline" },
  { key: "quickCTA.subheadline", type: "text", category: "Quick CTA", label: "Sub-Headline" },
  { key: "quickCTA.button", type: "text", category: "Quick CTA", label: "Button" },
  { key: "quickCTA.microcopy", type: "text", category: "Quick CTA", label: "Microcopy" },
  { key: "quickRequest.title", type: "text", category: "Quick CTA", label: "Quick-Form Titel" },
  { key: "quickRequest.description", type: "text", category: "Quick CTA", label: "Quick-Form Beschreibung" },
  { key: "quickRequest.placeholder", type: "text", category: "Quick CTA", label: "Quick-Form Placeholder" },
  { key: "quickRequest.button", type: "text", category: "Quick CTA", label: "Quick-Form Button" },
  { key: "quickRequest.success", type: "text", category: "Quick CTA", label: "Quick-Form Erfolg" },

  // ===== Angebote =====
  { key: "offerings.title", type: "text", category: "Angebote", label: "Überschrift" },
  { key: "offerings.pageIntro", type: "text", category: "Angebote", label: "Seiten-Intro" },
  { key: "offerings.preiseTitle", type: "text", category: "Angebote", label: "Preise Überschrift" },
  { key: "offerings.preiseIntro", type: "text", category: "Angebote", label: "Preise Intro" },
  { key: "offerings.ablaufTitle", type: "text", category: "Angebote", label: "Ablauf Titel" },
  { key: "offerings.ablaufIntro", type: "text", category: "Angebote", label: "Ablauf Intro" },
  { key: "offerings.duration", type: "text", category: "Angebote", label: "Dauer Label" },
  { key: "offerings.minutes", type: "text", category: "Angebote", label: "Minuten Suffix" },
  { key: "offerings.location", type: "text", category: "Angebote", label: "Ort Label" },
  { key: "offerings.perUnit", type: "text", category: "Angebote", label: "pro Einheit" },
  { key: "offerings.book", type: "text", category: "Angebote", label: "Buchen-Button" },
  { key: "offerings.unsureTitle", type: "text", category: "Angebote", label: "Unsicher-Box Titel" },
  { key: "offerings.unsureText", type: "text", category: "Angebote", label: "Unsicher-Box Text" },
  { key: "offerings.unsureCta", type: "text", category: "Angebote", label: "Unsicher CTA" },
  { key: "offerings.unsureMicrocopy", type: "text", category: "Angebote", label: "Unsicher Microcopy" },
  { key: "offerings.unsure", type: "text", category: "Angebote", label: "Unsicher kurz" },

  // ===== Familienaufstellung =====
  { key: "family.title", type: "text", category: "Familienaufstellung", label: "Titel" },
  { key: "family.subtitle", type: "text", category: "Familienaufstellung", label: "Untertitel" },
  { key: "family.intro.title", type: "text", category: "Familienaufstellung", label: "Intro Titel" },
  { key: "family.intro.text", type: "text", category: "Familienaufstellung", label: "Intro Text" },
  { key: "family.benefits.title", type: "text", category: "Familienaufstellung", label: "Nutzen Titel" },
  { key: "family.process.title", type: "text", category: "Familienaufstellung", label: "Ablauf Titel" },
  { key: "family.process.intro", type: "text", category: "Familienaufstellung", label: "Ablauf Intro" },
  { key: "family.process.stepsTitle", type: "text", category: "Familienaufstellung", label: "Schritte Titel" },
  { key: "family.midCta.text", type: "text", category: "Familienaufstellung", label: "Mid-CTA Text" },
  { key: "family.proof.title", type: "text", category: "Familienaufstellung", label: "Proof Titel" },
  { key: "family.faq.title", type: "text", category: "Familienaufstellung", label: "FAQ Titel" },
  { key: "family.imageCaption", type: "text", category: "Familienaufstellung", label: "Bild Caption" },
  { key: "family.ebookHint.title", type: "text", category: "Familienaufstellung", label: "Ebook-Hinweis Titel" },
  { key: "family.ebookHint.text", type: "text", category: "Familienaufstellung", label: "Ebook-Hinweis Text" },
  { key: "family.ebookHint.cta", type: "text", category: "Familienaufstellung", label: "Ebook-Hinweis CTA" },
  { key: "family.image", type: "image", category: "Familienaufstellung", label: "Praxisbild Aufstellung" },

  // ===== Praxis-Banner / Bilder =====
  { key: "praxis.lounge", type: "image", category: "Praxis-Bilder", label: "Praxis Lounge (Desktop)" },
  { key: "praxis.lounge_mobile", type: "image", category: "Praxis-Bilder", label: "Praxis Lounge (Mobil)" },
  { key: "praxis.sitzbereich", type: "image", category: "Praxis-Bilder", label: "Praxis Sitzbereich (Desktop)" },
  { key: "praxis.sitzbereich_mobile", type: "image", category: "Praxis-Bilder", label: "Praxis Sitzbereich (Mobil)" },

  // ===== Kontakt =====
  { key: "contact.calendarHeadline", type: "text", category: "Kontakt", label: "Kalender Headline" },
  { key: "contact.calendarMicrocopy", type: "text", category: "Kontakt", label: "Kalender Microcopy" },
  { key: "contact.directTitle", type: "text", category: "Kontakt", label: "Direkt-Kontakt Titel" },
  { key: "contact.altTitle", type: "text", category: "Kontakt", label: "Alternativen Titel" },
  { key: "contact.emailLabel", type: "text", category: "Kontakt", label: "E-Mail Label" },
  { key: "contact.telegramLabel", type: "text", category: "Kontakt", label: "Telegram Label" },
  { key: "contact.directions.title", type: "text", category: "Kontakt", label: "Anfahrt Titel" },
  { key: "contact.directions.intro", type: "text", category: "Kontakt", label: "Anfahrt Intro" },
  { key: "contact.directions.address", type: "text", category: "Kontakt", label: "Anfahrt Adresse" },
  { key: "contact.directions.tram", type: "text", category: "Kontakt", label: "Tram Titel" },
  { key: "contact.directions.tramLine", type: "text", category: "Kontakt", label: "Tram Linie" },
  { key: "contact.directions.tramStop", type: "text", category: "Kontakt", label: "Tram Haltestelle" },
  { key: "contact.directions.tramWalk", type: "text", category: "Kontakt", label: "Tram Fußweg" },
  { key: "contact.directions.car", type: "text", category: "Kontakt", label: "Auto Titel" },
  { key: "contact.directions.carParking", type: "text", category: "Kontakt", label: "Parken Info" },
  { key: "contact.directions.carTip", type: "text", category: "Kontakt", label: "Park-Tipp" },
  { key: "contact.directions.onSite", type: "text", category: "Kontakt", label: "Vor Ort Titel" },
  { key: "contact.directions.onSite1", type: "text", category: "Kontakt", label: "Vor Ort 1" },
  { key: "contact.directions.onSite2", type: "text", category: "Kontakt", label: "Vor Ort 2" },
  { key: "contact.directions.onSite3", type: "text", category: "Kontakt", label: "Vor Ort 3" },

  // ===== Kontaktformular =====
  { key: "contactForm.title", type: "text", category: "Kontaktformular", label: "Titel" },
  { key: "contactForm.name", type: "text", category: "Kontaktformular", label: "Name Label" },
  { key: "contactForm.email", type: "text", category: "Kontaktformular", label: "E-Mail Label" },
  { key: "contactForm.message", type: "text", category: "Kontaktformular", label: "Nachricht Label" },
  { key: "contactForm.submit", type: "text", category: "Kontaktformular", label: "Senden Button" },
  { key: "contactForm.success", type: "text", category: "Kontaktformular", label: "Erfolgsmeldung" },
  { key: "contactForm.error", type: "text", category: "Kontaktformular", label: "Fehlermeldung" },
  { key: "contactForm.privacyNotice", type: "text", category: "Kontaktformular", label: "Datenschutz-Hinweis" },
  { key: "contactForm.privacyLink", type: "text", category: "Kontaktformular", label: "Datenschutz-Link Text" },

  // ===== Ebook =====
  { key: "ebook.headline", type: "text", category: "Ebook", label: "Headline" },
  { key: "ebook.subheadline", type: "text", category: "Ebook", label: "Subheadline" },
  { key: "ebook.title", type: "text", category: "Ebook", label: "Titel" },
  { key: "ebook.freeEbook", type: "text", category: "Ebook", label: "Freebie Label" },
  { key: "ebook.benefit1", type: "text", category: "Ebook", label: "Vorteil 1" },
  { key: "ebook.benefit2", type: "text", category: "Ebook", label: "Vorteil 2" },
  { key: "ebook.benefit3", type: "text", category: "Ebook", label: "Vorteil 3" },
  { key: "ebook.benefit4", type: "text", category: "Ebook", label: "Vorteil 4" },
  { key: "ebook.name", type: "text", category: "Ebook", label: "Name Label" },
  { key: "ebook.email", type: "text", category: "Ebook", label: "E-Mail Label" },
  { key: "ebook.namePlaceholder", type: "text", category: "Ebook", label: "Name Placeholder" },
  { key: "ebook.emailPlaceholder", type: "text", category: "Ebook", label: "E-Mail Placeholder" },
  { key: "ebook.download", type: "text", category: "Ebook", label: "Download Button" },
  { key: "ebook.sending", type: "text", category: "Ebook", label: "Senden Status" },
  { key: "ebook.done", type: "text", category: "Ebook", label: "Fertig Status" },
  { key: "ebook.success", type: "text", category: "Ebook", label: "Erfolgsmeldung" },
  { key: "ebook.privacyNote", type: "text", category: "Ebook", label: "Datenschutz vor Link" },
  { key: "ebook.privacyNoteAfter", type: "text", category: "Ebook", label: "Datenschutz nach Link" },
  { key: "ebook.image", type: "image", category: "Ebook", label: "Ebook Mockup Bild" },

  // ===== Footer =====
  { key: "footer.contact", type: "text", category: "Footer", label: "Kontakt Label" },
  { key: "footer.imprint", type: "text", category: "Footer", label: "Impressum Label" },
  { key: "footer.privacy", type: "text", category: "Footer", label: "Datenschutz Label" },
  { key: "footer.terms", type: "text", category: "Footer", label: "AGB Label" },
  { key: "footer.rights", type: "text", category: "Footer", label: "Copyright" },

  // ===== Navigation =====
  { key: "nav.coaching", type: "text", category: "Navigation", label: "Nav: Coaching" },
  { key: "nav.familienaufstellung", type: "text", category: "Navigation", label: "Nav: Familienaufstellung" },
  { key: "nav.ueber", type: "text", category: "Navigation", label: "Nav: Über mich" },
  { key: "nav.ebook", type: "text", category: "Navigation", label: "Nav: E-Book" },
  { key: "nav.kontakt", type: "text", category: "Navigation", label: "Nav: Kontakt" },
  { key: "nav.anfahrt", type: "text", category: "Navigation", label: "Nav: Anfahrt" },
  { key: "nav.termin", type: "text", category: "Navigation", label: "Nav: Termin" },
  { key: "nav.contact", type: "text", category: "Navigation", label: "Nav: Contact (CTA)" },

  // ===== CTAs =====
  { key: "cta.bookNow", type: "text", category: "CTAs (global)", label: "Jetzt buchen" },
  { key: "cta.bookNowMicrocopy", type: "text", category: "CTAs (global)", label: "Jetzt buchen Microcopy" },
  { key: "cta.learnMore", type: "text", category: "CTAs (global)", label: "Mehr erfahren" },

  // ===== Externe Links =====
  { key: "links.booking_url", type: "link", category: "Externe Links", label: "Orbnet Booking URL", fallback: "" },
  { key: "links.email", type: "link", category: "Externe Links", label: "E-Mail (mailto:)", fallback: "" },
  { key: "links.telegram", type: "link", category: "Externe Links", label: "Telegram URL", fallback: "" },
  { key: "links.instagram", type: "link", category: "Externe Links", label: "Instagram URL", fallback: "https://www.instagram.com/jona.fels" },
  { key: "links.linkedin", type: "link", category: "Externe Links", label: "LinkedIn URL", fallback: "" },
  { key: "links.facebook", type: "link", category: "Externe Links", label: "Facebook URL", fallback: "" },
].map((e) => ({ fallback: "", ...e } as CMSEntry));

export const cmsRegistryByKey: Record<string, CMSEntry> = Object.fromEntries(
  cmsRegistry.map((e) => [e.key, e])
);

export const cmsCategories = Array.from(
  new Set(cmsRegistry.map((e) => e.category))
);
