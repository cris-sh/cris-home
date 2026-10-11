export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
};

export const ui = {
	en: {
		'meta.title': 'Cristian Duarte — Software Developer',
		'meta.description':
			'Portfolio of Cristian Duarte, a software developer working across the whole cycle: APIs, data, real-time processing, interfaces and infrastructure, mostly with Go and TypeScript.',
		'a11y.skip': 'Skip to content',
		'a11y.language': 'Language',
		'a11y.darkTheme': 'Dark theme',
		'a11y.home': 'Cristian Duarte, home',
		'a11y.external': 'opens in a new tab',
		'a11y.zoom': 'Enlarge image',
		'a11y.close': 'Close',
		'a11y.viewer': 'Image viewer',
		'hero.role': 'Software Developer',
		'hero.location': 'Bogotá, Colombia',
		'about.p1':
			"I'm a software developer working across the whole cycle: API design, data modeling, real-time processing, user interfaces, and the infrastructure it all runs on. I've taken projects from initial architecture through to production, including deployment, monitoring, and maintenance.",
		'about.p2':
			'I currently work mostly with Go and TypeScript, though the stack changes with the problem. I tend to prefer simple, maintainable solutions over adding complexity.',
		'section.experience': 'Experience',
		'section.projects': 'Projects',
		'section.education': 'Education',
		'section.contact': 'Contact',
		'project.back': 'All projects',
		'project.in-progress': 'In progress',
		'more.open': 'Read more',
		'more.close': 'Show less',
		'project.demo': 'View demo',
		'project.code': 'View code',
		'project.screenshots': 'Screenshots',
		'contact.email': 'Email',
		'contact.call': 'Book a call',
		'contact.resumeMeta': 'View or download PDF',
		'cv.title': 'Resume',
		'cv.description': 'Resume of Cristian Duarte, software developer: experience, projects, skills and education. Available as an ATS-friendly PDF.',
		'cv.back': 'Home',
		'cv.download': 'Download PDF',
		'cv.print': 'Print',
		'cv.summary': 'Summary',
		'cv.summaryText':
			'Software developer with experience across the whole delivery cycle: API design, data modeling, real-time processing, user interfaces and the infrastructure they run on. Has taken projects from initial architecture through to production, including deployment, monitoring and maintenance. Works mostly with Go and TypeScript and favors simple, maintainable solutions over added complexity.',
		'cv.skills': 'Skills',
		'cv.technologies': 'Technologies',
		'cv.fileName': 'Cristian-Duarte-Resume.pdf',
		'notFound.title': 'Page not found',
		'notFound.body': "This page doesn't exist, or it moved.",
		'notFound.back': 'Back to home',
	},
	es: {
		'meta.title': 'Cristian Duarte — Desarrollador de Software',
		'meta.description':
			'Portafolio de Cristian Duarte, desarrollador de software que trabaja en todo el ciclo: APIs, datos, procesamiento en tiempo real, interfaces e infraestructura, principalmente con Go y TypeScript.',
		'a11y.skip': 'Saltar al contenido',
		'a11y.language': 'Idioma',
		'a11y.darkTheme': 'Tema oscuro',
		'a11y.home': 'Cristian Duarte, inicio',
		'a11y.external': 'se abre en una pestaña nueva',
		'a11y.zoom': 'Ampliar imagen',
		'a11y.close': 'Cerrar',
		'a11y.viewer': 'Visor de imágenes',
		'hero.role': 'Desarrollador de Software',
		'hero.location': 'Bogotá, Colombia',
		'about.p1':
			'Soy desarrollador de software y trabajo en todo el ciclo: diseño de APIs, modelado de datos, procesamiento en tiempo real, interfaces de usuario y la infraestructura donde todo eso corre. He llevado proyectos desde la arquitectura inicial hasta producción, incluyendo despliegue, monitoreo y mantenimiento.',
		'about.p2':
			'Actualmente trabajo principalmente con Go y TypeScript, aunque el stack cambia según el problema. Suelo preferir soluciones simples de mantener antes que agregar complejidad.',
		'section.experience': 'Experiencia',
		'section.projects': 'Proyectos',
		'section.education': 'Educación',
		'section.contact': 'Contacto',
		'project.back': 'Todos los proyectos',
		'project.in-progress': 'En curso',
		'more.open': 'Leer más',
		'more.close': 'Ver menos',
		'project.demo': 'Ver demo',
		'project.code': 'Ver código',
		'project.screenshots': 'Capturas',
		'contact.email': 'Correo',
		'contact.call': 'Agendar llamada',
		'contact.resumeMeta': 'Ver o descargar PDF',
		'cv.title': 'Currículum',
		'cv.description': 'Currículum de Cristian Duarte, desarrollador de software: experiencia, proyectos, habilidades y educación. Disponible en PDF compatible con ATS.',
		'cv.back': 'Inicio',
		'cv.download': 'Descargar PDF',
		'cv.print': 'Imprimir',
		'cv.summary': 'Perfil',
		'cv.summaryText':
			'Desarrollador de software con experiencia en todo el ciclo de entrega: diseño de APIs, modelado de datos, procesamiento en tiempo real, interfaces de usuario y la infraestructura donde corren. Ha llevado proyectos desde la arquitectura inicial hasta producción, incluyendo despliegue, monitoreo y mantenimiento. Trabaja principalmente con Go y TypeScript y prefiere soluciones simples de mantener antes que agregar complejidad.',
		'cv.skills': 'Habilidades',
		'cv.technologies': 'Tecnologías',
		'cv.fileName': 'Cristian-Duarte-CV.pdf',
		'notFound.title': 'Página no encontrada',
		'notFound.body': 'Esta página no existe o cambió de lugar.',
		'notFound.back': 'Volver al inicio',
	},
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)['en'];

export function isLocale(value: string | undefined): value is Locale {
	return locales.includes(value as Locale);
}

export function useTranslations(locale: Locale) {
	return (key: UIKey) => ui[locale][key];
}

export function formatDate(date: Date, locale: Locale) {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC',
	}).format(date);
}

/** `2025-01` → "Jan 2025" / "ene 2025" */
export function formatMonth(yearMonth: string, locale: Locale) {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'short',
		timeZone: 'UTC',
	}).format(new Date(`${yearMonth}-01T00:00:00Z`));
}
