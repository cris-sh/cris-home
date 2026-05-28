import { c as createComponent } from './astro-component_Dsxwx2a8.mjs';
import 'piccolore';
import { T as createRenderInstruction, a3 as addAttribute, Q as renderTemplate, b5 as unescapeHTML } from './params-and-props_Cbg7M-DS.mjs';
import { r as renderComponent } from './entrypoint_Dx6hQ0Ol.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const SITE_TITLE = "Cristian Duarte | Software Developer";
const SITE_DESCRIPTION_EN = "Portfolio and blog of Cristian Duarte (enux). Software developer specializing in high-performance web applications, scalable architecture, and full-stack development with TypeScript, Go, and React.";
const SITE_DESCRIPTION_ES = "Portafolio y blog de Cristian Duarte (enux). Desarrollador de software especializado en aplicaciones web de alto rendimiento, arquitectura escalable y desarrollo full-stack con TypeScript, Go y React.";
const SITE_AUTHOR = "Cristian Duarte";

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/crus/dev/self/cris-home/node_modules/.pnpm/astro@6.3.8_@types+node@24.12.4_@vercel+functions@3.6.1_jiti@2.6.1_lightningcss@1.32.0_rollup@4.57.1_yaml@2.9.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/crus/dev/self/cris-home/node_modules/.pnpm/astro@6.3.8_@types+node@24.12.4_@vercel+functions@3.6.1_jiti@2.6.1_lightningcss@1.32.0_rollup@4.57.1_yaml@2.9.0/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, lang = "en", image = "/blog-placeholder-1.jpg", articleDate } = Astro2.props;
  const description = Astro2.props.description || (lang === "es" ? SITE_DESCRIPTION_ES : SITE_DESCRIPTION_EN);
  const schema = {
    "@context": "https://schema.org",
    "@type": articleDate ? "BlogPosting" : "WebSite",
    "name": title,
    "description": description,
    "url": canonicalURL,
    "author": {
      "@type": "Person",
      "name": SITE_AUTHOR,
      "url": Astro2.site
    },
    ...articleDate && {
      "datePublished": articleDate.toISOString(),
      "image": new URL(image, Astro2.url).toString()
    }
  };
  return renderTemplate(_a || (_a = __template(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"', "", '><meta name="generator"', '><meta name="author"', '><meta name="keywords"', '><meta name="robots" content="index, follow"><!-- Canonical URL --><link rel="canonical"', '><!-- Font preloads --><link rel="preload" href="/fonts/Geist-Regular.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="/fonts/Geist-Bold.ttf" as="font" type="font/ttf" crossorigin><!-- JSON-LD --><script type="application/ld+json">', "<\/script><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><script>\n  (() => {\n    const STORAGE_KEY = "theme-preference";\n    const root = document.documentElement;\n    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");\n\n    const getStoredPreference = () => {\n      const stored = localStorage.getItem(STORAGE_KEY);\n      if (stored === "light" || stored === "dark" || stored === "system") {\n        return stored;\n      }\n      return "system";\n    };\n\n    const resolveTheme = (preference) => {\n      if (preference === "system") {\n        return mediaQuery.matches ? "dark" : "light";\n      }\n      return preference;\n    };\n\n    const applyTheme = (preference, persist = false) => {\n      const resolvedTheme = resolveTheme(preference);\n      root.setAttribute("data-theme", resolvedTheme);\n      root.setAttribute("data-theme-preference", preference);\n      root.style.colorScheme = resolvedTheme;\n\n      if (persist) {\n        localStorage.setItem(STORAGE_KEY, preference);\n      }\n\n      window.dispatchEvent(\n        new CustomEvent("theme:changed", {\n          detail: { preference, resolvedTheme },\n        }),\n      );\n    };\n\n    const setThemePreference = (preference) => {\n      if (!["light", "dark", "system"].includes(preference)) {\n        return;\n      }\n      applyTheme(preference, true);\n    };\n\n    window.__theme = {\n      getPreference: getStoredPreference,\n      setPreference: setThemePreference,\n      applyStoredTheme: () => applyTheme(getStoredPreference(), false),\n    };\n\n    applyTheme(getStoredPreference(), false);\n\n    mediaQuery.addEventListener("change", () => {\n      if (getStoredPreference() === "system") {\n        applyTheme("system", false);\n      }\n    });\n\n    document.addEventListener("astro:after-swap", () => {\n      applyTheme(getStoredPreference(), false);\n    });\n  })();\n<\/script>', "", ""])), addAttribute(SITE_TITLE, "title"), addAttribute(new URL("rss.xml", Astro2.site), "href"), addAttribute(Astro2.generator, "content"), addAttribute(SITE_AUTHOR, "content"), addAttribute(lang === "es" ? "Cristian Duarte, enux, Desarrollador, Desarrollador de Software, Software Developer, Full Stack Developer, TypeScript, Go, React, AlquiPC, Portafolio, Blog, Colombia" : "Cristian Duarte, enux, Software Developer, Software Developer, Full Stack Developer, TypeScript, Go, React, AlquiPC, Portfolio, Blog, Colombia", "content"), addAttribute(canonicalURL, "href"), unescapeHTML(JSON.stringify(schema)), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderScript($$result, "/Users/crus/dev/self/cris-home/src/components/BaseHead.astro?astro&type=script&index=0&lang.ts"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}));
}, "/Users/crus/dev/self/cris-home/src/components/BaseHead.astro", void 0);

