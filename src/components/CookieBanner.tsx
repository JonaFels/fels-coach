import { useState, useEffect } from "react";
import { Cookie, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/contexts/LanguageContext";

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

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowPreferences(false);
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
        className="fixed bottom-4 left-4 z-50 p-3 bg-card border border-border rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        aria-label={t("cookie.settings")}
      >
        <Cookie className="h-5 w-5 text-foreground" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-in-right">
      {showPreferences ? (
        <div className="w-[350px] bg-card border border-border rounded-lg shadow-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">
              {t("cookie.title")}
            </h3>
            <button
              onClick={() => setShowPreferences(false)}
              className="p-1 hover:bg-muted rounded-md transition-colors"
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
      ) : (
        <div className="w-[350px] bg-card border border-border rounded-lg shadow-xl p-5">
          <div className="flex items-start gap-3 mb-4">
            <Cookie className="h-5 w-5 text-foreground mt-0.5 flex-shrink-0" />
            <p className="text-sm text-foreground">{t("cookie.text")}</p>
          </div>

          <div className="flex gap-2">
            <Button onClick={acceptAll} size="sm" className="flex-1">
              {t("cookie.accept")}
            </Button>
            <Button
              onClick={rejectAll}
              variant="outline"
              size="sm"
              className="flex-1"
            >
              {t("cookie.reject")}
            </Button>
          </div>

          <button
            onClick={() => setShowPreferences(true)}
            className="flex items-center justify-center gap-1.5 w-full mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Settings className="h-3.5 w-3.5" />
            {t("cookie.settings")}
          </button>
        </div>
      )}
    </div>
  );
};
