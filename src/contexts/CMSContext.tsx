import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

type CMSMap = Record<string, string>;

interface CMSContextType {
  overrides: CMSMap;
  loading: boolean;
  refresh: () => Promise<void>;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [overrides, setOverrides] = useState<CMSMap>({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("site_content")
        .select("key, value");

      if (error) throw error;

      const map: CMSMap = {};
      (data || []).forEach((row) => {
        map[row.key] = row.value;
      });
      setOverrides(map);
    } catch (err) {
      console.error("CMS load failed, falling back to translations.ts:", err);
      setOverrides({});
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <CMSContext.Provider value={{ overrides, loading, refresh: load }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = (): CMSContextType => {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error("useCMS must be used within CMSProvider");
  return ctx;
};
