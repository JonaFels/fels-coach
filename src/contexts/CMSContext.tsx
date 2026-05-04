import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { cmsRegistryByKey } from "@/cms/registry";

interface CMSRow {
  key: string;
  value: string;
  type: string;
  category: string;
}

type CMSMap = Record<string, CMSRow>;

interface CMSContextType {
  rows: CMSMap;
  loading: boolean;
  refresh: () => Promise<void>;
  /** Text-Override für gegebenen Key, oder undefined */
  getText: (key: string) => string | undefined;
  /** Bild-URL für Key, mit Fallback */
  getImage: (key: string, fallback?: string) => string;
  /** Link-URL für Key, mit Fallback */
  getLink: (key: string, fallback?: string) => string;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rows, setRows] = useState<CMSMap>({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("key, value, type, category");

      if (error) throw error;

      const map: CMSMap = {};
      (data || []).forEach((row) => {
        map[row.key] = row as CMSRow;
      });
      setRows(map);
    } catch (err) {
      console.error("CMS load failed, falling back to defaults:", err);
      setRows({});
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // CMS-Daten sind nicht kritisch für LCP – alle Komponenten haben Fallbacks.
    // Verschieben hinter den Initial-Paint, damit Supabase nicht im kritischen
    // Anfragepfad landet (PageSpeed: Netzwerkabhängigkeitsbaum).
    const w = window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => load(), { timeout: 2500 });
      return () => {
        const cancel = (window as unknown as { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
        cancel?.(id);
      };
    }
    const t = window.setTimeout(load, 1500);
    return () => window.clearTimeout(t);
  }, [load]);

  const getText = useCallback(
    (key: string) => {
      const row = rows[key];
      if (row && row.type === "text" && row.value) return row.value;
      return undefined;
    },
    [rows]
  );

  const getImage = useCallback(
    (key: string, fallback = "") => {
      const row = rows[key];
      if (row && row.type === "image" && row.value) return row.value;
      return fallback || cmsRegistryByKey[key]?.fallback || "";
    },
    [rows]
  );

  const getLink = useCallback(
    (key: string, fallback = "") => {
      const row = rows[key];
      if (row && row.type === "link" && row.value) return row.value;
      return fallback || cmsRegistryByKey[key]?.fallback || "";
    },
    [rows]
  );

  return (
    <CMSContext.Provider value={{ rows, loading, refresh: load, getText, getImage, getLink }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = (): CMSContextType => {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error("useCMS must be used within CMSProvider");
  return ctx;
};
