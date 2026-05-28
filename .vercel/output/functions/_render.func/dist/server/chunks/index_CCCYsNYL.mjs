import { c as createComponent } from './astro-component_Dsxwx2a8.mjs';
import 'piccolore';
import { Q as renderTemplate, a3 as addAttribute, b2 as renderHead } from './params-and-props_Cbg7M-DS.mjs';
import { r as renderComponent } from './entrypoint_Dx6hQ0Ol.mjs';
import { l as languages, $ as $$BaseHead, S as SITE_TITLE } from './utils_jRNPvYGi.mjs';
import { g as getCollection } from './_astro_content_KeodY1Xa.mjs';
import { $ as $$FormattedDate } from './FormattedDate_TmCGXNfe.mjs';
import { a as $$Footer, $ as $$NavBar } from './Footer_shDKzyjC.mjs';
import { $ as $$Image } from './_astro_assets_Bks5SJ1f.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
async function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({ params: { lang } }));
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const projects = (await getCollection("projects", (project) => {
    const matches = lang === "es" ? project.id.startsWith("es/") || project.data.lang === "es" : project.id.startsWith("en/") || !project.data.lang || project.data.lang === "en";
    return matches;
  })).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const getSlug = (id) => {
    const parts = id.split("/");
    return parts.length > 1 ? parts[1] : id;
  };
  function getTagColor(tag) {
    const colors = {
      css: "bg-blue-300",
      html: "bg-orange-300",
      javascript: "bg-yellow-300",
      typescript: "bg-blue-400",
      python: "bg-green-300",
      dart: "bg-blue-500",
      java: "bg-red-500",
      csharp: "bg-purple-500",
      "c++": "bg-blue-600",
      go: "bg-green-400",
      rust: "bg-orange-400",
      php: "bg-blue-200",
      kotlin: "bg-green-200"
    };
    return colors[tag.toLowerCase()] || "bg-gray-300";
  }
  return renderTemplate(_a || (_a = __template(["<html", "> <head>", "", '</head> <body class="theme-page"> ', ' <main class="max-w-5xl mx-auto px-6 pt-24 md:pt-32 pb-24"> <div class="mb-16 flex flex-col items-center text-center"> <h1 class="text-5xl font-bold mb-6 tracking-tight theme-heading"> ', ' </h1> <p class="theme-muted mb-10 max-w-2xl text-lg leading-relaxed"> ', ' </p> <div class="w-full max-w-2xl flex flex-col md:flex-row gap-4 items-center"> <div class="relative w-full group"> <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[var(--color-muted)] group-focus-within:text-[var(--color-heading)] transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg> </div> <input type="text" id="project-search"', ` aria-label="Search projects" class="w-full pl-12 pr-4 py-4 rounded-full theme-input transition-all backdrop-blur-md shadow-2xl"> </div> <div class="flex items-center gap-3 px-6 py-4 rounded-full theme-panel whitespace-nowrap"> <input type="checkbox" id="sort-newest" checked class="w-5 h-5 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] checked:bg-[var(--color-heading)] focus:ring-0 focus:ring-offset-0 transition-all cursor-pointer appearance-none checked:border-transparent relative after:content-[''] after:hidden checked:after:block after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-[var(--color-background)] after:rounded-full"> <label for="sort-newest" class="text-sm font-medium theme-muted cursor-pointer select-none"> `, ' </label> </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-list"> ', " </div> </main> <script", ">\n        const lang = document.currentScript.dataset.lang;\n        const searchInput = document.getElementById('project-search');\n        const projectsList = document.getElementById('projects-list');\n        const projectItems = document.querySelectorAll('.project-item');\n        const sortCheckbox = document.getElementById('sort-newest');\n\n        searchInput?.addEventListener('input', (e) => {\n            const query = e.target.value.toLowerCase();\n            projectItems.forEach(item => {\n                const title = item.getAttribute('data-title');\n                const description = item.getAttribute('data-description');\n                const tags = item.getAttribute('data-tags');\n                \n                if (title.includes(query) || description.includes(query) || tags.includes(query)) {\n                    item.style.display = 'flex';\n                } else {\n                    item.style.display = 'none';\n                }\n            });\n        });\n\n        sortCheckbox?.addEventListener('change', (e) => {\n            const items = Array.from(projectItems);\n            items.sort((a, b) => {\n                const dateA = parseInt(a.getAttribute('data-date'));\n                const dateB = parseInt(b.getAttribute('data-date'));\n                return e.target.checked ? dateB - dateA : dateA - dateB;\n            });\n            \n            items.forEach(item => projectsList?.appendChild(item));\n        });\n    <\/script> ", " </body></html>"])), addAttribute(lang, "lang"), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${SITE_TITLE} | ${lang === "es" ? "Proyectos" : "Projects"}`, "lang": lang }), renderHead(), renderComponent($$result, "NavBar", $$NavBar, {}), lang === "es" ? "Proyectos" : "Projects", lang === "es" ? "Una selección de proyectos en los que he trabajado, que van desde aplicaciones web hasta herramientas especializadas y experimentos digitales." : "A selection of projects I've worked on, ranging from web applications to specialized tooling and digital experiments.", addAttribute(lang === "es" ? "Buscar proyectos..." : "Search projects...", "placeholder"), lang === "es" ? "Ordenar por más reciente" : "Sort by newest", projects.map((project, i) => renderTemplate`<div${addAttribute(`project-item group relative theme-panel rounded-3xl overflow-hidden hover:bg-[var(--color-overlay)] transition-all duration-500 flex flex-col reveal reveal-delay-${Math.min(i + 1, 5)}`, "class")}${addAttribute(project.data.title.toLowerCase(), "data-title")}${addAttribute(project.data.description.toLowerCase(), "data-description")}${addAttribute(project.data.tags.join(", "), "data-tags")}${addAttribute(project.data.date.valueOf().toString(), "data-date")}> <a${addAttribute(`/${lang}/projects/${getSlug(project.id)}/`, "href")} class="flex flex-col h-full"> ${project.data.heroImage && renderTemplate`<div class="h-64 overflow-hidden relative"> ${renderComponent($$result, "Image", $$Image, { "src": project.data.heroImage, "alt": project.data.title, "class": "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700", "width": 800, "height": 450 })} <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> </div>`} <div class="p-8 flex flex-col flex-1"> <div class="flex flex-wrap gap-2 mb-4"> ${project.data.tags.map((tag) => renderTemplate`<span${addAttribute(`px-2 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest ${getTagColor(tag)} text-black`, "class")}> ${tag} </span>`)} </div> <h3 class="text-2xl font-bold mb-3 theme-heading group-hover:text-indigo-400 transition-colors"> ${project.data.title} </h3> <p class="theme-muted text-sm leading-relaxed mb-6 flex-1"> ${project.data.description} </p> <div class="flex items-center justify-between mt-auto"> <div class="theme-muted text-[10px] uppercase tracking-widest font-bold"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": project.data.date, "lang": lang })} </div> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[var(--color-muted)] group-hover:text-[var(--color-heading)] transition-all transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </div> </a> </div>`), addAttribute(lang, "data-lang"), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/crus/dev/self/cris-home/src/pages/[lang]/projects/index.astro", void 0);

const $$file = "/Users/crus/dev/self/cris-home/src/pages/[lang]/projects/index.astro";
const $$url = "/[lang]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
