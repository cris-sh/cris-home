export const languages = {
  en: "english",
  es: "español",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "home",
    "nav.projects": "projects",
    "nav.blog": "blog",
    "nav.twitter": "twitter",

    "home.name": "cristian",
    "home.title": "software engineer",
    "home.about": [
      "I am a Software Engineer focused on building high-performance applications and scalable systems. My expertise covers the full development lifecycle, from system architecture and backend APIs to intuitive user interfaces.",
      "I specialize in modern technologies like TypeScript, Go, and React, always striving for technical excellence and efficient problem-solving.",
    ],
    "home.learnMore": "want to learn more?",

    "resume.name": "Cristian Duarte",
    "resume.description": "Software Engineer",
    "resume.about": [
      "Pragmatic Software Engineer with a focus on building robust, scalable applications. Expertise in TypeScript, Go, and React, with a strong foundation in system architecture and API design.",
    ],
    "resume.experience": [
      {
        company: "Papyrus",
        position: "Software Engineer",
        period: "2025 - Present",
        description:
          "Engineering backend systems with Go/Fiber for monitoring applications and business tools. Designing and implementing APIs, developing frontend solutions with Remix, implementing real-time data processing, and integrating payment systems through Stripe for client subscriptions."
      },
    ],
    "resume.education": [
      {
        institution: "SENA",
        degree: "Associate's Degree in Software Analysis and Development",
        period: "2024 - 2026",
      },
    ],
  },
  es: {
    "nav.home": "inicio",
    "nav.projects": "proyectos",
    "nav.blog": "blog",

    "home.title": "ingeniero de software",
    "home.about": [
      "Soy Ingeniero de Software enfocado en construir aplicaciones de alto rendimiento y sistemas escalables. Mi experiencia cubre todo el ciclo de desarrollo, desde la arquitectura de sistemas y APIs backend hasta interfaces de usuario intuitivas.",
      "Me especializo en tecnologías modernas como TypeScript, Go y React, siempre buscando la excelencia técnica y la resolución eficiente de problemas.",
    ],
    "home.learnMore": "¿quieres saber más?",

    "resume.description": "Ingeniero de Software",
    "resume.about": [
      "Ingeniero de Software pragmático enfocado en construir aplicaciones robustas y escalables. Experto en TypeScript, Go y React, con una sólida base en arquitectura de sistemas y diseño de APIs.",
    ],
    "resume.experience": [
      {
        company: "Papyrus",
        position: "Ingeniero de Software",
        period: "2025 - Presente",
        description:
           "Ingeniería de sistemas backend con Go/Fiber para aplicaciones de monitoreo y herramientas de negocio. Diseño e implementación de APIs, desarrollo de soluciones frontend con Remix, implementación de procesamiento de datos en tiempo real e integración de sistemas de pago mediante Stripe para suscripciones de clientes.",
      },
    ],
    "resume.education": [
      {
        institution: "SENA",
        degree: "Tecnologo en Análisis y Desarrollo de Software",
        period: "2024 - 2026",
      },
    ],
  },
} as const;
