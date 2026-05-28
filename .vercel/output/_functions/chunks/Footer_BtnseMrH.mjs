import { c as createComponent } from './astro-component_Dsxwx2a8.mjs';
import 'piccolore';
import { B as maybeRenderHead, a3 as addAttribute, ba as createTransitionScope, Q as renderTemplate } from './params-and-props_Cbg7M-DS.mjs';
import { g as getLocaleRelativeUrl, r as renderComponent } from './entrypoint_BYUmlMOq.mjs';
import { g as getLangFromUrl, l as languages, r as renderScript, u as useTranslations, S as SITE_TITLE } from './utils_CwLnSNHU.mjs';
import 'clsx';
import 'es-module-lexer';
import 'html-escaper';
import { $ as $$Image } from './_astro_assets_B7j4CIt5.mjs';

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "pathname-prefix-always";
        } else {
          strategy = "pathname-prefix-always-no-redirect";
        }
      } else {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      if (routing?.prefixDefaultLocale === true) {
        if (routing.redirectToDefaultLocale) {
          strategy = "domains-prefix-always";
        } else {
          strategy = "domains-prefix-always-no-redirect";
        }
      } else {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}

const i18n$1 = {
  defaultLocale: "en",
  locales: ["en","es"],
  routing: {"prefixDefaultLocale":true,"redirectToDefaultLocale":false},
  domains: undefined
};
const trailingSlash$1 = "ignore";
const build$1 = {
  format: "directory",
};

const config = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  build: build$1,
  i18n: i18n$1,
  trailingSlash: trailingSlash$1
}, Symbol.toStringTag, { value: 'Module' }));

