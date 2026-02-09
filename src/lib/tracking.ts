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

/**
 * Initialisiert den dataLayer für GTM
 */
export const initDataLayer = (): void => {
  window.dataLayer = window.dataLayer || [];
};

/**
 * Lädt Google Tag Manager (Container)
 * GTM lädt dann GA4 basierend auf Consent-Status
 */
export const loadGTM = (): void => {
  if (document.querySelector(`script[src*="gtm.js?id=${GTM_ID}"]`)) {
    return; // Already loaded
  }

  initDataLayer();

  // GTM Script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  // GTM dataLayer push
  window.dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  // GTM noscript fallback (iframe)
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

/**
 * Lädt GA4 direkt (Fallback wenn GTM nicht genutzt)
 */
export const loadGA4 = (): void => {
  if (document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)) {
    return;
  }

  initDataLayer();

  // gtag.js Script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // gtag function
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

/**
 * Sendet Consent-Update an GTM/GA4
 */
export const updateConsent = (granted: boolean): void => {
  if (!window.gtag) return;

  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
};

/**
 * Setzt initialen Consent-Status (vor dem Laden)
 */
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
// EVENT TRACKING
// ==========================================

type EventParams = Record<string, string | number | boolean>;

/**
 * Generisches Event-Tracking
 */
export const trackEvent = (eventName: string, params?: EventParams): void => {
  if (!window.gtag) return;
  window.gtag("event", eventName, params);
};

/**
 * Button-Click Tracking
 */
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

/**
 * Link-Click Tracking
 */
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

/**
 * Form Submission Tracking
 */
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

/**
 * Form Field Interaction Tracking
 */
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

/**
 * Page View Tracking (SPA-Navigation)
 */
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  if (!window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle,
  });
};

/**
 * Scroll Tracking (25%, 50%, 75%, 100%)
 */
export const trackScrollDepth = (depth: number, pagePath: string): void => {
  trackEvent("scroll_depth", {
    scroll_depth: depth,
    page_path: pagePath,
  });
};

/**
 * CTA Click Tracking
 */
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

/**
 * Ebook Download Tracking
 */
export const trackEbookDownload = (email: string): void => {
  trackEvent("ebook_download", {
    method: "email_form",
  });
};

/**
 * Contact Form Start Tracking
 */
export const trackContactFormStart = (): void => {
  trackEvent("contact_form_start", {
    form_name: "main_contact_form",
  });
};

/**
 * Callback Request Tracking
 */
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
