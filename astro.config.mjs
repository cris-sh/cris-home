// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "http://localhost:3000",
  prefetch: true,

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
      redirectToDefaultLocale: true,
    },
    fallback: {
      es: "en",
    },
  },

  adapter: vercel({
    imagesConfig: {
      domains: ["cris.ac"],
      sizes: [64, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    imageService: true,
  }),
});