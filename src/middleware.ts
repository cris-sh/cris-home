import { defineMiddleware } from "astro:middleware";

const locales = ["en", "es"];
const defaultLocale = "en";

const localePrefixes = locales.map((l) => `/${l}/`);
const STATIC_PREFIXES = ["/_astro", "/fonts", "/img", "/favicon"];

function isStaticPath(pathname: string): boolean {
  return STATIC_PREFIXES.some((p) => pathname.startsWith(p));
}

function isFileExtension(pathname: string): boolean {
  return /\.[\w]+$/.test(pathname);
}

function getPreferredLocale(acceptLanguage: string | null): string {
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((entry) => {
      const [code, q = "q=1"] = entry.trim().split(";");
      return {
        code: code.split("-")[0].toLowerCase(),
        q: parseFloat(q.split("=")[1] || "1"),
      };
    })
    .filter((entry) => locales.includes(entry.code))
    .sort((a, b) => b.q - a.q);

  return preferred.length > 0 ? preferred[0].code : defaultLocale;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request } = context;
  const { pathname } = url;

  if (pathname === "/404" || isStaticPath(pathname) || isFileExtension(pathname)) {
    return next();
  }

  if (localePrefixes.some((p) => pathname.startsWith(p))) {
    return next();
  }

  const acceptLanguage = request.headers.get("accept-language");
  const locale = getPreferredLocale(acceptLanguage);

  return context.redirect(`/${locale}${pathname}`, 302);
});
