import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // keep this as root
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});