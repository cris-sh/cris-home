import { c as createVNode, _ as __astro_tag_component__ } from './entrypoint_BYUmlMOq.mjs';
import { $ as $$Image } from './_astro_assets_B7j4CIt5.mjs';
import { F as Fragment } from './params-and-props_Cbg7M-DS.mjs';
import 'clsx';

const frontmatter = {
  "title": "AlquiPC",
  "description": "Un sistema moderno de facturación para alquiler de equipos informáticos con cálculo automático de precios basado en múltiples variables.",
  "date": "2025-04-27T00:00:00.000Z",
  "tags": ["TypeScript", "Vite", "TailwindCSS", "jsPDF", "Testing", "Bun"],
  "heroImage": "https://i.imgur.com/e94RzcX.png",
  "demoUrl": "https://alquipc.enux.dev",
  "github": "https://github.com/cris-sh/alquipc-billing",
  "lang": "es"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "alquipc---sistema-de-facturación",
    "text": "AlquiPC - Sistema de Facturación"
  }, {
    "depth": 2,
    "slug": "visión-general-del-proyecto",
    "text": "Visión general del proyecto"
  }, {
    "depth": 2,
    "slug": "características-principales",
    "text": "Características principales"
  }, {
    "depth": 2,
    "slug": "tecnologías-utilizadas",
    "text": "Tecnologías utilizadas"
  }, {
    "depth": 2,
    "slug": "implementación-y-arquitectura",
    "text": "Implementación y arquitectura"
  }, {
    "depth": 2,
    "slug": "capturas-de-pantalla",
    "text": "Capturas de pantalla"
  }, {
    "depth": 2,
    "slug": "casos-de-uso",
    "text": "Casos de uso"
  }, {
    "depth": 2,
    "slug": "aprendizajes-y-desafíos",
    "text": "Aprendizajes y desafíos"
  }, {
    "depth": 2,
    "slug": "pruebas-y-calidad",
    "text": "Pruebas y calidad"
  }, {
    "depth": 2,
    "slug": "conclusión",
    "text": "Conclusión"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "alquipc---sistema-de-facturación",
      children: "AlquiPC - Sistema de Facturación"
    }), "\n", createVNode(_components.h2, {
      id: "visión-general-del-proyecto",
      children: "Visión general del proyecto"
    }), "\n", createVNode(_components.p, {
      children: "AlquiPC es un sistema de facturación moderno diseñado específicamente para el alquiler de equipos informáticos. Desarrollado siguiendo los estándares de calidad ISO/IEC 25010, el sistema calcula precios de alquiler considerando diversas variables como ubicación, duración y cantidad de dispositivos, ofreciendo una solución integral para negocios en el sector de alquiler tecnológico."
    }), "\n", createVNode(_components.h2, {
      id: "características-principales",
      children: "Características principales"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Generación automática de ID para clientes"
        }), ": Cada orden recibe un identificador único"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cálculo dinámico de precios"
        }), " basado en múltiples factores:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Número de dispositivos (mínimo 2)"
          }), "\n", createVNode(_components.li, {
            children: "Días iniciales de alquiler"
          }), "\n", createVNode(_components.li, {
            children: "Días adicionales (con 2% de descuento)"
          }), "\n", createVNode(_components.li, {
            children: "Ubicación (dentro de la ciudad, fuera con recargo del 5%, o en las instalaciones con 5% de descuento)"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Facturación digital"
        }), " con resumen detallado"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Exportación a PDF"
        }), " de facturas"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Simulación de envío de correos electrónicos"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Modo oscuro/claro"
        }), " para mejorar la experiencia de usuario"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Diseño responsivo"
        }), " adaptable a dispositivos móviles y de escritorio"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "tecnologías-utilizadas",
      children: "Tecnologías utilizadas"
    }), "\n", createVNode(_components.p, {
      children: "El proyecto utiliza un stack tecnológico moderno enfocado en rendimiento y experiencia de desarrollo:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TypeScript"
        }), ": Para tipado estático y mayor robustez del código"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Vite"
        }), ": Como herramienta de construcción y servidor de desarrollo rápido"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TailwindCSS"
        }), ": Framework CSS para un diseño eficiente y consistente"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "jsPDF + html2canvas-pro"
        }), ": Para la generación de documentos PDF"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bun"
        }), ": Entorno de pruebas y gestor de paquetes ultrarrápido"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementación-y-arquitectura",
      children: "Implementación y arquitectura"
    }), "\n", createVNode(_components.p, {
      children: "El sistema está estructurado siguiendo principios de diseño modular y mantenibilidad:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code one-dark-pro",
      style: {
        backgroundColor: "#282c34",
        color: "#abb2bf",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "src/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── models/      # Definiciones de tipos e interfaces"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── services/    # Servicios para cálculos y API"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── main.ts      # Punto de entrada de la aplicación"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── style.css    # Estilos globales"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Los cálculos de precios implementan lógica de negocio específica que abarca diferentes escenarios de alquiler, aplicando descuentos o recargos según las condiciones específicas de cada orden."
    }), "\n", createVNode(_components.h2, {
      id: "capturas-de-pantalla",
      children: "Capturas de pantalla"
    }), "\n", createVNode("div", {
      class: "grid grid-cols-1 md:grid-cols-2 gap-4 my-6",
      children: [createVNode("div", {
        children: [createVNode($$Image, {
          src: "https://i.imgur.com/e94RzcX.png",
          alt: "Formulario de Facturación",
          width: 600,
          height: 375,
          class: "rounded-lg shadow-md"
        }), createVNode("p", {
          class: "text-center text-sm mt-2",
          children: "Formulario de Facturación"
        })]
      }), createVNode("div", {
        children: [createVNode($$Image, {
          src: "https://i.imgur.com/kgawDWR.png",
          alt: "Factura Generada",
          width: 600,
          height: 375,
          class: "rounded-lg shadow-md"
        }), createVNode("p", {
          class: "text-center text-sm mt-2",
          children: "Factura Generada"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "casos-de-uso",
      children: "Casos de uso"
    }), "\n", createVNode(_components.p, {
      children: "El sistema de facturación maneja varios escenarios de alquiler:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Alquiler dentro de la ciudad"
        }), ": Sin cargos adicionales"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Alquiler fuera de la ciudad"
        }), ": Recargo del 5%"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Alquiler en instalaciones"
        }), ": Descuento del 5%"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Días adicionales"
        }), ": Descuento del 2% por cada día extra"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "aprendizajes-y-desafíos",
      children: "Aprendizajes y desafíos"
    }), "\n", createVNode(_components.p, {
      children: "Durante el desarrollo de AlquiPC, me enfrenté a desafíos específicos como:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Precisión en cálculos financieros"
        }), ": Implementar algoritmos que manejen correctamente los cálculos decimales en TypeScript"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Integración de PDF"
        }), ": Convertir componentes HTML dinámicos a documentos PDF manteniendo la fidelidad visual"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Experiencia de usuario fluida"
        }), ": Balancear la validación de datos y feedback instantáneo para crear una experiencia de uso intuitiva"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "pruebas-y-calidad",
      children: "Pruebas y calidad"
    }), "\n", createVNode(_components.p, {
      children: "El proyecto incluye pruebas unitarias para verificar la funcionalidad correcta de cálculo de precios, garantizando que los resultados sean precisos en todos los escenarios posibles."
    }), "\n", createVNode(_components.h2, {
      id: "conclusión",
      children: "Conclusión"
    }), "\n", createVNode(_components.p, {
      children: "AlquiPC representa una solución escalable y moderna para empresas de alquiler de equipos informáticos, combinando facilidad de uso con funcionalidades avanzadas de facturación y gestión de pedidos."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/projects/es/alquipc.mdx";
const file = "/Users/crus/dev/self/cris-home/src/content/projects/es/alquipc.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/crus/dev/self/cris-home/src/content/projects/es/alquipc.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
