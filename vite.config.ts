import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// SPA fallback: serve index.html for client routes so direct URLs and refresh work
function spaFallback() {
  return {
    name: "spa-fallback",
    configureServer(server: { middlewares: { use: (fn: (req: any, res: any, next: () => void) => void) => void } }) {
      server.middlewares.use((req: { url?: string }, _res: unknown, next: () => void) => {
        const url = req.url ?? "";
        // Let through root, assets, and file requests (has extension or starts with /@/node_modules)
        if (url === "/" || url.startsWith("/@") || url.includes(".")) {
          return next();
        }
        (req as { url: string }).url = "/index.html";
        next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), spaFallback(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
