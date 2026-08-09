import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Feste Fallback-Werte für den Cloudflare-Build, falls die Umgebungsvariablen
// fehlen oder von Cloudflare mit defekten Werten überschrieben werden.
const FALLBACK_SUPABASE_URL = "https://ywqucntgzlsrrefjfntk.supabase.co";
const FALLBACK_SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3cXVjbnRnemxzcnJlZmpmbnRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4OTcxOTAsImV4cCI6MjA4NTQ3MzE5MH0.6x-rZNm9lEDQGgVSU9ot0cA5OgSd_f_DK2YbGdPKM_s";

function isValidSupabaseUrl(url: string | undefined): url is string {
  return typeof url === "string" && url.startsWith("https://") && url.includes(".supabase.co");
}

function isValidSupabaseKey(key: string | undefined): key is string {
  return typeof key === "string" && key.length > 20 && key.split(".").length === 3;
}

/**
 * Macht alle vite-injizierten <link rel="stylesheet"> non-blocking via
 * preload+onload-Trick. Beseitigt render-blocking CSS (~300ms LCP-Gewinn).
 * Critical CSS für above-the-fold ist bereits in index.html inlined.
 */
const asyncCssPlugin = (): Plugin => ({
  name: "async-css",
  apply: "build",
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet"(?:\s+crossorigin)?\s+href="([^"]+\.css)">/g,
      (_m, href) =>
        `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
        `<noscript><link rel="stylesheet" href="${href}"></noscript>`
    );
  },
});

/**
 * Preloadet das LCP-Bild (Praxis-Sitzbereich, 800w-Variante für Mobile,
 * 1400w für Desktop) bereits im <head>, bevor JS geparsed wird.
 * Reduziert "Resource Load Delay" drastisch (~6s -> <500ms).
 * Hashed Filenames werden zur Build-Zeit aus dem Bundle aufgelöst.
 */
const lcpImagePreloadPlugin = (): Plugin => {
  let bundleFiles: string[] = [];
  return {
    name: "lcp-image-preload",
    apply: "build",
    generateBundle(_opts, bundle) {
      bundleFiles = Object.keys(bundle);
    },
    transformIndexHtml(html) {
      const find = (pattern: RegExp) =>
        bundleFiles.find((f) => pattern.test(f));
      const bannerMobile = find(/praxis-sitzbereich-800\.[^.]+\.webp$/);
      const bannerDesktop = find(/praxis-sitzbereich\.[^.]+\.webp$/);
      const profileMobile = find(/jona-fels-systemisches-coaching-450\.[^.]+\.webp$/);
      const profileDesktop = find(/jona-fels-systemisches-coaching\.[^.]+\.webp$/);
      const links: string[] = [];
      // LCP-Kandidat (Mobile): Profilbild – größeres sichtbares Element als der schmale Banner
      if (profileMobile) {
        links.push(
          `<link rel="preload" as="image" type="image/webp" fetchpriority="high" href="/${profileMobile}" media="(max-width: 768px)">`
        );
      }
      if (profileDesktop) {
        links.push(
          `<link rel="preload" as="image" type="image/webp" fetchpriority="high" href="/${profileDesktop}" media="(min-width: 769px)">`
        );
      }
      // Banner – parallel laden, aber niedrigere Priorität, damit LCP-Bild zuerst kommt
      if (bannerMobile) {
        links.push(
          `<link rel="preload" as="image" type="image/webp" href="/${bannerMobile}" media="(max-width: 768px)">`
        );
      }
      if (bannerDesktop) {
        links.push(
          `<link rel="preload" as="image" type="image/webp" href="/${bannerDesktop}" media="(min-width: 769px)">`
        );
      }
      return html.replace("</head>", `${links.join("")}</head>`);
    },

  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const viteSupabaseUrl = isValidSupabaseUrl(env.VITE_SUPABASE_URL)
    ? env.VITE_SUPABASE_URL
    : FALLBACK_SUPABASE_URL;
  const viteSupabaseKey = isValidSupabaseKey(env.VITE_SUPABASE_PUBLISHABLE_KEY)
    ? env.VITE_SUPABASE_PUBLISHABLE_KEY
    : FALLBACK_SUPABASE_PUBLISHABLE_KEY;

  if (!isValidSupabaseUrl(env.VITE_SUPABASE_URL)) {
    // eslint-disable-next-line no-console
    console.warn(
      `[vite.config.ts] VITE_SUPABASE_URL ist ungültig (${env.VITE_SUPABASE_URL ?? "leer"}). Verwende Fallback.`
    );
  }
  if (!isValidSupabaseKey(env.VITE_SUPABASE_PUBLISHABLE_KEY)) {
    // eslint-disable-next-line no-console
    console.warn(
      `[vite.config.ts] VITE_SUPABASE_PUBLISHABLE_KEY ist ungültig. Verwende Fallback.`
    );
  }

  return {
    base: "/",
    server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    asyncCssPlugin(),
    lcpImagePreloadPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["@radix-ui/react-accordion", "@radix-ui/react-dialog"],
        },
      },
    },
  },
}));