const { trailingSlash, i18n, build } = config;
const { format } = build;
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const crisAvatar = new Proxy({"src":"/_astro/cris.FGzVkK2A.webp","width":2400,"height":2400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/crus/dev/self/cris-home/src/assets/cris.webp";
							}
							
							return target[name];
						}
					});

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NavBar;
  const currentPath = Astro2.url.pathname;
  const currentLang = getLangFromUrl(Astro2.url);
  const t = useTranslations(currentLang);
  const navItems = [
    {
      title: t("nav.home"),
      path: `/${currentLang}/`,
      id: "home",
      icon: "home"
    },
    {
      title: t("nav.projects"),
      path: `/${currentLang}/projects/`,
      id: "projects",
      icon: "code-bracket"
    },
    {
      title: t("nav.blog"),
      path: `/${currentLang}/blog/`,
      id: "blog",
      icon: "book"
    }
  ];
  function isActive(path) {
    if (path === getRelativeLocaleUrl(currentLang, "")) {
      return currentPath === path || currentPath === `/${currentLang}/`;
    }
    return currentPath.startsWith(path);
  }
  return renderTemplate`<!-- Desktop Navigation -->${maybeRenderHead()}<header class="fixed w-full z-50 top-8 lg:top-10 hidden md:flex justify-center px-4" data-astro-cid-jvr44bst${addAttribute(createTransitionScope($$result, "oy3scgs2"), "data-astro-transition-persist")}> <nav class="theme-nav-shell rounded-full flex flex-nowrap justify-between items-center px-4 lg:px-6 py-3 w-full max-w-3xl lg:max-w-4xl mx-auto shadow-2xl backdrop-blur-xl" data-astro-cid-jvr44bst> <div class="flex items-center gap-4 lg:gap-8 min-w-0" data-astro-cid-jvr44bst> <div class="font-bold text-xl" data-astro-cid-jvr44bst> <a${addAttribute(getRelativeLocaleUrl(currentLang, ""), "href")} class="block hover:scale-105 transition-transform" data-astro-cid-jvr44bst> ${renderComponent($$result, "Image", $$Image, { "src": crisAvatar, "alt": "Cristian's avatar", "class": "w-11 h-11 rounded-full theme-avatar-shell p-0.5", "draggable": "false", "loading": "eager", "data-astro-cid-jvr44bst": true })} </a> </div> <div class="flex items-center space-x-4 lg:space-x-8" id="desktop-nav" data-astro-cid-jvr44bst> ${navItems.map(({ title, path, id }) => renderTemplate`<a${addAttribute(path, "href")}${addAttribute(path, "data-path")}${addAttribute(id, "data-nav-id")}${addAttribute(`text-sm tracking-wide transition-all duration-300 nav-link ${isActive(path) ? "is-active" : ""}`, "class")} data-astro-cid-jvr44bst> ${title} </a>`)} </div> </div> <div class="flex items-center gap-2 lg:gap-3 shrink-0" data-astro-cid-jvr44bst> <div class="theme-panel-strong rounded-full p-1 hidden md:flex items-center gap-1" role="group"${addAttribute(t("nav.theme.label"), "aria-label")} data-theme-group data-astro-cid-jvr44bst> <button type="button" data-theme-option="system" class="theme-toggle-btn p-2 rounded-full transition-colors"${addAttribute(`${t("nav.theme.label")} ${t("nav.theme.system")}`, "aria-label")} data-astro-cid-jvr44bst> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jvr44bst> <rect x="3" y="4" width="18" height="12" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-jvr44bst></rect> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20h8M10 16v4M14 16v4" data-astro-cid-jvr44bst></path> </svg> </button> <button type="button" data-theme-option="light" class="theme-toggle-btn p-2 rounded-full transition-colors"${addAttribute(`${t("nav.theme.label")} ${t("nav.theme.light")}`, "aria-label")} data-astro-cid-jvr44bst> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jvr44bst> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364.707.707M5.636 5.636l.707.707m11.314 0-.707.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" data-astro-cid-jvr44bst></path> </svg> </button> <button type="button" data-theme-option="dark" class="theme-toggle-btn p-2 rounded-full transition-colors"${addAttribute(`${t("nav.theme.label")} ${t("nav.theme.dark")}`, "aria-label")} data-astro-cid-jvr44bst> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jvr44bst> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" data-astro-cid-jvr44bst></path> </svg> </button> </div> <!-- Language Selector for Desktop --> <div class="relative" data-astro-cid-jvr44bst> <button id="langToggle" class="flex items-center space-x-2 theme-link-muted hover:text-[var(--color-heading)] transition-colors duration-300 text-sm font-medium" data-astro-cid-jvr44bst> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jvr44bst> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-jvr44bst></path> </svg> <span class="uppercase font-bold text-indigo-400" data-astro-cid-jvr44bst>${currentLang}</span> </button> <div id="langDropdown" class="absolute right-0 mt-4 py-2 w-32 theme-panel-strong rounded-2xl hidden shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200" data-astro-cid-jvr44bst> ${Object.entries(languages).map(([code, label]) => renderTemplate`<a href="#"${addAttribute(code, "data-lang-code")}${addAttribute(`block px-4 py-2 text-sm hover:bg-[var(--color-overlay)] transition-colors lang-select-item ${currentLang === code ? "text-indigo-400 font-bold" : "theme-muted"}`, "class")} data-astro-cid-jvr44bst> ${label} </a>`)} </div> </div> </div> </nav> </header> <!-- Mobile Navigation --> <div class="fixed bottom-0 left-0 right-0 md:hidden z-50 px-6 pb-8 pt-4 pointer-events-none" data-astro-cid-jvr44bst${addAttribute(createTransitionScope($$result, "4gx2pctr"), "data-astro-transition-persist")}> <div class="theme-nav-shell rounded-3xl w-fit mx-auto px-3 py-2.5 flex items-center justify-center gap-1 shadow-2xl pointer-events-auto backdrop-blur-xl" id="mobile-nav" data-astro-cid-jvr44bst> <div class="flex items-center gap-1 min-w-0" data-astro-cid-jvr44bst> ${navItems.map(({ title, path, icon, id }) => renderTemplate`<a${addAttribute(path, "href")}${addAttribute(path, "data-path")}${addAttribute(id, "data-nav-id")}${addAttribute(`flex items-center justify-center p-2 rounded-xl transition-all nav-link-mobile ${isActive(path) ? "is-active" : ""}`, "class")}${addAttribute(title, "aria-label")} data-astro-cid-jvr44bst> ${icon === "home" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" data-astro-cid-jvr44bst> <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" data-astro-cid-jvr44bst></path> <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.03-.028.061-.056.091-.086L12 5.43z" data-astro-cid-jvr44bst></path> </svg>`} ${icon === "code-bracket" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" data-astro-cid-jvr44bst> <path fill-rule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clip-rule="evenodd" data-astro-cid-jvr44bst></path> </svg>`} ${icon === "book" && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" data-astro-cid-jvr44bst> <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" data-astro-cid-jvr44bst></path> </svg>`} </a>`)} </div> <div class="h-6 w-px bg-[var(--color-border)] opacity-60 mx-0.5" data-astro-cid-jvr44bst></div> <div class="flex items-center gap-0.5" data-astro-cid-jvr44bst> <button type="button" data-theme-cycle class="theme-toggle-btn-mobile p-2 rounded-xl transition-colors"${addAttribute(t("nav.theme.label"), "aria-label")} data-astro-cid-jvr44bst> <svg data-theme-cycle-icon="system" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-jvr44bst> <rect x="3" y="4" width="18" height="12" rx="2" ry="2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-jvr44bst></rect> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20h8M10 16v4M14 16v4" data-astro-cid-jvr44bst></path> </svg> </button> <!-- Mobile Language Selector --> <div class="relative" id="mobileLangSelector" data-astro-cid-jvr44bst> <button id="mobileLangToggle" class="flex items-center justify-center theme-link-muted hover:text-[var(--color-heading)] p-2 rounded-xl transition-colors" aria-label="Change language" data-astro-cid-jvr44bst> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5" data-astro-cid-jvr44bst> <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z" clip-rule="evenodd" data-astro-cid-jvr44bst></path> </svg> </button> <div id="mobileLangDropdown" class="absolute bottom-full mb-4 right-0 py-2 w-32 theme-panel-strong rounded-2xl hidden shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-2 duration-200" data-astro-cid-jvr44bst> ${Object.entries(languages).map(([code, label]) => renderTemplate`<a href="#"${addAttribute(code, "data-lang-code")}${addAttribute(`block px-4 py-2 text-sm hover:bg-[var(--color-overlay)] transition-colors lang-select-item ${currentLang === code ? "text-indigo-400 font-bold" : "theme-muted"}`, "class")} data-astro-cid-jvr44bst> ${label} </a>`)} </div> </div> </div> </div> </div> ${renderScript($$result, "/Users/crus/dev/self/cris-home/src/components/navigation/NavBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/crus/dev/self/cris-home/src/components/navigation/NavBar.astro", "self");

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-[var(--color-border)] mt-24"> <div class="max-w-5xl mx-auto px-6 py-12 md:py-16"> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div class="flex items-center gap-4"> <span class="text-sm text-[var(--color-muted)]">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE_TITLE} </span> </div> <div class="flex items-center gap-6"> <a href="https://github.com/cris-sh" target="_blank" rel="noopener noreferrer" class="text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors" aria-label="GitHub"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> </a> <a href="https://linkedin.com/in/enux" target="_blank" rel="noopener noreferrer" class="text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors" aria-label="LinkedIn"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <a href="/rss.xml" class="text-[var(--color-muted)] hover:text-[var(--color-heading)] transition-colors" aria-label="RSS Feed"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.479 3.29-3.293 3.29C1.479 24 0 22.521 0 20.71c0-1.816 1.479-3.295 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"></path> </svg> </a> </div> </div> </div> </footer>`;
}, "/Users/crus/dev/self/cris-home/src/components/Footer.astro", void 0);

export { $$NavBar as $, $$Footer as a };
