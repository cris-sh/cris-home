import { c as createComponent } from './astro-component_Dsxwx2a8.mjs';
import 'piccolore';
import './params-and-props_Cbg7M-DS.mjs';
import 'clsx';

const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$;
  return Astro2.redirect("/en/");
}, "/Users/crus/dev/self/cris-home/src/pages/[...slug].astro", void 0);

const $$file = "/Users/crus/dev/self/cris-home/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
