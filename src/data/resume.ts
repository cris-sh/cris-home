import { getCollection } from 'astro:content';
import { education, experience, person, skills, socials } from './profile';
import { formatMonth, ui, type Locale } from '../i18n/ui';

// The résumé, assembled once from the same data the rest of the site uses.
// Both the /cv/ page and the downloadable PDF render this object, so they can't drift.

export interface Resume {
	locale: Locale;
	name: string;
	title: string;
	location: string;
	email: string;
	/** Written out as text: parsers read the visible URL, not the link behind it. */
	links: { label: string; href: string }[];
	headings: {
		summary: string;
		experience: string;
		projects: string;
		skills: string;
		education: string;
		technologies: string;
	};
	summary: string;
	experience: { role: string; company: string; location: string; dates: string; bullets: string[] }[];
	projects: { name: string; note?: string; description: string; technologies: string[]; url?: string }[];
	skills: { label: string; items: string[] }[];
	education: { degree: string; school: string; dates: string }[];
}

const bare = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

// "Jan 2025 - Jul 2026": month and year with a plain hyphen, the date shape
// applicant tracking systems parse most reliably.
const range = (start: string, end: string, locale: Locale) =>
	`${formatMonth(start, locale)} - ${formatMonth(end, locale)}`;

export async function getResume(locale: Locale): Promise<Resume> {
	const t = ui[locale];
	const projects = (await getCollection('projects', ({ id }) => id.startsWith(`${locale}/`))).sort(
		(a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
	);

	return {
		locale,
		name: person.name,
		title: t['hero.role'],
		location: person.location,
		email: person.email,
		links: [
			{ label: bare(person.website), href: person.website },
			...socials
				.filter((social) => social.brand === 'GitHub' || social.brand === 'LinkedIn')
				.map((social) => ({ label: bare(social.href), href: social.href })),
		],
		headings: {
			summary: t['cv.summary'],
			experience: t['section.experience'],
			projects: t['section.projects'],
			skills: t['cv.skills'],
			education: t['section.education'],
			technologies: t['cv.technologies'],
		},
		summary: t['cv.summaryText'],
		experience: experience.map((job) => ({
			role: job.role[locale],
			company: job.company,
			location: `${job.place[locale]} (${job.mode[locale]})`,
			dates: range(job.start, job.end, locale),
			bullets: job.highlights[locale],
		})),
		projects: projects.map((project) => ({
			name: project.data.title,
			note: project.data.status === 'in-progress' ? t['project.in-progress'] : undefined,
			description: project.data.description,
			technologies: project.data.tags,
			url: project.data.repo ?? project.data.demo,
		})),
		skills: skills.map((group) => ({
			label: group.label[locale],
			items: group.items.map((item) => (typeof item === 'string' ? item : item[locale])),
		})),
		education: education.map((item) => ({
			degree: item.degree[locale],
			school: item.school,
			dates: range(item.start, item.end, locale),
		})),
	};
}
