import { useState, useEffect } from "react";
import { Cookie, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  setDefaultConsent,
  loadGTM,
  loadGA4,
  updateConsent,
  trackEvent,
} from "@/lib/tracking";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
};

const COOKIE_CONSENT_KEY = "fels-cookie-consent";

export const CookieBanner = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
  });

  // Set default consent on mount (before any tracking loads)
  useEffect(() => {
    setDefaultConsent();
  }, []);

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch {
      setIsVisible(true);
      return;
    }
    if (!consent) {
      setIsVisible(true);
    } else {
      try {
        const savedPrefs = JSON.parse(consent) as CookiePreferences;
        setPreferences(savedPrefs);
        if (savedPrefs.analytics) {
          loadGTM();
          loadGA4();
          updateConsent(true);
        }
      } catch {
        setIsVisible(true);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    } catch {
      // Die Auswahl gilt in diesem Fall nur für die aktuelle Sitzung.
    }
    setPreferences(prefs);
    setIsVisible(false);
    setShowPreferences(false);

    if (prefs.analytics) {
      loadGTM();
      loadGA4();
      updateConsent(true);
      trackEvent("consent_granted", { consent_type: "analytics" });
    } else {
      updateConsent(false);
      trackEvent("consent_denied", { consent_type: "analytics" });
    }
  };

  const acceptAll = () => {
    savePreferences({ necessary: true, analytics: true });
  };

  const rejectAll = () => {
    savePreferences({ necessary: true, analytics: false });
  };

  const openSettings = () => {
    setIsVisible(true);
    setShowPreferences(true);
  };

  if (!isVisible) {
    return (
      <button
        onClick={openSettings}
        className="fixed bottom-4 left-4 z-50 p-3 bg-card border border-border rounded-full shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-200 hover:scale-105"
        aria-label={t("cookie.settings")}
      >
        <Cookie className="h-5 w-5 text-foreground" />
      </button>
    );
  }

  return (
    <>
      {/* Compact preferences panel — floats above the slim bar */}
      {showPreferences && (
        <div className="fixed bottom-16 right-4 left-4 sm:left-auto z-50 w-auto sm:w-[350px] bg-card border border-border rounded-lg shadow-[var(--shadow-elevated)] p-5 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {t("cookie.title")}
            </h3>
            <button
              onClick={() => setShowPreferences(false)}
              className="p-1 hover:bg-muted rounded-md transition-colors"
              aria-label={t("cookie.settings")}
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Necessary Cookies */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {t("cookie.necessary")}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t("cookie.necessary.desc")}
                </p>
              </div>
              <Switch checked disabled className="mt-1" />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {t("cookie.analytics")}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t("cookie.analytics.desc")}
                </p>
              </div>
              <Switch
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, analytics: checked }))
                }
                className="mt-1"
              />
            </div>
          </div>

          <Button
            onClick={() => savePreferences(preferences)}
            className="w-full mt-5"
            size="sm"
          >
            {t("cookie.save")}
          </Button>
        </div>
      )}

      {/* Slim full-width consent bar — minimal height, sits flush at the bottom edge */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-card border-t border-border shadow-[var(--shadow-soft)] animate-bar-up">
        <div className="container mx-auto flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-2.5 sm:py-2">
          <div className="flex items-start gap-2.5 flex-1 min-w-0">
            <Cookie className="h-4 w-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
            <p className="text-xs leading-snug text-muted-foreground">
              {t("cookie.text")}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Button onClick={acceptAll} size="sm" className="h-8">
              {t("cookie.accept")}
            </Button>
            <Button
              onClick={rejectAll}
              variant="outline"
              size="sm"
              className="h-8"
            >
              {t("cookie.reject")}
            </Button>
            <button
              onClick={() => setShowPreferences(true)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label={t("cookie.settings")}
            >
              <Settings className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
