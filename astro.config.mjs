// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://cris.ac",
  prefetch: true,
  image: {
    remotePatterns: [{ protocol: "https", hostname: "i.imgur.com" }],
  },
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
    routing: {
      prefixDefaultLocale: true,
    },
    fallback: {
      es: "en",
    },
  },

  adapter: vercel({
    imageService: true,
  }),
});
