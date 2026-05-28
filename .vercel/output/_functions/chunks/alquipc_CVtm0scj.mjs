import { c as createVNode, _ as __astro_tag_component__ } from './entrypoint_BYUmlMOq.mjs';
import { $ as $$Image } from './_astro_assets_B7j4CIt5.mjs';
import { F as Fragment } from './params-and-props_Cbg7M-DS.mjs';
import 'clsx';

const frontmatter = {
  "title": "AlquiPC",
  "description": "A modern billing system for computer equipment rental with automatic price calculation based on multiple variables.",
  "date": "2025-04-27T00:00:00.000Z",
  "tags": ["TypeScript", "Vite", "TailwindCSS", "jsPDF", "Testing", "Bun"],
  "heroImage": "https://i.imgur.com/e94RzcX.png",
  "demoUrl": "https://alquipc.enux.dev",
  "github": "https://github.com/cris-sh/alquipc-billing"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "alquipc---billing-system",
    "text": "AlquiPC - Billing System"
  }, {
    "depth": 2,
    "slug": "project-overview",
    "text": "Project Overview"
  }, {
    "depth": 2,
    "slug": "main-features",
    "text": "Main Features"
  }, {
    "depth": 2,
    "slug": "technologies-used",
    "text": "Technologies Used"
  }, {
    "depth": 2,
    "slug": "implementation-and-architecture",
    "text": "Implementation and Architecture"
  }, {
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }, {
    "depth": 2,
    "slug": "use-cases",
    "text": "Use Cases"
  }, {
    "depth": 2,
    "slug": "learnings-and-challenges",
    "text": "Learnings and Challenges"
  }, {
    "depth": 2,
    "slug": "testing-and-quality",
    "text": "Testing and Quality"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
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
      id: "alquipc---billing-system",
      children: "AlquiPC - Billing System"
    }), "\n", createVNode(_components.h2, {
      id: "project-overview",
      children: "Project Overview"
    }), "\n", createVNode(_components.p, {
      children: "AlquiPC is a modern billing system specifically designed for computer equipment rental. Developed following ISO/IEC 25010 quality standards, the system calculates rental prices considering various variables such as location, duration, and number of devices, offering a comprehensive solution for businesses in the technology rental sector."
    }), "\n", createVNode(_components.h2, {
      id: "main-features",
      children: "Main Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Automatic ID generation for clients"
        }), ": Each order receives a unique identifier"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dynamic price calculation"
        }), " based on multiple factors:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Number of devices (minimum 2)"
          }), "\n", createVNode(_components.li, {
            children: "Initial rental days"
          }), "\n", createVNode(_components.li, {
            children: "Additional days (with 2% discount)"
          }), "\n", createVNode(_components.li, {
            children: "Location (within the city, outside with a 5% surcharge, or on-premise with a 5% discount)"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Digital billing"
        }), " with detailed summary"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "PDF export"
        }), " of invoices"]
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.strong, {
          children: "Email sending simulation"
        })
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dark/light mode"
        }), " to improve user experience"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Responsive design"
        }), " adaptable to mobile and desktop devices"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "technologies-used",
      children: "Technologies Used"
    }), "\n", createVNode(_components.p, {
      children: "The project uses a modern technology stack focused on performance and development experience:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TypeScript"
        }), ": For static typing and more robust code"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Vite"
        }), ": As a fast build tool and development server"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TailwindCSS"
        }), ": CSS framework for efficient and consistent design"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "jsPDF + html2canvas-pro"
        }), ": For PDF document generation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bun"
        }), ": Ultra-fast testing environment and package manager"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "implementation-and-architecture",
      children: "Implementation and Architecture"
    }), "\n", createVNode(_components.p, {
      children: "The system is structured following principles of modular design and maintainability:"
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
            children: "├── models/      # Type definitions and interfaces"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── services/    # Services for calculations and API"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "├── main.ts      # Application entry point"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "└── style.css    # Global styles"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Price calculations implement specific business logic that covers different rental scenarios, applying discounts or surcharges according to the specific conditions of each order."
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode("div", {
      class: "grid grid-cols-1 md:grid-cols-2 gap-4 my-6",
      children: [createVNode("div", {
        children: [createVNode($$Image, {
          src: "https://i.imgur.com/e94RzcX.png",
          alt: "Billing Form",
          width: 600,
          height: 375,
          class: "rounded-lg shadow-md"
        }), createVNode("p", {
          class: "text-center text-sm mt-2",
          children: "Billing Form"
        })]
      }), createVNode("div", {
        children: [createVNode($$Image, {
          src: "https://i.imgur.com/kgawDWR.png",
          alt: "Generated Invoice",
          width: 600,
          height: 375,
          class: "rounded-lg shadow-md"
        }), createVNode("p", {
          class: "text-center text-sm mt-2",
          children: "Generated Invoice"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", createVNode(_components.p, {
      children: "The billing system handles various rental scenarios:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rental within the city"
        }), ": No additional charges"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rental outside the city"
        }), ": 5% surcharge"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "On-premise rental"
        }), ": 5% discount"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Additional days"
        }), ": 2% discount for each extra day"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "learnings-and-challenges",
      children: "Learnings and Challenges"
    }), "\n", createVNode(_components.p, {
      children: "During the development of AlquiPC, I faced specific challenges such as:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Precision in financial calculations"
        }), ": Implementing algorithms that correctly handle decimal calculations in JavaScript"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "PDF integration"
        }), ": Converting dynamic HTML components to PDF documents while maintaining visual fidelity"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Smooth user experience"
        }), ": Balancing data validation and instant feedback to create an intuitive user experience"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "testing-and-quality",
      children: "Testing and Quality"
    }), "\n", createVNode(_components.p, {
      children: "The project includes unit tests to verify the correct functionality of price calculations, ensuring that the results are accurate in all possible scenarios."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "AlquiPC represents a scalable and modern solution for computer equipment rental companies, combining ease of use with advanced billing and order management functionalities."
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

const url = "src/content/projects/en/alquipc.mdx";
const file = "/Users/crus/dev/self/cris-home/src/content/projects/en/alquipc.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/crus/dev/self/cris-home/src/content/projects/en/alquipc.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
