import { c as createVNode, _ as __astro_tag_component__ } from './entrypoint_Dx6hQ0Ol.mjs';
import { F as Fragment } from './params-and-props_Cbg7M-DS.mjs';
import 'clsx';

const frontmatter = {
  "title": "Neighborhood",
  "description": "A mobile community app built with Expo and React Native to connect neighbors, share local updates, and coordinate safer neighborhoods.",
  "date": "2026-05-27T00:00:00.000Z",
  "tags": ["Expo", "React Native", "TypeScript", "Mobile", "Google Play", "Android"],
  "github": "https://github.com/zondexco/neighborhood-app"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "neighborhood---mobile-community-app",
    "text": "Neighborhood - Mobile Community App"
  }, {
    "depth": 2,
    "slug": "project-overview",
    "text": "Project Overview"
  }, {
    "depth": 2,
    "slug": "purpose-and-scope",
    "text": "Purpose and Scope"
  }, {
    "depth": 2,
    "slug": "architecture-and-stack",
    "text": "Architecture and Stack"
  }, {
    "depth": 2,
    "slug": "key-capabilities",
    "text": "Key Capabilities"
  }, {
    "depth": 2,
    "slug": "distribution-and-release",
    "text": "Distribution and Release"
  }, {
    "depth": 2,
    "slug": "what-i-contributed",
    "text": "What I Contributed"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "neighborhood---mobile-community-app",
      children: "Neighborhood - Mobile Community App"
    }), "\n", createVNode(_components.h2, {
      id: "project-overview",
      children: "Project Overview"
    }), "\n", createVNode(_components.p, {
      children: "Neighborhood App is a mobile application built with Expo and React Native to help local communities communicate, coordinate events, report incidents, and stay informed through neighborhood-focused channels. The app is designed to strengthen trust, safety, and collaboration between residents."
    }), "\n", createVNode(_components.h2, {
      id: "purpose-and-scope",
      children: "Purpose and Scope"
    }), "\n", createVNode(_components.p, {
      children: "The goal of Neighborhood is to create a digital space where neighbors can share announcements, organize activities, report issues, and discover relevant local information in one place. It brings together the core interactions a community needs, from safety notices and local classifieds to resident updates and nearby services."
    }), "\n", createVNode(_components.h2, {
      id: "architecture-and-stack",
      children: "Architecture and Stack"
    }), "\n", createVNode(_components.p, {
      children: "The project is built around a modern mobile stack with a strong focus on maintainability and release readiness:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Expo + React Native"
        }), " for fast cross-platform mobile development"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "TypeScript"
        }), " for strong typing and scalable code structure"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "JavaScript"
        }), " for auxiliary logic and ecosystem compatibility"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "CSS"
        }), " for targeted styling and visual customization"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Navigation and state management"
        }), " patterns for multi-screen flows and shared data"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "key-capabilities",
      children: "Key Capabilities"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Community announcements and neighborhood updates"
      }), "\n", createVNode(_components.li, {
        children: "Event coordination and resident communication"
      }), "\n", createVNode(_components.li, {
        children: "Incident reporting and local safety workflows"
      }), "\n", createVNode(_components.li, {
        children: "Chat and community interaction flows"
      }), "\n", createVNode(_components.li, {
        children: "Push notification support for important alerts"
      }), "\n", createVNode(_components.li, {
        children: "Location-aware features and nearby resource discovery"
      }), "\n", createVNode(_components.li, {
        children: "External service integrations for local information and business context"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "distribution-and-release",
      children: "Distribution and Release"
    }), "\n", createVNode(_components.p, {
      children: "Expo made it easier to test quickly, iterate on mobile features, and publish across platforms. I also gained hands-on experience managing Google Play Store delivery, release workflows, and the operational details needed to ship and maintain a mobile app."
    }), "\n", createVNode(_components.h2, {
      id: "what-i-contributed",
      children: "What I Contributed"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Led and contributed to the development of a multiplatform neighborhood-focused mobile application"
      }), "\n", createVNode(_components.li, {
        children: "Used Expo and React Native with TypeScript to keep the codebase robust and scalable"
      }), "\n", createVNode(_components.li, {
        children: "Implemented flows for authentication, notifications, events, and community chat"
      }), "\n", createVNode(_components.li, {
        children: "Applied modular architecture and reusable UI patterns"
      }), "\n", createVNode(_components.li, {
        children: "Supported deployment and release work, including Google Play Store management"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: "Neighborhood App is a practical mobile platform for community connection, combining modern React Native development with release experience and mobile product thinking focused on real neighborhood needs."
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

const url = "src/content/projects/en/neighborhood.mdx";
const file = "/Users/crus/dev/self/cris-home/src/content/projects/en/neighborhood.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/crus/dev/self/cris-home/src/content/projects/en/neighborhood.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
