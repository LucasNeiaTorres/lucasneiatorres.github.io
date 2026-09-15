// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lucasneiatorres.github.io",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: "pt", locales: { pt: "pt-BR", en: "en" } } })],
  build: { inlineStylesheets: "always" },
  compressHTML: true,
});
