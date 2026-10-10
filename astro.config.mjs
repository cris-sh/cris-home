// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

// The one hand-inlined script (theme + language, before first paint). Astro hashes
// its own scripts for the CSP automatically; this one has to be added by hand.
const headScript = readFileSync(new URL('./src/scripts/head.js', import.meta.url), 'utf8');
const headScriptHash = `sha256-${createHash('sha256').update(headScript).digest('base64')}`;

// https://astro.build/config
export default defineConfig({
	site: 'https://cris.ac',
	trailingSlash: 'always',

	// Still a fully static site: the adapter only packages the build the way
	// Vercel expects. (Old URLs are forwarded by src/pages/[lang]/[...path].astro.)
	adapter: vercel(),

	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Geist',
			cssVariable: '--font-geist',
			weights: ['100 900'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],

	image: {
		layout: 'constrained',
		responsiveStyles: true,
	},

	// The whole stylesheet is ~3 kB gzipped: inlining it saves a render-blocking
	// request and guarantees the `@view-transition` opt-in is known the moment a
	// page starts rendering (as an external file it could lose that race).
	build: {
		inlineStylesheets: 'always',
	},

	prefetch: {
		prefetchAll: true,
		defaultStrategy: 'hover',
	},

	// Shiki colours tokens with inline styles, which the CSP below forbids.
	// The only code block on the site is a plain-text file tree anyway.
	markdown: {
		syntaxHighlight: false,
	},

	security: {
		csp: {
			scriptDirective: {
				hashes: [headScriptHash],
			},
		},
	},

	// pdfkit reads its font metrics from disk next to its own source, so it has to
	// run from node_modules rather than be bundled. It only runs at build time.
	vite: {
		ssr: {
			external: ['pdfkit'],
		},
	},

	integrations: [
		sitemap({
			// Leave the forwarding pages for old /en/ and /es/ addresses out of the sitemap.
			filter: (page) => !['/en/', '/es/'].some((prefix) => new URL(page).pathname.startsWith(prefix)),
		}),
	],
});
