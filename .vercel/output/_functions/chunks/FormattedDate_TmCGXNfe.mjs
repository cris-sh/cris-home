import { c as createComponent } from './astro-component_Dsxwx2a8.mjs';
import 'piccolore';
import { B as maybeRenderHead, a3 as addAttribute, Q as renderTemplate } from './params-and-props_Cbg7M-DS.mjs';
import 'clsx';

const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date, lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/crus/dev/self/cris-home/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
