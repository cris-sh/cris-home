import { d as defineMiddleware, ae as sequence } from './chunks/params-and-props_Cbg7M-DS.mjs';
import 'piccolore';
import 'clsx';

const locales = ["en", "es"];
const defaultLocale = "en";
const localePrefixes = locales.map((l) => `/${l}/`);
const STATIC_PREFIXES = ["/_astro", "/fonts", "/img", "/favicon"];
function isStaticPath(pathname) {
  return STATIC_PREFIXES.some((p) => pathname.startsWith(p));
}
function isFileExtension(pathname) {
  return /\.[\w]+$/.test(pathname);
}
function getPreferredLocale(acceptLanguage) {
  if (!acceptLanguage) return defaultLocale;
  const preferred = acceptLanguage.split(",").map((entry) => {
    const [code, q = "q=1"] = entry.trim().split(";");
    return {
      code: code.split("-")[0].toLowerCase(),
      q: parseFloat(q.split("=")[1] || "1")
    };
  }).filter((entry) => locales.includes(entry.code)).sort((a, b) => b.q - a.q);
  return preferred.length > 0 ? preferred[0].code : defaultLocale;
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { url, request, locals } = context;
  const { pathname } = url;
  if (isStaticPath(pathname) || isFileExtension(pathname)) {
    return next();
  }
  if (localePrefixes.some((p) => pathname.startsWith(p))) {
    return next();
  }
  const acceptLanguage = request.headers.get("accept-language");
  const locale = getPreferredLocale(acceptLanguage);
  if (pathname === "/") {
    return context.redirect(`/${locale}/`, 302);
  }
  return context.redirect(`/${locale}${pathname}`, 302);
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
