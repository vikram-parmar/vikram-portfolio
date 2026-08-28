import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fallbackPages, ROOT_PLACEHOLDER, rootWith } from "./script/seo-fallback";

/**
 * Injects a readable static version of each page into `<div id="root">` so a
 * plain fetch (crawlers, AI assistants, no-JS browsers) returns real content.
 * React replaces it on mount. See script/seo-fallback.ts.
 */
function seoStaticFallback(): Plugin {
  return {
    name: "seo-static-fallback",
    transformIndexHtml(html) {
      return html.replace(ROOT_PLACEHOLDER, rootWith(fallbackPages.home.html));
    },
    closeBundle() {
      const outDir = path.resolve(import.meta.dirname, "dist/public");
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const built = fs.readFileSync(indexPath, "utf-8");
      const r = fallbackPages.resume;
      const resumeHtml = built
        .replace(rootWith(fallbackPages.home.html), rootWith(r.html))
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${r.title}</title>`)
        .replace(
          /(<meta name="description" content=")[\s\S]*?(")/,
          `$1${r.description}$2`,
        )
        .replace(
          /(<link rel="canonical" href=")[^"]*(")/,
          `$1${r.canonical}$2`,
        )
        .replace(
          /(<meta property="og:url" content=")[^"]*(")/,
          `$1${r.canonical}$2`,
        );
      fs.writeFileSync(path.join(outDir, r.outFile), resumeHtml);
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    seoStaticFallback(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  envDir: path.resolve(import.meta.dirname), // Load .env from project root (not client/)
  server: {
    port: parseInt(process.env.PORT || "5000", 10),
    strictPort: true,
    host: "0.0.0.0",
    fs: {
      strict: true,
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-query", "wouter", "framer-motion"],
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
