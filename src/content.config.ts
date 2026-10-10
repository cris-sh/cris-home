import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Entries live in `src/content/projects/<locale>/<slug>.md`, so ids are `<locale>/<slug>`.
const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			tags: z.array(z.string()),
			status: z.enum(['done', 'in-progress']).default('done'),
			demo: z.url().optional(),
			repo: z.url().optional(),
			gallery: z
				.array(z.object({ src: image(), caption: z.string() }))
				.default([]),
		}),
});

export const collections = { projects };
