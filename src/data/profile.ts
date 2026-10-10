import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/ui';
import papyrusLogo from '../assets/companies/papyrus.png';
import sondaLogo from '../assets/companies/sonda.png';
import type { BrandName } from '../components/brands';

type Localized = Record<Locale, string>;

export const person = {
	name: 'Cristian Duarte',
	email: 'contact.cris.ac@gmail.com',
	website: 'https://cris.ac',
	location: 'Bogotá, Colombia',
};

export interface Experience {
	company: string;
	logo: ImageMetadata;
	role: Localized;
	place: Localized;
	/** Remote, on-site… */
	mode: Localized;
	start: string;
	end: string;
	/**
	 * One achievement per entry. The résumé lists them as bullets; the home page
	 * runs them together as a paragraph (and, on phones, folds all but the first).
	 */
	highlights: Record<Locale, string[]>;
	stack?: BrandName[];
}

// Most recent first.
export const experience: Experience[] = [
	{
		company: 'SONDA',
		logo: sondaLogo,
		role: { en: 'Technical Support Intern', es: 'Practicante de Soporte Técnico' },
		place: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
		mode: { en: 'On-site', es: 'Presencial' },
		start: '2026-04',
		end: '2026-10',
		highlights: {
			en: [
				"Handled and resolved users' hardware and software incidents, managing tickets within service-level times.",
				'Diagnosed faults and documented solutions, working with technical teams at different support levels.',
			],
			es: [
				'Atención y resolución de incidencias de hardware y software de usuarios, gestionando tickets dentro de los tiempos de servicio.',
				'Diagnóstico de fallas y documentación de soluciones, trabajando con equipos técnicos de distintos niveles.',
			],
		},
	},
	{
		company: 'Papyrus',
		logo: papyrusLogo,
		role: { en: 'Software Developer', es: 'Desarrollador de Software' },
		place: { en: 'United States', es: 'Estados Unidos' },
		mode: { en: 'Remote', es: 'Remoto' },
		start: '2025-01',
		end: '2026-07',
		highlights: {
			en: [
				'Designed and built full-stack architectures end to end, from Go/Fiber APIs and real-time data processing to React, Remix, and Next.js interfaces.',
				'Modeled and optimized data layers across MongoDB, PostgreSQL, and Redis, and owned deployments on Dockerized Linux VPS environments behind Nginx and Cloudflare.',
				'Integrated Stripe for subscription billing, instrumented monitoring and error tracking with Sentry, and drove delivery through Git and Jira in an agile workflow.',
			],
			es: [
				'Diseño y construcción de arquitecturas full-stack de punta a punta: APIs en Go/Fiber con procesamiento de datos en tiempo real e interfaces en React, Remix y Next.js.',
				'Modelado y optimización de capas de datos sobre MongoDB, PostgreSQL y Redis, con responsabilidad sobre los despliegues en servidores VPS Linux con Docker, Nginx y Cloudflare.',
				'Integración de Stripe para facturación de suscripciones, monitoreo y seguimiento de errores con Sentry, y gestión de la entrega con Git y Jira en un flujo de trabajo ágil.',
			],
		},
		stack: [
			'Go',
			'React',
			'Remix',
			'Next.js',
			'MongoDB',
			'PostgreSQL',
			'Redis',
			'Docker',
			'Nginx',
			'Cloudflare',
			'Stripe',
			'Sentry',
		],
	},
];

export interface Education {
	school: string;
	degree: Localized;
	start: string;
	end: string;
}

export const education: Education[] = [
	{
		school: 'SENA',
		degree: {
			en: "Associate's Degree in Software Analysis and Development",
			es: 'Tecnólogo en Análisis y Desarrollo de Software',
		},
		start: '2024-06',
		end: '2026-04',
	},
];

export interface Social {
	brand: BrandName;
	handle: string;
	href: string;
}

export const socials: Social[] = [
	{ brand: 'GitHub', handle: 'cris-sh', href: 'https://github.com/cris-sh' },
	{ brand: 'LinkedIn', handle: 'enux', href: 'https://linkedin.com/in/enux' },
	{
		brand: 'Discord',
		handle: 'cr.tkd',
		href: 'https://discord.com/users/1014943324131561492',
	},
];

export interface SkillGroup {
	label: Localized;
	/** A plain string is a proper noun that reads the same in every language. */
	items: (string | Localized)[];
}

// Plain keyword lists, grouped the way applicant tracking systems expect to find them.
// Everything here is backed by the experience and projects above.
export const skills: SkillGroup[] = [
	{ label: { en: 'Languages', es: 'Lenguajes' }, items: ['Go', 'TypeScript', 'JavaScript', 'Java', 'SQL'] },
	{
		label: { en: 'Backend', es: 'Backend' },
		items: [
			'Go Fiber',
			'Spring Boot',
			{ en: 'REST APIs', es: 'APIs REST' },
			{ en: 'Real-time data processing', es: 'Procesamiento de datos en tiempo real' },
			{ en: 'JWT authentication', es: 'Autenticación JWT' },
			'Stripe',
		],
	},
	{ label: { en: 'Frontend', es: 'Frontend' }, items: ['React', 'Next.js', 'Remix', 'React Native', 'Expo'] },
	{ label: { en: 'Databases', es: 'Bases de datos' }, items: ['PostgreSQL', 'MongoDB', 'Redis'] },
	{
		label: { en: 'Infrastructure', es: 'Infraestructura' },
		items: ['Docker', 'Linux', 'Nginx', 'Cloudflare', 'GitHub Actions', 'Sentry'],
	},
	{ label: { en: 'Tools', es: 'Herramientas' }, items: ['Git', 'Jira'] },
];