const languages = {
  en: "english",
  es: "español"
};
const defaultLang = "en";
const ui = {
  en: {
    "nav.home": "home",
    "nav.projects": "projects",
    "nav.blog": "blog",
    "nav.twitter": "twitter",
    "nav.theme.label": "theme",
    "nav.theme.system": "system",
    "nav.theme.light": "light",
    "nav.theme.dark": "dark",
    "home.name": "cristian",
    "home.title": "software engineer",
    "home.about": [
      "I am a Software Engineer focused on building high-performance applications and scalable systems. My expertise covers the full development lifecycle, from system architecture and backend APIs to intuitive user interfaces.",
      "I specialize in modern technologies like TypeScript, Go, and React, always striving for technical excellence and efficient problem-solving."
    ],
    "home.learnMore": "want to learn more?",
    "resume.name": "Cristian Duarte",
    "resume.description": "Software Engineer",
    "resume.about": [
      "Pragmatic Software Engineer with a focus on building robust, scalable applications. Expertise in TypeScript, Go, and React, with a strong foundation in system architecture and API design."
    ],
    "resume.experience": [
      {
        company: "Papyrus",
        position: "Software Engineer",
        period: "Jan 2025 - Present",
        description: "Engineering backend systems with Go/Fiber for monitoring applications and business tools. Designing and implementing APIs, developing frontend solutions with Remix, implementing real-time data processing, and integrating payment systems through Stripe for client subscriptions."
      }
    ],
    "resume.education": [
      {
        institution: "SENA",
        degree: "Associate's Degree in Software Analysis and Development",
        period: "2024 - 2026"
      }
    ]
  },
  es: {
    "nav.home": "inicio",
    "nav.projects": "proyectos",
    "nav.blog": "blog",
    "nav.theme.label": "tema",
    "nav.theme.system": "sistema",
    "nav.theme.light": "claro",
    "nav.theme.dark": "oscuro",
    "home.title": "ingeniero de software",
    "home.about": [
      "Soy Ingeniero de Software enfocado en construir aplicaciones de alto rendimiento y sistemas escalables. Mi experiencia cubre todo el ciclo de desarrollo, desde la arquitectura de sistemas y APIs backend hasta interfaces de usuario intuitivas.",
      "Me especializo en tecnologías modernas como TypeScript, Go y React, siempre buscando la excelencia técnica y la resolución eficiente de problemas."
    ],
    "home.learnMore": "¿quieres saber más?",
    "resume.description": "Ingeniero de Software",
    "resume.about": [
      "Ingeniero de Software pragmático enfocado en construir aplicaciones robustas y escalables. Experto en TypeScript, Go y React, con una sólida base en arquitectura de sistemas y diseño de APIs."
    ],
    "resume.experience": [
      {
        company: "Papyrus",
        position: "Ingeniero de Software",
        period: "Ene 2025 - Presente",
        description: "Ingeniería de sistemas backend con Go/Fiber para aplicaciones de monitoreo y herramientas de negocio. Diseño e implementación de APIs, desarrollo de soluciones frontend con Remix, implementación de procesamiento de datos en tiempo real e integración de sistemas de pago mediante Stripe para suscripciones de clientes."
      }
    ],
    "resume.education": [
      {
        institution: "SENA",
        degree: "Tecnologo en Análisis y Desarrollo de Software",
        period: "2024 - 2026"
      }
    ]
  }
};

function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}
function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export { $$BaseHead as $, SITE_TITLE as S, getLangFromUrl as g, languages as l, renderScript as r, useTranslations as u };
