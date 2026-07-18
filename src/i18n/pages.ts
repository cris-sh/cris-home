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
    "nav.theme.label": "theme",
    "nav.theme.system": "system",
    "nav.theme.light": "light",
    "nav.theme.dark": "dark",

    "home.name": "cristian",
    "home.title": "software developer",
    "home.about": [
      "I'm a Software Developer working across the whole cycle: API design, data modeling, real-time processing, user interfaces, and the infrastructure it all runs on. I've taken projects from initial architecture through to production, including deployment, monitoring, and maintenance.",
      "I currently work mostly with Go and TypeScript, though the stack changes with the problem. I tend to prefer simple, maintainable solutions over adding complexity.",
    ],
    "home.learnMore": "want to learn more?",

    "resume.name": "Cristian Duarte",
    "resume.description": "Software Developer",
    "resume.about": [
      "Working across the full stack: API design, data modeling, real-time processing, frontend, and deployment infrastructure.",
    ],
    "resume.experience": [
      {
        company: "Papyrus",
        position: "Software Developer",
        period: "Jan 2025 - Jul 2026",
        description:
          "Designed and built full-stack architectures end to end, from Go/Fiber APIs and real-time data processing to React, Remix, and Next.js interfaces. Modeled and optimized data layers across MongoDB, PostgreSQL, and Redis, and owned deployments on Dockerized Linux VPS environments behind Nginx and Cloudflare. Integrated Stripe for subscription billing, instrumented monitoring and error tracking with Sentry, and drove delivery through Git and Jira in an agile workflow."
      },
    ],
    "resume.education": [
      {
        institution: "SENA",
        degree: "Associate's Degree in Software Analysis and Development",
        period: "Jun 2024 - Apr 2026",
      },
    ],
  },
  es: {
    "nav.home": "inicio",
    "nav.projects": "proyectos",
    "nav.blog": "blog",
    "nav.theme.label": "tema",
    "nav.theme.system": "sistema",
    "nav.theme.light": "claro",
    "nav.theme.dark": "oscuro",

    "home.title": "desarrollador de software",
    "home.about": [
      "Soy Desarrollador de Software y trabajo en todo el ciclo: diseño de APIs, modelado de datos, procesamiento en tiempo real, interfaces de usuario y la infraestructura donde todo eso corre. He llevado proyectos desde la arquitectura inicial hasta producción, incluyendo despliegue, monitoreo y mantenimiento.",
      "Actualmente trabajo principalmente con Go y TypeScript, aunque el stack cambia según el problema. Suelo preferir soluciones simples de mantener antes que agregar complejidad.",
    ],
    "home.learnMore": "¿quieres saber más?",

    "resume.description": "Desarrollador de Software",
    "resume.about": [
      "Trabajo en todo el stack: diseño de APIs, modelado de datos, procesamiento en tiempo real, frontend e infraestructura de despliegue.",
    ],
    "resume.experience": [
      {
        company: "Papyrus",
        position: "Desarrollador de Software",
        period: "Ene 2025 - Jul 2026",
        description:
           "Diseño y construcción de arquitecturas full-stack de punta a punta: APIs en Go/Fiber con procesamiento de datos en tiempo real e interfaces en React, Remix y Next.js. Modelado y optimización de capas de datos sobre MongoDB, PostgreSQL y Redis, con responsabilidad sobre los despliegues en servidores VPS Linux con Docker, Nginx y Cloudflare. Integración de Stripe para facturación de suscripciones, monitoreo y seguimiento de errores con Sentry, y gestión de la entrega con Git y Jira en un flujo de trabajo ágil.",
      },
    ],
    "resume.education": [
      {
        institution: "SENA",
        degree: "Tecnologo en Análisis y Desarrollo de Software",
        period: "Jun 2024 - Abr 2026",
      },
    ],
  },
} as const;
