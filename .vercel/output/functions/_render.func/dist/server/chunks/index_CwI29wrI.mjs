import { c as createComponent } from './astro-component_Dsxwx2a8.mjs';
import 'piccolore';
import { a3 as addAttribute, b2 as renderHead, Q as renderTemplate, b3 as renderTransition } from './params-and-props_Cbg7M-DS.mjs';
import { r as renderComponent } from './entrypoint_BYUmlMOq.mjs';
import { l as languages, $ as $$BaseHead, S as SITE_TITLE } from './utils_CwLnSNHU.mjs';
import { g as getCollection } from './_astro_content_2Js21C2-.mjs';
import { $ as $$FormattedDate } from './FormattedDate_TmCGXNfe.mjs';
import { $ as $$NavBar, a as $$Footer } from './Footer_BtnseMrH.mjs';
import { $ as $$Image } from './_astro_assets_B7j4CIt5.mjs';

async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const posts = (await getCollection("blog", (post) => {
    const matches = lang === "es" ? post.id.startsWith("es/") || post.data.lang === "es" : post.id.startsWith("en/") || !post.data.lang || post.data.lang === "en";
    return matches;
  })).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const getSlug = (id) => {
    const parts = id.split("/");
    return parts.length > 1 ? parts[1] : id;
  };
  return renderTemplate`<html${addAttribute(lang, "lang")} data-astro-cid-hrno2mm7> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "lang": lang, "data-astro-cid-hrno2mm7": true })}${renderHead()}</head> <body class="theme-page" data-astro-cid-hrno2mm7> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-hrno2mm7": true })} <main class="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-20" data-astro-cid-hrno2mm7> <header class="mb-16 flex flex-col items-center text-center" data-astro-cid-hrno2mm7> <h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 theme-heading" data-astro-cid-hrno2mm7>Blog</h1> <p class="text-lg theme-muted max-w-2xl" data-astro-cid-hrno2mm7> ${lang === "es" ? "Ideas sobre ingeniería de software, diseño y creación de productos." : "Thoughts on software engineering, design, and building products."} </p> </header> ${posts.length < 1 ? renderTemplate`<div class="text-center py-16 backdrop-blur-md theme-panel rounded-2xl" data-astro-cid-hrno2mm7> <h2 class="text-xl mb-2 font-semibold theme-heading" data-astro-cid-hrno2mm7> ${lang === "es" ? "no se encontraron publicaciones" : "no blog posts found"} </h2> <p class="theme-muted" data-astro-cid-hrno2mm7> ${lang === "es" ? "vuelve pronto por nuevo contenido" : "check back soon for new content"} </p> </div>` : renderTemplate`<div class="space-y-12" data-astro-cid-hrno2mm7>  ${posts.length > 0 && renderTemplate`<div class="group relative theme-panel rounded-2xl overflow-hidden hover:bg-[var(--color-overlay)] transition-all duration-500 reveal reveal-delay-1" data-astro-cid-hrno2mm7> <a${addAttribute(`/${lang}/blog/${getSlug(posts[0].id)}/`, "href")} class="flex flex-col md:flex-row h-full" data-astro-cid-hrno2mm7> <div class="md:w-3/5 overflow-hidden" data-astro-cid-hrno2mm7> ${posts[0].data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": posts[0].data.heroImage, "alt": "", "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out", "height": 1080, "width": 1920, "draggable": "false", "data-astro-cid-hrno2mm7": true, "data-astro-transition-scope": renderTransition($$result, "ocspc2l3", "", `img-${getSlug(posts[0].id)}`) })}`} </div> <div class="p-8 md:w-2/5 flex flex-col justify-between" data-astro-cid-hrno2mm7> <div data-astro-cid-hrno2mm7> <div class="flex items-center gap-2 mb-4" data-astro-cid-hrno2mm7> <span class="px-2 py-1 text-[10px] uppercase tracking-widest font-bold theme-pill rounded" data-astro-cid-hrno2mm7> ${lang === "es" ? "Destacado" : "Featured"} </span> <div class="text-sm theme-muted" data-astro-cid-hrno2mm7> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": posts[0].data.date, "lang": lang, "data-astro-cid-hrno2mm7": true })} </div> </div> <h3 class="text-3xl md:text-4xl font-bold tracking-tight mb-4 theme-heading transition-colors" data-astro-cid-hrno2mm7> ${posts[0].data.title} </h3> <p class="theme-muted mb-6 line-clamp-4 text-base leading-relaxed" data-astro-cid-hrno2mm7> ${posts[0].data.description} </p> </div> <div class="flex items-center text-sm font-semibold theme-heading transition-colors" data-astro-cid-hrno2mm7> ${lang === "es" ? "Leer publicación" : "Read post"} <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-hrno2mm7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-hrno2mm7></path> </svg> </div> </div> </a> </div>`}  <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-hrno2mm7> ${posts.slice(1).map((post, i) => renderTemplate`<div${addAttribute(`group theme-panel rounded-2xl overflow-hidden hover:bg-[var(--color-overlay)] transition-all duration-500 reveal reveal-delay-${Math.min(i + 1, 5)}`, "class")} data-astro-cid-hrno2mm7> <a${addAttribute(`/${lang}/blog/${getSlug(post.id)}/`, "href")} class="flex flex-col h-full" data-astro-cid-hrno2mm7> ${post.data.heroImage && renderTemplate`<div class="overflow-hidden h-60" data-astro-cid-hrno2mm7> ${renderComponent($$result, "Image", $$Image, { "src": post.data.heroImage, "alt": "", "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out", "height": 720, "width": 1280, "draggable": "false", "data-astro-cid-hrno2mm7": true, "data-astro-transition-scope": renderTransition($$result, "c7amsyua", "", `img-${getSlug(post.id)}`) })} </div>`} <div class="p-6 flex flex-col flex-1" data-astro-cid-hrno2mm7> <div class="text-xs theme-muted mb-3 font-medium" data-astro-cid-hrno2mm7> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.date, "lang": lang, "data-astro-cid-hrno2mm7": true })} </div> <h3 class="text-xl font-bold tracking-tight mb-3 theme-heading transition-colors" data-astro-cid-hrno2mm7> ${post.data.title} </h3> <p class="theme-muted mb-6 line-clamp-2 text-sm leading-relaxed flex-1" data-astro-cid-hrno2mm7> ${post.data.description} </p> <div class="flex items-center text-sm font-semibold theme-heading transition-colors" data-astro-cid-hrno2mm7> ${lang === "es" ? "Leer publicación" : "Read post"} <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-hrno2mm7> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-hrno2mm7></path> </svg> </div> </div> </a> </div>`)} </div> </div>`} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-hrno2mm7": true })} </body></html>`;
}, "/Users/crus/dev/self/cris-home/src/pages/[lang]/blog/index.astro", "self");

const $$file = "/Users/crus/dev/self/cris-home/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
