import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import svgrPlugin from "vite-plugin-svgr";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

const src = (path: string) =>
  fileURLToPath(new URL(`./src/${path}`, import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      "@": src(""),
      "@app": src("app"),
      "@assets": src("assets"),
      "@entities": src("entities"),
      "@features": src("features"),
      "@pages": src("pages"),
      "@shared": src("shared"),
      "@widgets": src("widgets"),
    },
  },
});
