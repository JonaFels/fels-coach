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
        // ALLES FLACH - keine Unterordner
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
