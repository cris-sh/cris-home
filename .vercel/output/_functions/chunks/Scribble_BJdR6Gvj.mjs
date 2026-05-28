import { c as createComponent } from './astro-component_Dsxwx2a8.mjs';
import 'piccolore';
import { B as maybeRenderHead, a3 as addAttribute, b4 as renderSlot, Q as renderTemplate } from './params-and-props_Cbg7M-DS.mjs';
import 'clsx';

const $$RoughBorder = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$RoughBorder;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg class="absolute w-0 h-0 invisible" data-astro-cid-ylda2nuv> <defs data-astro-cid-ylda2nuv> <filter id="rough-filter" data-astro-cid-ylda2nuv> <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise" data-astro-cid-ylda2nuv></feTurbulence> <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" data-astro-cid-ylda2nuv></feDisplacementMap> </filter> </defs> </svg> <div${addAttribute(`rough-container relative group ${className}`, "class")} data-astro-cid-ylda2nuv> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/crus/dev/self/cris-home/src/components/creative/RoughBorder.astro", void 0);

const $$Scribble = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Scribble;
  const {
    type = "plus",
    color = "currentColor",
    className = "",
    size = "24px"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`pointer-events-none opacity-20 ${className}`, "class")}${addAttribute(`width: ${size}; height: ${size};`, "style")}> <svg viewBox="0 0 100 100" fill="none" class="w-full h-full"> ${type === "plus" && renderTemplate`<path d="M 50,20 L 50,80 M 20,50 L 80,50"${addAttribute(color, "stroke")} stroke-width="12" stroke-linecap="round"></path>`} ${type === "circle" && renderTemplate`<circle cx="50" cy="50" r="30"${addAttribute(color, "stroke")} stroke-width="8" fill="none"></circle>`} ${type === "squiggles" && renderTemplate`<path d="M 10,50 Q 30,20 50,50 T 90,50"${addAttribute(color, "stroke")} stroke-width="8" stroke-linecap="round" fill="none"></path>`} ${type === "stars" && renderTemplate`<path d="M 50,10 L 60,40 L 90,50 L 60,60 L 50,90 L 40,60 L 10,50 L 40,40 Z"${addAttribute(color, "stroke")} stroke-width="6" stroke-linecap="round" fill="none"></path>`} </svg> </div>`;
}, "/Users/crus/dev/self/cris-home/src/components/creative/Scribble.astro", void 0);

export { $$RoughBorder as $, $$Scribble as a };
