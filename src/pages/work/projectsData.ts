// ─── Shared project data ────────────────────────────────────────────────────
// Single source of truth consumed by WorkPage, ProjectsSection (home), and
// ProjectDetailPage.

export interface Highlight {
  step: string;
  title: string;
  content: string;
  image: string;
}

/** A single colour swatch in the moodboard palette */
export interface PaletteSwatch {
  /** Hex or CSS colour value, e.g. '#1a1a2e' */
  color: string;
  /** Human-readable label shown beneath the swatch */
  label: string;
}

/** One image tile inside the moodboard grid (mockups, Figma screens, assets …) */
export interface MoodboardImage {
  src: string;
  /** Alt / caption shown on hover or below */
  caption: string;
}

/** Full moodboard block attached to a project */
export interface Moodboard {
  /** Colour-palette swatches rendered as a strip */
  palette: PaletteSwatch[];
  /** Grid of mockup / Figma / design images */
  images: MoodboardImage[];
}

/** Wireframe step showing design evolution */
export interface WireframeStep {
  title: string;
  description: string;
  image: string;
  type: 'low-fidelity' | 'high-fidelity' | 'final-design';
  learnings?: string;
}

/** Design progression stage */
export interface DesignProgression {
  stage: 'research' | 'wireframe' | 'prototype' | 'final';
  title: string;
  description: string;
  learnings?: string;
  image: string;
}

/** Typography system definition */
export interface TypographySystem {
  primary: { name: string; weights: string[] };
  secondary?: { name: string; weights: string[] };
  scale: Array<{ name: string; size: string; weight: string; sample: string }>;
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
  /** Optional video/GIF URL for project showcase */
  videoUrl?: string;
  /** Key-highlights steps shown in the auto-play stepper */
  highlights: Highlight[];
  /** Optional moodboard: palette + mockup images */
  moodboard?: Moodboard;
  /** Optional wireframe progression (for design case studies) */
  wireframes?: WireframeStep[];
  /** Optional design progression timeline */
  designProgression?: DesignProgression[];
  /** Optional typography system */
  typography?: TypographySystem;
  /** Figma prototype embed URL */
  figmaPrototype?: string;
  /** Design principles */
  designPrinciples?: string[];
}

