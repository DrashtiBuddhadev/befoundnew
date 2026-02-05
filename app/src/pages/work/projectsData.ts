// ─── Shared project data ────────────────────────────────────────────────────
// Single source of truth consumed by WorkPage, ProjectsSection (home), and
// ProjectDetailPage.

export interface Highlight {
  step: string;
  title: string;
  content: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  image: string;
  year: string;
  /** Short one-line description used in cards */
  description: string;
  /** Longer overview copy shown on the detail page */
  overview: string;
  /** Bullet-style services delivered */
  services: string[];
  /** Client / brand name */
  client: string;
  /** Extra full-bleed images for the detail gallery (can reuse hero image) */
  gallery: string[];
  /** Country the client is based in */
  country: string;
  /** Industry / vertical */
  industry: string;
  /** Tools & platforms used */
  tools: string;
  /** Key functionality delivered */
  functionality: string;
  /** Optional live-site URL */
  liveUrl?: string;
  /** Key-highlights steps shown in the auto-play stepper */
  highlights: Highlight[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kaizen Dezain',
    category: 'Brand Identity',
    tags: ['Brand Identity', 'Web Design'],
    image: '/images/work/Kaizen Dezain Mockup.png',
    year: '2024',
    description:
      'A complete brand-identity system and marketing site for a premium Japanese-inspired design consultancy.',
    overview:
      'Kaizen Dezain needed a visual identity that embodied the Japanese philosophy of continuous improvement — refined, purposeful, and timeless. We built a complete brand system from logo and typography through to a marketing site that mirrors those values in every interaction.',
    services: [
      'Logo & mark design',
      'Typography system',
      'Brand guidelines',
      'Marketing website',
      'Motion & micro-interactions',
    ],
    client: 'Kaizen Dezain Studio',
    gallery: [
      '/images/work/Kaizen Dezain Mockup.png',
      '/images/work/Kaizen Dezain Mockup.png',
      '/images/work/Kaizen Dezain Mockup.png',
    ],
    country: 'Japan',
    industry: 'Design / Consultancy',
    tools: 'Figma, Webflow, After Effects',
    functionality: 'Brand system with animated logo reveal and responsive marketing site.',
    highlights: [
      {
        step: '01',
        title: 'Brand Discovery',
        content: 'Deep-dive workshops uncovered the core philosophy and visual language that would define the entire identity system.',
        image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Identity System',
        content: 'Crafted a refined logo, bespoke type pairing, and motion principles that honour Japanese aesthetics at every scale.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Marketing Site',
        content: 'Built a scroll-driven marketing site in Webflow with animated reveals and a seamless brand-to-product journey.',
        image: 'https://images.unsplash.com/photo-1593081953906-cbdc81df995b?q=80&w=2070&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 2,
    title: 'NW9 Studio',
    category: 'Design System',
    tags: ['Design System', 'Development'],
    image: '/images/work/NW9 Design System Mockup.png',
    year: '2024',
    description:
      'Scalable design-system architecture paired with a component library built for the NW9 creative team.',
    overview:
      'NW9 was scaling fast and their design process couldn\'t keep up. We architected a modular design system — tokens, components, documentation — that lets any team member ship pixel-perfect work without a designer in the loop.',
    services: [
      'Design-token architecture',
      'Component library (50+ components)',
      'Storybook documentation',
      'Figma ↔ code sync workflow',
      'Onboarding & training',
    ],
    client: 'NW9 Creative',
    gallery: [
      '/images/work/NW9 Design System Mockup.png',
      '/images/work/NW9 Design System Mockup.png',
      '/images/work/NW9 Design System Mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Creative / Agency',
    tools: 'Figma, React, Storybook, TypeScript',
    functionality: 'Scalable design-token system with 50+ reusable components and live documentation.',
    highlights: [
      {
        step: '01',
        title: 'Token Architecture',
        content: 'Designed a semantic token layer — colour, spacing, typography — that maps directly to brand decisions and scales across products.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop',
      },
      {
        step: '02',
        title: '50+ Components',
        content: 'Built a library of reusable React components with built-in variants, accessibility, and interactive Storybook docs.',
        image: 'https://images.unsplash.com/photo-1627384113710-3b7278687504?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Team Handoff',
        content: 'Delivered a Figma ↔ code sync workflow so any designer can prototype with production components in real time.',
        image: 'https://images.unsplash.com/photo-1531622545942-59be66ae2268?q=80&w=1974&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 3,
    title: 'Muse & Masterpiece',
    category: 'E-commerce',
    tags: ['E-commerce', 'Branding'],
    image: '/images/work/Muse & Masterpiece Mockup.png',
    year: '2024',
    description:
      'An immersive e-commerce experience that blends editorial storytelling with seamless product discovery.',
    overview:
      'Muse & Masterpiece sells luxury art prints. The challenge: make an online store feel as curated as a gallery visit. We blended editorial layouts, generous whitespace, and cinematic product imagery into a storefront that turns browsing into an experience.',
    services: [
      'Brand identity refresh',
      'E-commerce UX & UI',
      'Editorial product pages',
      'Checkout optimisation',
      'Marketing landing pages',
    ],
    client: 'Muse & Masterpiece',
    gallery: [
      '/images/work/Muse & Masterpiece Mockup.png',
      '/images/work/Muse & Masterpiece Mockup.png',
      '/images/work/Muse & Masterpiece Mockup.png',
    ],
    country: 'Switzerland',
    industry: 'Art / Luxury E-commerce',
    tools: 'Figma, Shopify, Next.js, Tailwind CSS',
    functionality: 'Editorial storefront with curated product discovery and seamless checkout.',
    highlights: [
      {
        step: '01',
        title: 'Editorial UX',
        content: 'Replaced the standard product grid with magazine-style layouts that let each piece of art breathe and tell its story.',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2074&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Product Pages',
        content: 'Immersive product pages with large-format imagery, zoom interaction, and contextual styling recommendations.',
        image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Checkout Flow',
        content: 'Streamlined a multi-step checkout into a single smooth scroll, reducing drop-off by over 40%.',
        image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2070&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 4,
    title: 'Weston Dental',
    category: 'Healthcare',
    tags: ['Healthcare', 'SEO'],
    image: '/images/work/Weston Dental Mockup.png',
    year: '2025',
    description:
      'A trust-first digital presence for a leading dental practice, optimised for search and local discovery.',
    overview:
      'Patients choose dentists on trust. Weston needed a site that communicated expertise and warmth from the first scroll — while ranking well enough to actually be found. We rebuilt their digital presence with a content architecture engineered for local SEO and conversion.',
    services: [
      'Website redesign',
      'Local SEO strategy',
      'Content architecture',
      'Appointment booking flow',
      'Google Business optimisation',
    ],
    client: 'Weston Dental Practice',
    gallery: [
      '/images/work/Weston Dental Mockup.png',
      '/images/work/Weston Dental Mockup.png',
      '/images/work/Weston Dental Mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Healthcare / Dental',
    tools: 'Figma, WordPress, Google Analytics',
    functionality: 'Local-SEO-first site with integrated appointment booking flow.',
    highlights: [
      {
        step: '01',
        title: 'SEO Architecture',
        content: 'Restructured the entire site hierarchy around local search intent — treatment pages, location clusters, and schema markup.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2025&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Trust-First Design',
        content: 'Warm, clinical-yet-approachable UI with real photography, patient testimonials, and transparent pricing.',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Booking Flow',
        content: 'One-tap appointment booking synced with the practice calendar — zero phone calls required for 60% of bookings.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 5,
    title: 'NW9 Development',
    category: 'Engineering',
    tags: ['Custom Engineering', 'Development'],
    image: '/images/work/NW9 Development Services Mockup.png',
    year: '2025',
    description:
      'Purpose-built custom tooling and internal platforms delivered for the NW9 engineering division.',
    overview:
      'NW9\'s engineering team was bottlenecked by off-the-shelf tools that didn\'t fit their workflow. We scoped, designed, and shipped bespoke internal platforms — from project tracking to asset pipeline — that cut friction and shipped faster.',
    services: [
      'Requirements & scoping',
      'Internal platform design',
      'Full-stack development',
      'API integrations',
      'Deployment & DevOps',
    ],
    client: 'NW9 Engineering',
    gallery: [
      '/images/work/NW9 Development Services Mockup.png',
      '/images/work/NW9 Development Services Mockup.png',
      '/images/work/NW9 Development Services Mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Technology / SaaS',
    tools: 'Figma, React, Node.js, AWS',
    functionality: 'Custom internal platforms with real-time dashboards and API integrations.',
    highlights: [
      {
        step: '01',
        title: 'Scoping & Discovery',
        content: 'Mapped every friction point in the existing workflow and translated them into a prioritised product roadmap.',
        image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Real-Time Dashboards',
        content: 'Built live dashboards with WebSocket streams — project status, asset pipeline, and team velocity all in one view.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'API & DevOps',
        content: 'Wired up CI/CD on AWS, connected third-party APIs, and shipped a self-service deployment dashboard for the engineering team.',
        image: 'https://images.unsplash.com/photo-1627384113710-3b7278687504?q=80&w=1974&auto=format&fit=crop',
      },
    ],
  },
];

// ─── Derived helpers ────────────────────────────────────────────────────────
export const ALL_FILTER = 'All';

export const filterCategories: string[] = [
  ALL_FILTER,
  ...new Set(projects.flatMap((p) => p.tags)),
];

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function filterProjects(activeFilter: string): Project[] {
  return activeFilter === ALL_FILTER
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));
}
