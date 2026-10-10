# cris.ac

Personal portfolio of Cristian Duarte. A static [Astro](https://astro.build) site deployed on Vercel.

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static build, including the résumé PDFs
```

Requires Node 22.12 or newer.

## Where things live

| What | Where |
| --- | --- |
| Experience, education, skills, contact | `src/data/profile.ts` |
| Projects (one file per language) | `src/content/projects/{en,es}/` |
| Interface text in both languages | `src/i18n/ui.ts` |
| Page templates | `src/pages/`, `src/components/` |
| Styles | `src/styles/global.css` |

Every page is a single template that renders both languages; the visitor's language is
chosen in the browser, so there is no `/en/` or `/es/` in the URL. Only project write-ups
have a file per language.

The résumé at `/cv/` and its downloadable PDFs are generated from the same data as the
home page, so editing `profile.ts` or a project updates all of them.

## Images

Derived images are generated from the originals in `src/assets/source/`:

```sh
node scripts/make-portrait.mjs   # avatar and favicons from the photo
node scripts/make-logos.mjs      # company logos for the Experience section
```

## Old URLs

The previous version of the site used `/en/…` and `/es/…` addresses.
`src/pages/[lang]/[...path].astro` keeps those alive as pages that forward to the new ones.
