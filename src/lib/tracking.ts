/**
 * Zentrales Tracking-Modul für GTM & GA4
 * 
 * GTM Container ID: GTM-MKVCP7PV
 * GA4 Measurement ID: G-879GQ96R5G
 * 
 * Consent-First: Scripts werden nur nach Zustimmung geladen
 */

const GTM_ID = "GTM-MKVCP7PV";
const GA_MEASUREMENT_ID = "G-879GQ96R5G";

// Extend window type for tracking
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// ==========================================
// LANGUAGE HELPER
// ==========================================

/**
 * Returns current page language from the LanguageProvider state stored in DOM.
 * Falls back to 'de'.
 */
let _currentLanguage: "de" | "en" = "de";

export const setTrackingLanguage = (lang: "de" | "en"): void => {
  _currentLanguage = lang;
};

const getPageLanguage = (): string => _currentLanguage;

// ==========================================
// INITIALIZATION
// ==========================================

export const initDataLayer = (): void => {
  window.dataLayer = window.dataLayer || [];
};

export const loadGTM = (): void => {
  if (document.querySelector(`script[src*="gtm.js?id=${GTM_ID}"]`)) return;

  initDataLayer();

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
};

export const loadGA4 = (): void => {
  if (document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)) return;

  initDataLayer();

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
};

// ==========================================
// CONSENT
// ==========================================

export const updateConsent = (granted: boolean): void => {
  if (!window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

export const setDefaultConsent = (): void => {
  initDataLayer();
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });
};

// ==========================================
// CORE EVENT TRACKING
// ==========================================

type EventParams = Record<string, string | number | boolean>;

/**
 * Generisches Event-Tracking – fügt automatisch page_language hinzu.
 * Events werden nur gefeuert wenn gtag vorhanden (= Consent erteilt).
 */
export const trackEvent = (eventName: string, params?: EventParams): void => {
  if (!window.gtag) return;
  window.gtag("event", eventName, {
    page_language: getPageLanguage(),
    ...params,
  });
};

// ==========================================
// PAGE & SCROLL TRACKING
// ==========================================

export const trackPageView = (pagePath: string, pageTitle: string): void => {
  if (!window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle,
    page_language: getPageLanguage(),
  });
};

export const trackScrollDepth = (depth: number, pagePath: string): void => {
  trackEvent("scroll_depth", {
    scroll_depth: depth,
    page_path: pagePath,
  });
};

// ==========================================
// NAVIGATION & CTA TRACKING
// ==========================================

/**
 * Internes Navigations-Event (z.B. Button führt zu /angebote)
 */
export const trackNavToOffers = (buttonLocation: string): void => {
  trackEvent("nav_to_offers", {
    button_location: buttonLocation,
  });
};

/**
 * Externes Buchungs-Event (Button führt zu cal.com)
 */
export const trackCalendarBookingStart = (
  buttonLocation: string,
  destinationUrl: string
): void => {
  trackEvent("calendar_booking_start", {
    button_location: buttonLocation,
    destination_url: destinationUrl,
  });
};

export const trackCTAClick = (
  ctaName: string,
  ctaLocation: string,
  destinationUrl: string
): void => {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: ctaLocation,
    destination_url: destinationUrl,
  });
};

export const trackButtonClick = (
  buttonName: string,
  location: string,
  additionalParams?: EventParams
): void => {
  trackEvent("button_click", {
    button_name: buttonName,
    button_location: location,
    ...additionalParams,
  });
};

// ==========================================
// LINK TRACKING
// ==========================================

export const trackLinkClick = (
  linkText: string,
  linkUrl: string,
  location: string
): void => {
  trackEvent("link_click", {
    link_text: linkText,
    link_url: linkUrl,
    link_location: location,
  });
};

// ==========================================
// SOCIAL MEDIA TRACKING
// ==========================================

type SocialPlatform = "facebook" | "instagram" | "linkedin" | "whatsapp";

const SOCIAL_PATTERNS: Record<SocialPlatform, RegExp> = {
  facebook: /facebook\.com/i,
  instagram: /instagram\.com/i,
  linkedin: /linkedin\.com/i,
  whatsapp: /wa\.me/i,
};

/**
 * Erkennt die Social-Media-Plattform anhand der URL.
 */
export const detectSocialPlatform = (url: string): SocialPlatform | null => {
  for (const [platform, regex] of Object.entries(SOCIAL_PATTERNS)) {
    if (regex.test(url)) return platform as SocialPlatform;
  }
  return null;
};

/**
 * Feuert plattformspezifische Events: click_facebook, click_instagram, etc.
 */
export const trackSocialClick = (
  platform: SocialPlatform,
  destinationUrl: string
): void => {
  trackEvent(`click_${platform}`, {
    destination_url: destinationUrl,
  });
};

// ==========================================
// FORM TRACKING
// ==========================================

/**
 * Kontaktformular – nur bei erfolgreicher Validierung feuern!
 */
export const trackContactFormSubmit = (success: boolean): void => {
  if (!success) return; // Nur bei Erfolg feuern
  trackEvent("contact_form_submit", {
    form_name: "main_contact_form",
  });
};

/**
 * Rückruf-Anfrage – nur bei erfolgreicher Validierung feuern!
 */
export const trackCallbackRequestSubmit = (
  contactType: string,
  success: boolean
): void => {
  if (!success) return;
  trackEvent("callback_request_submit", {
    contact_type: contactType,
  });
};

/** @deprecated Use trackContactFormSubmit or trackCallbackRequestSubmit */
export const trackFormSubmit = (
  formName: string,
  success: boolean,
  additionalParams?: EventParams
): void => {
  trackEvent("form_submit", {
    form_name: formName,
    form_success: success,
    ...additionalParams,
  });
};

export const trackFormInteraction = (
  formName: string,
  fieldName: string,
  interactionType: "focus" | "blur" | "change"
): void => {
  trackEvent("form_interaction", {
    form_name: formName,
    field_name: fieldName,
    interaction_type: interactionType,
  });
};

export const trackEbookDownload = (email: string): void => {
  trackEvent("ebook_download", {
    method: "email_form",
  });
};

export const trackContactFormStart = (): void => {
  trackEvent("contact_form_start", {
    form_name: "main_contact_form",
  });
};

/** @deprecated Use trackCallbackRequestSubmit */
export const trackCallbackRequest = (contactType: string): void => {
  trackEvent("callback_request", {
    contact_type: contactType,
  });
};

// ==========================================
// EXPORT IDs for reference
// ==========================================
export const TRACKING_IDS = {
  GTM_ID,
  GA_MEASUREMENT_ID,
} as const;
