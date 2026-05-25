import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
export default defineConfig(({ mode }) => ({
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
