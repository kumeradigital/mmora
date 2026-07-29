import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://planrescatemovil.cl",
  output: "static",
  integrations: [sitemap()],
});