export const projects: Project[] = [
  {
    id: 15,
    title: 'Soulful Swaad',
    category: 'Brand Identity',
    tags: ['Logo and Branding', 'Food & Beverage', 'Cloud Kitchen'],
    image: '/images/logo&branding/1.jpg',
    year: '2025',
    description:
      'A heartfelt brand identity for a mother-daughter Gujarati cloud kitchen celebrating authentic homemade flavors and culinary heritage.',
    overview:
      'Soulful Swaad is where tradition meets passion — a cloud kitchen born from a mother\'s timeless recipes and her daughter\'s vision to share Gujarat\'s authentic flavors with the world. We crafted a complete brand identity that honors the warmth of home cooking while establishing a vibrant, contemporary presence. Every dal, every thepla, every perfectly spiced undhiyu is treated not as a transaction, but as an invitation to their family table.',
    services: [
      'Logo design & brand mark',
      'Brand identity system',
      'Color palette development',
      'Typography selection',
      'Brand guidelines',
      'Packaging & collateral design',
    ],
    client: 'Soulful Swaad Cloud Kitchen',
    gallery: [
      '/images/logo&branding/1.jpg',
      '/images/logo&branding/2.jpg',
      '/images/logo&branding/3.jpg',
      '/images/logo&branding/4.jpg',
      '/images/logo&branding/5.jpg',
      '/images/logo&branding/6.jpg',
    ],
    country: 'India',
    industry: 'Food & Beverage / Cloud Kitchen',
    tools: 'Adobe Illustrator, Photoshop, Figma',
    functionality: 'Complete brand identity system including logo design, color palette, typography, brand applications across signage, packaging, and digital touchpoints.',
    highlights: [
      {
        step: '01',
        title: 'Logo Conceptualization',
        content: 'The ornamental "S" letterform draws inspiration from traditional Gujarati motifs and cooking utensils — spoons, sauté pans, and fresh ingredients — symbolizing the sacred space where love transforms into food.',
        image: '/images/logo&branding/3.jpg',
      },
      {
        step: '02',
        title: 'Vibrant Color Palette',
        content: 'Paradise Pink (#E43B64) represents warmth and hospitality, while Deep Green (#03615B) evokes fresh ingredients and traditional values. Together they create a bold, appetizing contrast that stands out in the cloud kitchen space.',
        image: '/images/logo&branding/4.jpg',
      },
      {
        step: '03',
        title: 'Brand Story & Voice',
        content: 'Crafted a narrative celebrating Gujarati hospitality, generational wisdom, and the belief that food made with pure intentions becomes a homecoming. Every touchpoint reinforces the mother-daughter bond and authentic cooking methods.',
        image: '/images/logo&branding/2.jpg',
      },
      {
        step: '04',
        title: 'Real-World Applications',
        content: 'Applied the identity across signage, packaging, business cards, and digital platforms. The logo works beautifully on circular signage, menu cards, and delivery packaging — maintaining legibility and warmth at every scale.',
        image: '/images/logo&branding/5.jpg',
      },
    ],
    moodboard: {
      palette: [
        { color: '#E43B64', label: 'Paradise Pink' },
        { color: '#03615B', label: 'Deep Green' },
        { color: '#f4f4f4', label: 'Cultured White' },
        { color: '#191919', label: 'Classy Black' },
      ],
      images: [
        { src: '/images/logo&branding/1.jpg', caption: 'Logo on Food Background' },
        { src: '/images/logo&branding/3.jpg', caption: 'Logo Element Breakdown' },
        { src: '/images/logo&branding/5.jpg', caption: 'Signage & Packaging Mockups' },
        { src: '/images/logo&branding/4.jpg', caption: 'Color Palette System' },
        { src: '/images/logo&branding/2.jpg', caption: 'Brand Story' },
      ],
    },
  },
  {
    id: 1,
    title: 'Kaizen Dezain',
    category: 'Brand Identity',
    tags: ['Interior Design', 'Website Development'],
    image: '/images/work/Kaizen Dezain Mockup.png',
    year: '2025',
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
    country: 'India',
    industry: 'Interior Design',
    tools: 'Figma,React.js,Tailwind CSS, After Effects',
    functionality: 'This interior design website was built using modern web development technologies including React, Interior Design, Portfolio and more, ensuring optimal performance, SEO optimization, and responsive design.',
    highlights: [
      {
        step: '01',
        title: 'Space Planning & Design',
        content: 'Strategic 2D floor planning and spatial layout to optimize furniture placement, circulation flow, and functional zones for everyday living.',
        image: '/images/work/kaizen/1.png',
      },
      {
        step: '02',
        title: '3D Visualization',
        content: 'Photorealistic 3D renders showcasing material textures, lighting, and spatial relationships to visualize the final design before execution.',
        image: '/images/work/kaizen/2.png',
      },
      {
        step: '03',
        title: 'Material Selection',
        content: 'Curated material palettes including wood veneers, marble accents, PU paint finishes, and premium textiles for a cohesive aesthetic.',
        image: '/images/work/kaizen/3.png',
      },
      {
        step: '04',
        title: 'Custom Millwork',
        content: 'Designed bespoke storage solutions, paneling systems, and built-in furniture with detailed specifications for seamless execution.',
        image: '/images/work/kaizen/4.png',
      },
      {
        step: '05',
        title: 'Lighting & Ambiance',
        content: 'Integrated ambient, task, and accent lighting design with smart controls to create layered, mood-driven environments.',
        image: '/images/work/kaizen/5.png',
      },
    ],
    moodboard: {
      palette: [
        { color: '#000000', label: 'Black' },
        { color: '#ffffff', label: 'White' },
        { color: '#ff620a', label: 'Orange' },
      ],
      images: [
        { src: '/images/work/kaizen/phone-mockup.png', caption: 'iPhone Mockup' },
        { src: '/images/work/kaizen/desktopversion.png', caption: 'Desktop Version' },
        { src: '/images/work/kaizen/iPad-mockup.png', caption: 'iPad Mockup' },
      ],
    },
  },

  {
    id: 2,
    title: 'Muse & Masterpiece',
    category: 'Creative / Portfolio',
    tags: ['Creative', 'Portfolio', 'Web Design', 'Art Gallery', 'Heritage Design', 'React.js'],
    image: '/images/work/Muse & Masterpiece Mockup.png',
    year: '2024',
    description:
      'A bold creative portfolio bridging India\'s artistic heritage with contemporary design through vibrant contrasts and emotional storytelling.',
    overview:
      'Muse & Masterpiece Studio is where India\'s artistic heritage meets contemporary design expression. Built with React.js, the site embodies a "vibrant metamorphosis of color" spanning the full emotional spectrum — from classic Inky Black and White foundations to energetic Neon Pink and Electric Blue accents. Through masterful contrast and refined typography (Cormorant Garamond paired with Manrope), the design communicates creative liberation while honoring timeless artistic traditions.',
    services: [
      'Website development',
      'React.js implementation',
      'Artistic branding & identity',
      'Contemporary art showcase',
    ],
    client: 'Muse & Masterpiece Studio',
    gallery: [
      '/images/work/Muse & Masterpiece Mockup.png',
      '/images/work/Muse & Masterpiece Mockup.png',
      '/images/work/Muse & Masterpiece Mockup.png',
    ],
    country: 'India',
    industry: 'Creative / Art Studio',
    tools: 'React.js (Vite), Figma, Tailwind CSS',
    functionality: 'Art portfolio and gallery showcase built with React.js featuring curated project visuals, artist profiles, and heritage storytelling with smooth animations.',
    liveUrl: 'https://www.museandmasterpiece.in/',
    videoUrl: 'https://play.gumlet.io/embed/69898b24924a60df4b4e59c0',
    highlights: [
      {
        step: '01',
        title: 'Emotional Spectrum Design',
        content: 'Crafted a color palette spanning the full range of human emotion — from sophisticated black/white foundations to vibrant neon accents, enabling flexible and expressive visual communication across all sections.',
        image: '/images/work/muse/1.png',
      },
      {
        step: '02',
        title: 'Contrast as Creative Liberation',
        content: 'Leveraged masterful contrast between classic foundations (Inky Black & White) and bold contemporary accents (Neon Pink & Electric Blue) to communicate creative freedom and artistic expression.',
        image: '/images/work/muse/2.png',
      },
      {
        step: '03',
        title: 'Heritage Meets Contemporary',
        content: 'Paired elegant Cormorant Garamond serif typography (evoking classical heritage) with modern Manrope sans-serif (representing contemporary clarity) to reinforce the brand\'s mission of bridging tradition with innovation.',
        image: '/images/work/Muse & Masterpiece Mockup.png',
      },
      {
        step: '04',
        title: 'Artist Journey & Philosophy',
        content: 'Developed immersive storytelling sections showcasing the founder\'s artistic journey, cultural influences, and design philosophy through dynamic layouts and curated artwork elements.',
        image: '/images/work/muse/1.png',
      },
    ],
    moodboard: {
      palette: [
        { color: '#0a0a0a', label: 'Inky Black' },
        { color: '#ffffff', label: 'Pure White' },
        { color: '#c9a52c', label: 'Golden Yellow' }
      ],
      images: [
        { src: '/images/work/Muse & Masterpiece Mockup.png', caption: 'Heritage Hero' },
        { src: '/images/work/Muse & Masterpiece Mockup.png', caption: 'Contrast Showcase' },
        { src: '/images/work/Muse & Masterpiece Mockup.png', caption: 'Typography System' },
        { src: '/images/work/Muse & Masterpiece Mockup.png', caption: 'Art Gallery Grid' },
        { src: '/images/work/Muse & Masterpiece Mockup.png', caption: 'Emotional Palette' },
      ],
    },
  },
  {
    id: 3,
    title: 'Weston Family Dental',
    category: 'Healthcare / Clinic',
    tags: ['Healthcare UX', 'Web Design', 'Appointment', 'Responsive', 'WordPress'],
    image: '/images/work/Weston Dental Mockup.png',
    year: '2025',
    description:
      'A comprehensive healthcare website providing dental services, SEO optimization, and targeted advertising solutions.',
    overview:
      'Weston Family Dental Florida is a technology-driven dental clinic site built on WordPress. We delivered complete website development, search engine optimization, and digital advertising campaigns to help them reach more patients and grow their practice online.',
    services: [
      'Website development',
      'SEO optimization',
      'Digital advertising (Google Ads)',
      'WordPress customization',
    ],
    client: 'Weston Family Dental Florida',
    gallery: [
      '/images/work/Weston Dental Mockup.png',
      '/images/work/Weston Dental Mockup.png',
      '/images/work/Weston Dental Mockup.png',
    ],
    country: 'United States',
    industry: 'Technology / Healthcare',
    tools: 'WordPress, Figma, Google Analytics, Google Ads',
    functionality: 'Full-featured dental services website with SEO optimization, appointment booking integration, and ad campaign management for patient acquisition.',
    liveUrl: 'https://westonfamilydentalflorida.com/',
    videoUrl: 'https://play.gumlet.io/embed/69898b244db88a967f7d9aba',
    highlights: [
      {
        step: '01',
        title: 'Appointment Booking CTA',
        content: 'Prominent, patient-first booking call-to-action placed at every scroll point — reducing friction from discovery to appointment.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2025&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Trust-First Design',
        content: 'Calm blues and whites with clean forms and clear service breakdowns create an approachable, credible experience for patients.',
        image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Service & Location Details',
        content: 'Comprehensive treatment pages, patient education resources, and integrated location & contact details in one cohesive layout.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#0c4a6e', label: 'Deep Teal' },
        { color: '#7dd3fc', label: 'Sky Blue' },
        { color: '#ffffff', label: 'Pure White' },
        { color: '#f0f9ff', label: 'Ice' },
        { color: '#38bdf8', label: 'Bright Sky' },
      ],
      images: [
        { src: '/images/work/Weston Dental Mockup.png', caption: 'Homepage Hero' },
        { src: '/images/work/Weston Dental Mockup.png', caption: 'Services Breakdown' },
        { src: '/images/work/Weston Dental Mockup.png', caption: 'Appointment Booking' },
        { src: '/images/work/Weston Dental Mockup.png', caption: 'Mobile Layout' },
        { src: '/images/work/Weston Dental Mockup.png', caption: 'Contact & Location' },
      ],
    },
  },
  {
    id: 4,
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
    moodboard: {
      palette: [
        { color: '#0a0a0a', label: 'Black' },
        { color: '#1e293b', label: 'Slate' },
        { color: '#3b82f6', label: 'Blue' },
        { color: '#cbd5e1', label: 'Light Slate' },
        { color: '#f8fafc', label: 'Surface' },
      ],
      images: [
        { src: '/images/work/NW9 Development Services Mockup.png', caption: 'Platform Dashboard' },
        { src: '/images/work/NW9 Development Services Mockup.png', caption: 'Real-Time Analytics' },
        { src: '/images/work/NW9 Development Services Mockup.png', caption: 'API Integration View' },
        { src: '/images/work/NW9 Development Services Mockup.png', caption: 'DevOps Control Panel' },
        { src: '/images/work/NW9 Development Services Mockup.png', caption: 'Mobile Responsive' },
      ],
    },
  },
  {
    id: 5,
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
    moodboard: {
      palette: [
        { color: '#111827', label: 'Deep Navy' },
        { color: '#6366f1', label: 'Indigo' },
        { color: '#e0e7ff', label: 'Light Lavender' },
        { color: '#f9fafb', label: 'Off White' },
        { color: '#4f46e5', label: 'Vivid Indigo' },
      ],
      images: [
        { src: '/images/work/NW9 Design System Mockup.png', caption: 'Design System Dashboard' },
        { src: '/images/work/NW9 Design System Mockup.png', caption: 'Component Library' },
        { src: '/images/work/NW9 Design System Mockup.png', caption: 'Token Architecture' },
        { src: '/images/work/NW9 Design System Mockup.png', caption: 'Storybook Docs' },
        { src: '/images/work/NW9 Design System Mockup.png', caption: 'Figma Sync Workflow' },
      ],
    },
  },
  {
    id: 6,
    title: 'Blue Escape Holidays',
    category: 'Travel & Tourism',
    tags: ['Full-Stack', 'Web Application', 'Custom Package', 'Next.js', 'Node.js'],
    image: '/images/work/blueEscape.png',
    year: '2025',
    description:
      'A full-stack travel booking platform with custom package builder, admin panel, and seamless user experience.',
    overview:
      'Blue Escape Holidays is a comprehensive travel solutions platform built with modern full-stack architecture. We delivered a custom package booking system with a powerful admin panel for managing destinations and packages, paired with a stunning frontend experience for travelers to explore and book their dream holidays.',
    services: [
      'Custom package development',
      'Full-stack web application',
      'Admin panel & dashboard',
      'Frontend development',
    ],
    client: 'Blue Escape Holidays',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Travel & Tourism',
    tools: 'Next.js, Node.js (NestJS), MySQL, Figma, Tailwind CSS',
    functionality: 'Full-stack web application featuring custom package builder, admin panel for content management, MySQL database integration, and responsive frontend built with Next.js.',
    liveUrl: 'https://www.blueescapeholidays.com/',
    videoUrl: 'https://play.gumlet.io/embed/69898b244db88a967f7d9ab8',
    highlights: [
      {
        step: '01',
        title: 'Destination Showcases',
        content: 'Immersive destination pages built around hero imagery and itinerary content, turning browsing into an aspirational experience.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2025&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Trip Package Listings',
        content: 'Integrated package cards with clear pricing, duration, and highlights — designed to guide users from inspiration to enquiry.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Enquiry & CTA Flow',
        content: 'Prominent call-to-action buttons and a streamlined contact form make it effortless to request a quote or plan a trip.',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#0369a1', label: 'Ocean Blue' },
        { color: '#38bdf8', label: 'Sky' },
        { color: '#fef3c7', label: 'Sand Gold' },
        { color: '#ffffff', label: 'White' },
        { color: '#1e3a5f', label: 'Deep Sea' },
      ],
      images: [
        { src: '/images/work/mockup.png', caption: 'Homepage Hero' },
        { src: '/images/work/mockup.png', caption: 'Destination Showcase' },
        { src: '/images/work/mockup.png', caption: 'Trip Package Cards' },
        { src: '/images/work/mockup.png', caption: 'Enquiry Form' },
        { src: '/images/work/mockup.png', caption: 'Mobile Experience' },
      ],
    },
  },
  {
    id: 7,
    title: 'Crazy Virality',
    category: 'Marketing / Agency',
    tags: ['Digital Marketing', 'Web Design', 'Website Development', 'Agency'],
    image: '/images/work/crazyvirality.png',
    year: '2025',
    description:
      'A bold digital marketing agency website built to showcase services and drive client engagement.',
    overview:
      'Crazy Virality is a digital marketing and growth agency. We delivered comprehensive website development that effectively communicates their expertise in helping brands expand their reach. The site features high-impact messaging, service showcases, and strategic calls-to-action designed to convert visitors into clients.',
    services: [
      'Website development',
      'Digital marketing presentation',
      'Service showcase design',
      'Lead generation optimization',
    ],
    client: 'Crazy Virality',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Marketing / Agency',
    tools: 'Figma, Next.js, Tailwind CSS',
    functionality: 'Marketing agency website development with strategic service presentation, testimonial integration, and optimized conversion pathways.',
    liveUrl: 'https://www.crazyvirality.com/',
    videoUrl: 'https://play.gumlet.io/embed/69898b244db88a967f7d9ab6',
    highlights: [
      {
        step: '01',
        title: 'Bold Brand Messaging',
        content: 'High-contrast layouts and punchy value propositions immediately communicate the agency\'s growth-first approach to every visitor.',
        image: 'https://images.unsplash.com/photo-1562434652-dd16c701fce6?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Service Offerings',
        content: 'Dedicated sections for SEO, social media, and paid ads — each backed by data-driven UI elements and clear outcome framing.',
        image: 'https://images.unsplash.com/photo-1611926482787-cb57d7c71fb8?q=80&w=2070&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Lead Capture & Trust',
        content: 'Testimonials and trust signals paired with strategically placed consultation CTAs to convert interest into qualified leads.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#1a1a2e', label: 'Dark Navy' },
        { color: '#e94560', label: 'Bold Red' },
        { color: '#f5f5f5', label: 'Light Grey' },
        { color: '#16213e', label: 'Midnight' },
        { color: '#ffffff', label: 'White' },
      ],
      images: [
        { src: '/images/work/mockup.png', caption: 'Agency Hero' },
        { src: '/images/work/mockup.png', caption: 'Service Offerings' },
        { src: '/images/work/mockup.png', caption: 'Testimonials Block' },
        { src: '/images/work/mockup.png', caption: 'Lead Capture Form' },
        { src: '/images/work/mockup.png', caption: 'Mobile View' },
      ],
    },
  },
  {
    id: 8,
    title: 'Kiazen Interiors',
    category: 'Design / Interiors',
    tags: ['Portfolio', 'Web Design', 'UX', 'Project Showcase'],
    image: '/images/work/mockup.png',
    year: '2025',
    description:
      'An image-heavy interior design portfolio showcasing aesthetic-driven spaces and customised design solutions.',
    overview:
      'Kiazen Interiors is an interior design firm showcasing aesthetic-driven interior spaces with a focus on customised solutions. The site leads with textured, image-rich project galleries and a clear design philosophy section, positioning the studio as a trusted partner for residential and commercial spaces.',
    services: [
      'Interior design',
      'Residential & commercial space planning',
      'Visualization & concept design',
    ],
    client: 'Kiazen Interiors',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Design / Interiors',
    tools: 'Figma, Next.js, Tailwind CSS',
    functionality: 'Interior design portfolio with project galleries, design ethos sections, service offerings, and contact enquiries.',
    liveUrl: 'https://www.kiazeninteriors.com/',
    highlights: [
      {
        step: '01',
        title: 'Project Galleries',
        content: 'Full-bleed image grids showcase completed spaces, letting the quality and range of each project speak clearly.',
        image: 'https://images.unsplash.com/photo-1616046236924-a5e0e728dea5?q=80&w=2070&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Design Ethos',
        content: 'A dedicated philosophy section builds trust by articulating the studio\'s values — aesthetics, function, and personalisation.',
        image: 'https://images.unsplash.com/photo-1616593019163-91c5e6ca3b8b?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Contact & Enquiry',
        content: 'A clean contact form and structured service breakdown make it straightforward for homeowners and clients to start a project.',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#2c2c2c', label: 'Charcoal' },
        { color: '#c4a882', label: 'Warm Taupe' },
        { color: '#f5f0eb', label: 'Cream' },
        { color: '#8b7d6b', label: 'Clay' },
        { color: '#1a1a1a', label: 'Jet' },
      ],
      images: [
        { src: '/images/work/mockup.png', caption: 'Project Gallery Hero' },
        { src: '/images/work/mockup.png', caption: 'Space Showcase' },
        { src: '/images/work/mockup.png', caption: 'Design Ethos Page' },
        { src: '/images/work/mockup.png', caption: 'Service Details' },
        { src: '/images/work/mockup.png', caption: 'Contact Form' },
      ],
    },
  },
  {
    id: 9,
    title: 'United Internationals',
    category: 'Corporate / Business',
    tags: ['Corporate', 'Web Design', 'Website Development', 'Business'],
    image: '/images/work/united.png',
    year: '2025',
    description:
      'A professional corporate website showcasing business services with clean design and effective communication.',
    overview:
      'United Internationals is a corporate business solutions provider. We delivered comprehensive website development that communicates their expertise through a clean corporate aesthetic, structured information architecture, and professional visual design that builds trust with prospective clients.',
    services: [
      'Website development',
      'Corporate branding',
      'Business presentation',
      'Contact integration',
    ],
    client: 'United Internationals',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Corporate / Business',
    tools: 'Figma, Next.js, Tailwind CSS',
    functionality: 'Corporate website development with professional service presentation, clear information hierarchy, and strategic contact integration.',
    liveUrl: 'https://www.unitedintls.com/',
    videoUrl: 'https://play.gumlet.io/embed/69898b24742559dc5a6ed643',
    highlights: [
      {
        step: '01',
        title: 'Structured Service Sections',
        content: 'Each service area is clearly segmented with its own dedicated section, making it simple for prospects to find what matters.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Visual Hierarchy',
        content: 'A professional typographic scale and restrained colour palette establish trust and guide the reader through key messaging.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Contact & Navigation',
        content: 'Intuitive navigation paired with a prominent contact CTA ensures visitors can always find the next step with ease.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#1f2937', label: 'Corporate Dark' },
        { color: '#6b7280', label: 'Neutral Grey' },
        { color: '#d1d5db', label: 'Silver' },
        { color: '#f9fafb', label: 'Surface' },
        { color: '#111827', label: 'Ink' },
      ],
      images: [
        { src: '/images/work/mockup.png', caption: 'Corporate Homepage' },
        { src: '/images/work/mockup.png', caption: 'Service Sections' },
        { src: '/images/work/mockup.png', caption: 'Visual Hierarchy' },
        { src: '/images/work/mockup.png', caption: 'Navigation Structure' },
        { src: '/images/work/mockup.png', caption: 'Contact Page' },
      ],
    },
  },
  {
    id: 10,
    title: 'Deep Investment',
    category: 'Finance / Advisory',
    tags: ['Finance UX', 'Web Design', 'Contact Enquiry', 'Corporate'],
    image: '/images/work/mockup.png',
    year: '2025',
    description:
      'A clean, trust-forward finance site presenting investment advisory services and client engagement channels.',
    overview:
      'Deep Investment is a finance-focused business site providing financial advisory and investment services content. The design prioritises credibility through professional typography, structured information grids, and trust-building layout patterns.',
    services: [
      'Investment advisory',
      'Client services',
      'Contact enquiry handling',
    ],
    client: 'Deep Investment',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Finance / Advisory',
    tools: 'Figma, Next.js, Tailwind CSS',
    functionality: 'Finance-oriented corporate site with investment insights, services overview, and contact forms.',
    liveUrl: 'https://www.deepinvestment.co/',
    highlights: [
      {
        step: '01',
        title: 'Investment Services Overview',
        content: 'A clear breakdown of investment offerings — structured grids and data-informed layouts build confidence from the first scroll.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Professional Typography',
        content: 'Refined typographic hierarchy and restrained spacing convey authority and precision — essential for a finance brand.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Client Enquiry Flow',
        content: 'A streamlined contact section makes it effortless for prospective clients to reach out and start a conversation.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#14532d', label: 'Forest Green' },
        { color: '#4ade80', label: 'Growth Green' },
        { color: '#fefce8', label: 'Pale Gold' },
        { color: '#1c1917', label: 'Espresso' },
        { color: '#f5f5f0', label: 'Warm White' },
      ],
      images: [
        { src: '/images/work/mockup.png', caption: 'Investment Hero' },
        { src: '/images/work/mockup.png', caption: 'Services Overview' },
        { src: '/images/work/mockup.png', caption: 'Data Grid Layout' },
        { src: '/images/work/mockup.png', caption: 'Trust Blocks' },
        { src: '/images/work/mockup.png', caption: 'Enquiry Section' },
      ],
    },
  },
  {
    id: 11,
    title: 'Tears Run Dry',
    category: 'E-commerce / Retail',
    tags: ['E-commerce', 'CMS', 'Product Grid', 'UI'],
    image: '/images/work/mockup.png',
    year: '2025',
    description:
      'A lifestyle e-commerce storefront featuring bold product visuals and a curated retail shopping experience.',
    overview:
      'Tears Run Dry is a lifestyle and e-commerce brand with product offerings and a shopping interface. The site delivers a bold, retail-forward experience through striking product imagery, organised grid layouts, and clear purchase CTAs.',
    services: [
      'Product sales',
      'E-commerce storefront',
      'Product grid & catalogue design',
      'Add-to-cart UX',
    ],
    client: 'Tears Run Dry',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'E-commerce / Retail',
    tools: 'Figma, Next.js, Shopify, Tailwind CSS',
    functionality: 'E-commerce experience with product catalogue, grid gallery, and add-to-cart functionality.',
    liveUrl: 'https://www.tearsrundry.com/',
    highlights: [
      {
        step: '01',
        title: 'Product Grid & Gallery',
        content: 'A clean, responsive product grid showcases the full catalogue with bold imagery, making every item immediately compelling.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Retail-Focused CTAs',
        content: 'Strategically placed buy buttons and add-to-cart interactions reduce friction and guide shoppers toward checkout.',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Curated Brand Experience',
        content: 'Editorial touches and cohesive styling throughout the shop turn product browsing into a branded lifestyle experience.',
        image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2070&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#0d0d0d', label: 'Black' },
        { color: '#e2e8f0', label: 'Stone' },
        { color: '#b91c1c', label: 'Deep Red' },
        { color: '#f8f8f8', label: 'Off White' },
        { color: '#374151', label: 'Dark Grey' },
      ],
      images: [
        { src: '/images/work/mockup.png', caption: 'Shop Hero' },
        { src: '/images/work/mockup.png', caption: 'Product Grid' },
        { src: '/images/work/mockup.png', caption: 'Product Detail' },
        { src: '/images/work/mockup.png', caption: 'Cart & CTA' },
        { src: '/images/work/mockup.png', caption: 'Mobile Shop' },
      ],
    },
  },
  {
    id: 12,
    title: 'NW9 Digital',
    category: 'Digital Agency',
    tags: ['Agency', 'Web Design', 'UX', 'Brand'],
    image: '/images/work/mockup.png',
    year: '2025',
    description:
      'A modern digital agency site presenting strategy, design, and media services with a minimal brand aesthetic.',
    overview:
      'NW9 Digital is a digital agency site presenting services, case studies, and contact options for prospective clients. The design reflects a modern, minimal brand identity — clean layouts, confident typography, and clear pathways to project inquiry.',
    services: [
      'Digital strategy',
      'Web design',
      'Media services',
      'Project inquiry handling',
    ],
    client: 'NW9 Digital',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Digital Agency',
    tools: 'Figma, Next.js, Tailwind CSS',
    functionality: 'Agency site with showcased services, case studies, and contact & project inquiry CTA.',
    liveUrl: 'https://nw9.digital/',
    highlights: [
      {
        step: '01',
        title: 'Services Showcase',
        content: 'Each service — strategy, design, media — is presented with enough context to demonstrate depth without overwhelming the reader.',
        image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Minimal Brand Aesthetic',
        content: 'A restrained palette and generous whitespace let the agency\'s work and messaging take centre stage across every section.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Project Inquiry CTA',
        content: 'A confident, well-placed inquiry section invites prospective clients to start a conversation and move toward collaboration.',
        image: 'https://images.unsplash.com/photo-1627384113710-3b7278687504?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#0f172a', label: 'Midnight' },
        { color: '#6366f1', label: 'Indigo' },
        { color: '#e0e7ff', label: 'Lavender' },
        { color: '#f1f5f9', label: 'Cloud' },
        { color: '#4338ca', label: 'Deep Indigo' },
      ],
      images: [
        { src: '/images/work/mockup.png', caption: 'Agency Homepage' },
        { src: '/images/work/mockup.png', caption: 'Services Page' },
        { src: '/images/work/mockup.png', caption: 'Case Study Layout' },
        { src: '/images/work/mockup.png', caption: 'Brand Identity' },
        { src: '/images/work/mockup.png', caption: 'Inquiry Section' },
      ],
    },
  },
  {
    id: 13,
    title: 'LumnLab',
    category: 'Technology / SaaS',
    tags: ['React.js', 'Web Development', 'UI/UX', 'Modern Design'],
    image: '/images/work/lumnlab.png',
    year: '2025',
    description:
      'A modern technology platform built with React.js featuring sleek UI and seamless user experience.',
    overview:
      'LumnLab is a cutting-edge technology platform built with React.js, delivering a sophisticated user interface and seamless interactions. The project showcases modern web development practices with component-based architecture, responsive design, and optimized performance.',
    services: [
      'Website development',
      'React.js development',
      'UI/UX design implementation',
      'Performance optimization',
    ],
    client: 'LumnLab',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United States',
    industry: 'Technology / SaaS',
    tools: 'React.js, Figma, Vite, CSS Modules',
    functionality: 'Modern web application built with React.js featuring component-based architecture, responsive design, and optimized performance for seamless user experience.',
    videoUrl: 'https://play.gumlet.io/embed/698b27f4aec3d4e420dbf3a9',
    highlights: [
      {
        step: '01',
        title: 'Component Architecture',
        content: 'Built with modular React components ensuring scalability, maintainability, and reusability across the entire application.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
      },
      {
        step: '02',
        title: 'Modern UI Design',
        content: 'Sleek, contemporary interface with smooth animations and intuitive navigation that enhances user engagement and satisfaction.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
      },
      {
        step: '03',
        title: 'Performance Optimized',
        content: 'Optimized bundle sizes, lazy loading, and efficient rendering strategies ensure lightning-fast load times and smooth interactions.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2025&auto=format&fit=crop',
      },
    ],
    moodboard: {
      palette: [
        { color: '#1a1a2e', label: 'Deep Navy' },
        { color: '#16213e', label: 'Midnight Blue' },
        { color: '#0f3460', label: 'Ocean Blue' },
        { color: '#533483', label: 'Royal Purple' },
        { color: '#e94560', label: 'Vibrant Red' },
      ],
      images: [
        { src: '/images/work/mockup.png', caption: 'Platform Dashboard' },
        { src: '/images/work/mockup.png', caption: 'Component Library' },
        { src: '/images/work/mockup.png', caption: 'Responsive Design' },
        { src: '/images/work/mockup.png', caption: 'User Interface' },
        { src: '/images/work/mockup.png', caption: 'Mobile Experience' },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────────
  // PeopleVerse - Website Design Case Study
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 14,
    title: 'PeopleVerse',
    category: 'Website Design',
    tags: ['Website Design', 'UI/UX', 'Wireframing'],
    image: '/images/website design/peopleverse/Home page.jpg',
    year: '2025',
    description:
      'A comprehensive HR management platform design featuring intuitive wireframes, modern UI, and seamless user experience.',
    overview:
      'PeopleVerse is a modern HR management platform designed to streamline employee management, recruitment, and organizational workflows. Our design process focused on creating an intuitive interface that balances functionality with visual appeal, ensuring both HR professionals and employees can navigate the platform effortlessly.',
    services: [
      'User Research & Analysis',
      'Low-Fidelity Wireframing',
      'High-Fidelity UI Design',
      'Design System Development',
      'Responsive Design',
      'Prototype Development',
    ],
    client: 'PeopleVerse HR Solutions',
    gallery: [
      '/images/website design/peopleverse/Home page.jpg',
      '/images/website design/peopleverse/servicepage.png',
      '/images/website design/peopleverse/contactpage.png',
      '/images/website design/peopleverse/HomeLowWireframe.png',
    ],
    country: 'United States',
    industry: 'HR Technology / SaaS',
    tools: 'Figma, Adobe XD, Miro, FigJam',
    functionality:
      'Comprehensive HR management platform featuring employee onboarding, performance tracking, recruitment workflows, analytics dashboards, and team collaboration tools. Designed with scalability and user-centric principles.',

    wireframes: [
      {
        title: 'Initial Low-Fidelity Wireframes',
        description:
          'Started with rapid sketching to explore layout structures and information architecture. These low-fidelity wireframes helped us validate the basic flow and hierarchy before investing in high-fidelity designs.',
        image: '/images/website design/peopleverse/HomeLowWireframe.png',
        type: 'low-fidelity',
        learnings:
          'Early user testing revealed that the navigation needed to be more prominent, and the dashboard required better visual hierarchy for quick scanning.',
      },
      {
        title: 'High-Fidelity Home Page',
        description:
          'Evolved the wireframes into a polished, modern interface with carefully chosen typography, spacing, and visual elements. The hero section clearly communicates the platform\'s value proposition while guiding users to key actions.',
        image: '/images/website design/peopleverse/Home page.jpg',
        type: 'high-fidelity',
        learnings:
          'The addition of micro-interactions and visual feedback significantly improved user confidence and engagement during prototype testing.',
      },
      {
        title: 'Services Page Design',
        description:
          'Designed a comprehensive services page that showcases PeopleVerse\'s core features with clear visual hierarchy and intuitive navigation. Each service module is presented with iconography and concise descriptions.',
        image: '/images/website design/peopleverse/servicepage.png',
        type: 'final-design',
      },
      {
        title: 'Contact Page Interface',
        description:
          'Created a welcoming contact page that reduces friction in user inquiries. The form design balances completeness with simplicity, featuring smart field validation and clear visual feedback.',
        image: '/images/website design/peopleverse/contactpage.png',
        type: 'final-design',
      },
    ],

    designProgression: [
      {
        stage: 'research',
        title: 'Discovery & Research',
        description:
          'Conducted comprehensive user interviews with HR professionals and employees to understand pain points in existing HR platforms. Created user personas, journey maps, and identified key use cases.',
        learnings:
          'Users prioritized ease of use over feature abundance. The most successful HR platforms had intuitive navigation and minimal clicks to complete common tasks.',
        image: '/images/website design/peopleverse/HomeLowWireframe.png',
      },
      {
        stage: 'wireframe',
        title: 'Wireframing & Information Architecture',
        description:
          'Developed low-fidelity wireframes to establish content hierarchy and user flows. Iterated through multiple versions based on stakeholder feedback and usability heuristics.',
        learnings:
          'The dashboard layout needed to be flexible to accommodate different user roles (HR admins, managers, employees) with role-based permissions and customizable widgets.',
        image: '/images/website design/peopleverse/HomeLowWireframe.png',
      },
      {
        stage: 'prototype',
        title: 'High-Fidelity Design & Prototyping',
        description:
          'Transformed wireframes into polished, pixel-perfect designs with a modern aesthetic. Developed an interactive prototype to test user flows and micro-interactions.',
        learnings:
          'Adding subtle animations and transitions made the interface feel more responsive and professional, increasing user trust in the platform.',
        image: '/images/website design/peopleverse/Home page.jpg',
      },
      {
        stage: 'final',
        title: 'Design System & Handoff',
        description:
          'Created a comprehensive design system including components, patterns, color palettes, typography scales, and interaction guidelines. Prepared developer-ready specifications for seamless implementation.',
        learnings:
          'A well-documented design system reduced development time by 40% and ensured consistency across all platform touchpoints.',
        image: '/images/website design/peopleverse/servicepage.png',
      },
    ],

    typography: {
      primary: { name: 'Inter', weights: ['400', '500', '600', '700'] },
      secondary: { name: 'Poppins', weights: ['400', '600', '700'] },
      scale: [
        { name: 'Display', size: '3.5rem', weight: '700', sample: 'Empower Your Workforce' },
        { name: 'Heading 1', size: '2.5rem', weight: '600', sample: 'Modern HR Management' },
        { name: 'Heading 2', size: '2rem', weight: '600', sample: 'Streamline Your Processes' },
        { name: 'Body', size: '1rem', weight: '400', sample: 'PeopleVerse simplifies HR operations with intuitive tools designed for modern teams.' },
        { name: 'Caption', size: '0.875rem', weight: '400', sample: 'Trusted by 500+ companies worldwide' },
      ],
    },

    moodboard: {
      palette: [
        { color: '#2563eb', label: 'Primary Blue' },
        { color: '#1e40af', label: 'Dark Blue' },
        { color: '#60a5fa', label: 'Light Blue' },
        { color: '#f1f5f9', label: 'Background Gray' },
        { color: '#0f172a', label: 'Text Dark' },
        { color: '#64748b', label: 'Text Muted' },
      ],
      images: [
        { src: '/images/website design/peopleverse/Home page.jpg', caption: 'Home Page - Hero Section' },
        { src: '/images/website design/peopleverse/servicepage.png', caption: 'Services Overview' },
        { src: '/images/website design/peopleverse/contactpage.png', caption: 'Contact Interface' },
        { src: '/images/website design/peopleverse/HomeLowWireframe.png', caption: 'Wireframe Evolution' },
      ],
    },

    designPrinciples: [
      'User-First: Every design decision prioritizes user needs and reduces cognitive load',
      'Clarity: Clear visual hierarchy and intuitive navigation across all touchpoints',
      'Consistency: Unified design language with reusable components and patterns',
      'Accessibility: WCAG 2.1 AA compliant with inclusive design practices',
      'Scalability: Flexible design system that grows with the platform',
    ],

    highlights: [
      {
        step: '01',
        title: 'Research & Discovery',
        content:
          'Conducted user interviews and competitive analysis to understand HR platform pain points and opportunities.',
        image: '/images/website design/peopleverse/HomeLowWireframe.png',
      },
      {
        step: '02',
        title: 'Wireframing',
        content:
          'Created low-fidelity wireframes to establish information architecture and user flows.',
        image: '/images/website design/peopleverse/HomeLowWireframe.png',
      },
      {
        step: '03',
        title: 'High-Fidelity Design',
        content:
          'Developed polished UI designs with modern aesthetics and intuitive interactions.',
        image: '/images/website design/peopleverse/Home page.jpg',
      },
      {
        step: '04',
        title: 'Design System',
        content:
          'Built a comprehensive design system for consistency and scalability.',
        image: '/images/website design/peopleverse/servicepage.png',
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
