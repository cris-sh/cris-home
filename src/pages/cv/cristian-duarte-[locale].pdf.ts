import type { APIRoute } from 'astro';
import { getResume } from '../../data/resume';
import { renderResumePdf } from '../../lib/resume-pdf';
import { isLocale, locales } from '../../i18n/ui';

// Built once per language at build time: /cv/cristian-duarte-en.pdf and -es.pdf.
export function getStaticPaths() {
	return locales.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = async ({ params }) => {
	if (!isLocale(params.locale)) return new Response(null, { status: 404 });
	const pdf = await renderResumePdf(await getResume(params.locale));
	return new Response(pdf, { headers: { 'Content-Type': 'application/pdf' } });
};
