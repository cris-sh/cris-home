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

const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogPost;
  const {
    title,
    description,
    date,
    updatedDate,
    heroImage,
    lang = "en"
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="theme-page"> ${renderComponent($$result, "NavBar", $$NavBar, {})} <main class="container mx-auto px-4 max-w-4xl pb-40 md:pb-8"> <article class="mt-12 md:mt-20"> <!-- Hero section --> <header class="text-center mb-12"> <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6"> <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14-4H9m10 8H7m-2 4h14"></path> </svg> ${lang === "es" ? "Artículo" : "Article"} </div> <div class="flex flex-wrap items-center justify-center gap-3 mb-6"> <div class="px-3 py-1 rounded-full theme-pill text-sm"> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": date, "lang": lang })} </div> ${updatedDate && renderTemplate`<div class="px-3 py-1 rounded-full theme-pill text-sm italic"> ${lang === "es" ? "Actualizado el " : "Updated: "} ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "lang": lang })} </div>`} </div> <h1 class="text-5xl md:text-7xl font-bold tracking-tighter theme-heading mb-6 balance"> ${title} </h1> ${description && renderTemplate`<p class="text-xl theme-muted max-w-2xl mx-auto mb-8 leading-relaxed"> ${description} </p>`} </header> <!-- Hero image --> ${heroImage && renderTemplate`<div class="mb-16 relative group"> ${renderComponent($$result, "RoughBorder", $$RoughBorder, {}, { "default": ($$result2) => renderTemplate` <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": title, "class": "w-full h-auto object-cover rounded-3xl shadow-2xl border border-[var(--color-border)]", "loading": "eager", "inferSize": true })} ${renderComponent($$result2, "Scribble", $$Scribble, { "type": "stars", "className": "absolute -top-4 -left-4 text-indigo-500/30", "size": "40px" })} ${renderComponent($$result2, "Scribble", $$Scribble, { "type": "circle", "className": "absolute -bottom-4 -right-4 text-indigo-500/30", "size": "40px" })} </div> ` })} </div>`} <!-- Content Area --> <div class="theme-panel p-8 md:p-12 rounded-3xl shadow-xl"> <div class="prose prose-zinc max-w-none theme-prose 
            prose-headings:scroll-mt-24 prose-h1:hidden
            prose-h2:text-3xl prose-h2:tracking-tight prose-h2:font-bold prose-h2:border-b prose-h2:pb-2
            prose-h3:text-2xl prose-h3:tracking-tight prose-h3:font-semibold
            prose-p:leading-relaxed
            prose-blockquote:border-l-indigo-500/60 prose-blockquote:italic
            prose-a:underline-offset-4 transition-all
            prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
            prose-pre:rounded-2xl
            prose-img:rounded-2xl prose-img:shadow-lg"> ${renderComponent($$result, "MDXContent", $$MDXContent, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> </div> <!-- Navigation back --> <footer class="mt-12 mb-20 text-center"> <a${addAttribute(`/${lang}/blog/`, "href")} class="inline-flex items-center gap-2 theme-link-muted transition-colors px-4 py-2 rounded-xl hover:bg-[var(--color-overlay)] border border-transparent hover:border-[var(--color-border)]"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg> ${lang === "es" ? "Volver a todos los artículos" : "Back to all articles"} </a> </footer> </article> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/crus/dev/self/cris-home/src/layouts/BlogPost.astro", void 0);

async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.flatMap((post) => {
    const lang = post.id.split("/")[0];
    const slug = post.id.split("/").slice(1).join("/");
    if (!Object.keys(languages).includes(lang)) return [];
    return {
      params: { lang, slug },
      props: post
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  const { lang, slug } = Astro2.params;
  const posts = await getCollection("blog");
  const post = posts.find((p) => {
    const [pLang, ...pSlugParts] = p.id.split("/");
    return pLang === lang && pSlugParts.join("/") === slug;
  });
  if (!post) {
    return Astro2.redirect(`/${lang}/404`);
  }
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/crus/dev/self/cris-home/src/pages/[lang]/blog/[...slug].astro", void 0);

const $$file = "/Users/crus/dev/self/cris-home/src/pages/[lang]/blog/[...slug].astro";
const $$url = "/[lang]/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
