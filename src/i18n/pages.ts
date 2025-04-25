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
      "i'm a software engineer with expertise in modern development technologies. proficient in JavaScript, TypeScript, Python, Go, Dart and frameworks like React, NextJS, Remix, Vite, Fiber and Flutter. you can find me online as @enux.",
      "as a software engineer, i work across the entire development stack. i design and implement backend systems, create efficient APIs, and build intuitive user interfaces. my core strengths include system architecture, application development, and technical problem-solving.",
      "i'm passionate about engineering scalable solutions, optimizing performance, and exploring emerging technologies to solve complex problems.",
    ],
    "home.learnMore": "want to learn more?",

    "resume.name": "Cristian Duarte Hidalgo",
    "resume.description": "Software Engineer",
    "resume.about": [
      "Versatile Software Engineer with strong technical foundations and formal education in Software Analysis and Development. Experienced in multiple programming languages and frameworks including JavaScript, TypeScript, Go, React, NextJS, and Flutter, enabling me to architect and deliver high-quality solutions across various platforms.",
      "I excel in system design and implementation with particular strengths in API architecture, backend development, and frontend engineering. My approach combines systematic problem-solving with technical expertise, consistently delivering robust, scalable applications that meet business requirements. I continuously expand my technical knowledge to implement efficient solutions that optimize performance and enhance user experience.",
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
      "soy un ingeniero de software con experiencia en tecnologías modernas de desarrollo. competente en JavaScript, TypeScript, Python, Go, Dart, y frameworks como React, NextJS, Remix, Vite, Fiber y Flutter.",
      "como ingeniero de software, trabajo en todos los niveles del stack de desarrollo. diseño e implemento sistemas backend, creo APIs eficientes, y construyo interfaces de usuario intuitivas. mis fortalezas principales incluyen arquitectura de sistemas, desarrollo de aplicaciones y resolución de problemas técnicos.",
      "me apasiona la ingeniería de soluciones escalables, la optimización del rendimiento y la exploración de tecnologías emergentes para resolver problemas complejos.",
    ],
    "home.learnMore": "quieres saber más?",

    "resume.description": "Ingeniero de Software",
    "resume.about": [
      "Ingeniero de Software versátil con sólidas bases técnicas y formación en Análisis y Desarrollo de Software. Experimentado en múltiples lenguajes de programación y frameworks incluyendo JavaScript, TypeScript, Go, React, NextJS y Flutter, lo que me permite arquitectar y entregar soluciones de alta calidad en diversas plataformas.",
      "Destaco en diseño e implementación de sistemas con particular fortaleza en arquitectura de APIs, ingenieria backend y frontend. Mi enfoque combina resolución sistemática de problemas con experiencia técnica, entregando consistentemente aplicaciones robustas y escalables que cumplen con los requisitos del negocio. Continuamente amplío mis conocimientos técnicos para implementar soluciones eficientes que optimizan el rendimiento y mejoran la experiencia del usuario.",
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
