import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// SSG Routes for prerendering (use with vite-ssg or manual prerender setup)
// Routes to be generated as static HTML files:
// - /
// - /angebote
// - /familienaufstellung
// - /ebook
// - /kontakt
// - /ueber-mich
// - /datenschutz
// - /impressum
// - /agb
// - /blog

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Keine Minifizierung - lesbare Dateien
    minify: false,
    cssMinify: false,
    // Sourcemaps für Debugging
    sourcemap: true,
    rollupOptions: {
      output: {
        // Lesbare Dateinamen ohne Hash
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(assetInfo.name || '')) {
            return 'images/[name][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name || '')) {
            return 'fonts/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
