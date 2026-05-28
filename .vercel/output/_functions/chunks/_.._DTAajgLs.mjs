import { c as createComponent } from './astro-component_Dsxwx2a8.mjs';
import 'piccolore';
import { a3 as addAttribute, b2 as renderHead, Q as renderTemplate, b4 as renderSlot } from './params-and-props_Cbg7M-DS.mjs';
import { r as renderComponent } from './entrypoint_BYUmlMOq.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_2Js21C2-.mjs';
import { $ as $$BaseHead, l as languages } from './utils_CwLnSNHU.mjs';
import { $ as $$FormattedDate } from './FormattedDate_TmCGXNfe.mjs';
import { $ as $$NavBar, a as $$Footer } from './Footer_BtnseMrH.mjs';
import { $ as $$MDXContent } from './MDXContent_BUZgBXXX.mjs';
import { $ as $$Image } from './_astro_assets_B7j4CIt5.mjs';
import { $ as $$RoughBorder, a as $$Scribble } from './Scribble_BJdR6Gvj.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Projects;
  const {
    title,
    description,
    tags,
    date,
    updatedDate,
    heroImage,
    demoUrl,
    github,
    archived,
    lang = "en"
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="theme-page"> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto px-4 max-w-4xl pb-40 md:pb-8"> <article class="mt-12 md:mt-20"> <!-- Hero section --> <header class="text-center mb-12"> ${archived && renderTemplate`<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path> </svg> ${lang === "es" ? "Proyecto Archivado" : "Archived Project"} </div>`} <div class="flex flex-wrap items-center justify-center gap-3 mb-6"> <div class="px-3 py-1 rounded-full theme-pill text-sm"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": date, "lang": lang })} </div> ${updatedDate && renderTemplate`<div class="px-3 py-1 rounded-full theme-pill text-sm italic"> ${lang === "es" ? "Actualizado el " : "Updated: "} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "lang": lang })} </div>`} </div> <h1 class="text-5xl md:text-7xl font-bold tracking-tighter theme-heading mb-6 balance"> ${title} </h1> <p class="text-xl theme-muted max-w-2xl mx-auto mb-8 leading-relaxed"> ${description} </p> <div class="flex flex-wrap gap-2 justify-center mb-10"> ${tags.map((tag) => renderTemplate`<span class="px-2.5 py-0.5 rounded-md theme-pill text-xs font-medium"> ${tag} </span>`)} </div> <!-- Action buttons --> <div class="flex flex-wrap justify-center gap-4"> ${demoUrl && renderTemplate`<a${addAttribute(demoUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-100 text-zinc-950 font-semibold hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-zinc-100/10"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path> </svg> ${lang === "es" ? "Ver demostración" : "View Demo"} </a>`} ${github && renderTemplate`<a${addAttribute(github, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl theme-panel-strong theme-heading font-semibold hover:bg-[var(--color-overlay)] transition-all duration-200"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path> </svg> ${lang === "es" ? "Ver código" : "View Code"} </a>`} </div> </header> <!-- Hero image --> ${heroImage && renderTemplate`<div class="mb-16 relative group"> ${renderComponent($$result, "RoughBorder", $$RoughBorder, {}, { "default": ($$result2) => renderTemplate` <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": title, "class": "w-full h-auto object-cover rounded-3xl shadow-2xl border border-[var(--color-border)]", "loading": "eager", "inferSize": true })} ${renderComponent($$result2, "Scribble", $$Scribble, { "type": "circle", "className": "absolute -bottom-4 -left-4 text-indigo-500/30", "size": "40px" })} ${renderComponent($$result2, "Scribble", $$Scribble, { "type": "plus", "className": "absolute -top-4 -right-4 text-indigo-500/30", "size": "30px" })} </div> ` })} </div>`} <!-- Content Area --> <div class="theme-panel p-8 md:p-12 rounded-3xl shadow-xl"> <div class="prose prose-zinc max-w-none theme-prose 
            prose-h2:text-3xl prose-h2:tracking-tight prose-h2:font-bold prose-h2:border-b prose-h2:pb-2
            prose-h3:text-2xl prose-h3:tracking-tight prose-h3:font-semibold
            prose-p:leading-relaxed
            prose-a:underline-offset-4 transition-all
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            prose-pre:rounded-2xl
            prose-img:rounded-2xl prose-img:shadow-lg"> ${renderComponent($$result, "MDXContent", $$MDXContent, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> </div> <!-- Navigation back --> <footer class="mt-12 mb-20 text-center"> <a${addAttribute(`/${lang}/projects/`, "href")} class="inline-flex items-center gap-2 theme-link-muted transition-colors px-4 py-2 rounded-xl hover:bg-[var(--color-overlay)] border border-transparent hover:border-[var(--color-border)]"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg> ${lang === "es" ? "Volver a todos los proyectos" : "Back to all projects"} </a> </footer> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/crus/dev/self/cris-home/src/layouts/Projects.astro", void 0);

async function getStaticPaths() {
  const projects = await getCollection("projects");
  return projects.flatMap((project) => {
    const lang = project.id.split("/")[0];
    const slug = project.id.split("/").slice(1).join("/");
    if (!Object.keys(languages).includes(lang)) return [];
    return {
      params: { lang, slug },
      props: project
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { lang, slug } = Astro2.params;
  const projects = await getCollection("projects");
  const project = projects.find((p) => {
    const [pLang, ...pSlugParts] = p.id.split("/");
    return pLang === lang && pSlugParts.join("/") === slug;
  });
  if (!project) {
    return Astro2.redirect(`/${lang}/404`);
  }
  const { Content } = await renderEntry(project);
  return renderTemplate`${renderComponent($$result, "Projects", $$Projects, { ...project.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/crus/dev/self/cris-home/src/pages/[lang]/projects/[...slug].astro", void 0);

const $$file = "/Users/crus/dev/self/cris-home/src/pages/[lang]/projects/[...slug].astro";
const $$url = "/[lang]/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
