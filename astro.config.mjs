// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      remarkPlugins: [],
      rehypePlugins: [],
      remarkRehype: {
        allowDangerousHtml: true,
      },
      gfm: true,
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    fallback: {
      es: "en",
    },
  },
});
