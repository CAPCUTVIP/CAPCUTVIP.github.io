import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base path for GitHub Pages root domain (capcutvip.github.io)
  base: process.env.NODE_ENV === 'production' ? "/" : "/",

  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    // Add SPA fallback configuration
    historyApiFallback: true,
    // Enable all hosts for Replit proxy
    allowedHosts: true,
  },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Use default esbuild minifier (safer than terser)
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    }
  },

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));