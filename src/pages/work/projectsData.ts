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
  /** Optional moodboard: palette + mockup images */
  moodboard?: Moodboard;
}

export const projects: Project[] = [
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
    tags: ['Creative', 'Portfolio', 'Web Design', 'Art Gallery', 'Heritage Design'],
    image: '/images/work/Muse & Masterpiece Mockup.png',
    year: '2024',
    description:
      'A bold creative portfolio bridging India\'s artistic heritage with contemporary design through vibrant contrasts and emotional storytelling.',
    overview:
      'Muse & Masterpiece Studio is where India\'s artistic heritage meets contemporary design expression. The site embodies a "vibrant metamorphosis of color" spanning the full emotional spectrum — from classic Inky Black and White foundations to energetic Neon Pink and Electric Blue accents. Through masterful contrast and refined typography (Cormorant Garamond paired with Manrope), the design communicates creative liberation while honoring timeless artistic traditions.',
    services: [
      'Artistic branding & identity',
      'Mural & sculpture curation',
      'Contemporary art showcase',
      'Heritage-driven visual storytelling',
    ],
    client: 'Muse & Masterpiece Studio',
    gallery: [
      '/images/work/Muse & Masterpiece Mockup.png',
      '/images/work/Muse & Masterpiece Mockup.png',
      '/images/work/Muse & Masterpiece Mockup.png',
    ],
    country: 'India',
    industry: 'Creative / Art Studio',
    tools: 'Figma, React (Vite), Tailwind CSS',
    functionality: 'Art portfolio and gallery showcase with curated project visuals, artist profiles, and heritage storytelling.',
    liveUrl: 'https://www.museandmasterpiece.in/',
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
    tags: ['Healthcare UX', 'Web Design', 'Appointment', 'Responsive'],
    image: '/images/work/Weston Dental Mockup.png',
    year: '2025',
    description:
      'A patient-centric healthcare site for a Florida dental clinic, built around trust, accessibility, and appointment booking.',
    overview:
      'Weston Family Dental Florida is a dental clinic site providing healthcare services, appointment booking, and information about treatments. The site leads with calm, trust-building visuals and clear service listings, making it effortless for patients and families to find what they need and book with confidence.',
    services: [
      'Dental care services (checkups, treatments, cosmetic)',
      'Patient education',
      'Appointment booking CTA',
      'Contact & location integration',
    ],
    client: 'Weston Family Dental Florida',
    gallery: [
      '/images/work/Weston Dental Mockup.png',
      '/images/work/Weston Dental Mockup.png',
      '/images/work/Weston Dental Mockup.png',
    ],
    country: 'United States',
    industry: 'Healthcare / Dental',
    tools: 'Figma, WordPress, Google Analytics',
    functionality: 'Healthcare service site with appointment information, services list, patient resources, and contact details.',
    liveUrl: 'https://westonfamilydentalflorida.com/',
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
    tags: ['Travel', 'UX Design', 'Web Design', 'Responsive', 'Contact Forms'],
    image: '/images/work/mockup.png',
    year: '2025',
    description:
      'A luxury travel booking site showcasing bespoke holiday packages and curated destination experiences.',
    overview:
      'Blue Escape Holidays is a travel solutions provider offering luxury and customized holiday packages, assisting users with curated experiences based on global destinations. The site pairs bright destination imagery with clear trip-package listings, making it easy for travellers to browse, plan, and enquire.',
    services: [
      'Travel package representation',
      'Tour planning',
      'Destination curation',
      'Contact / enquiry forms',
    ],
    client: 'Blue Escape Holidays',
    gallery: [
      '/images/work/mockup.png',
      '/images/work/mockup.png',
      '/images/work/mockup.png',
    ],
    country: 'United Kingdom',
    industry: 'Travel & Tourism',
    tools: 'Figma, Next.js, Tailwind CSS',
    functionality: 'Travel booking and trip planning site with bespoke packages, destination showcases, and enquiry forms.',
    liveUrl: 'https://www.blueescapeholidays.com/',
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
    tags: ['Digital Marketing', 'UX', 'Web Design', 'SEO', 'Lead Generation'],
    image: '/images/work/mockup.png',
    year: '2025',
    description:
      'A bold digital marketing agency site designed to capture leads and communicate growth-driven services.',
    overview:
      'Crazy Virality is a digital marketing and growth agency designed to help brands expand audience reach, optimise presence, and boost conversions. The site leads with high-contrast messaging and trust-building testimonials, driving prospects toward consultation CTAs.',
    services: [
      'Digital marketing',
      'SEO',
      'Social media strategy',
      'Traffic & growth planning',
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
    functionality: 'Marketing agency site with service pages, lead capture forms, and consultation CTAs.',
    liveUrl: 'https://www.crazyvirality.com/',
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
    tags: ['Corporate', 'Web Design', 'Contact Forms', 'Navigation'],
    image: '/images/work/mockup.png',
    year: '2025',
    description:
      'A structured corporate website presenting business services with professional visual hierarchy and clear contact channels.',
    overview:
      'United Internationals is a corporate entity offering trade, consultancy, or business solutions with contact channels. The site communicates credibility through a clean corporate palette, structured service sections, and a strong typographic hierarchy.',
    services: [
      'Company information',
      'Business & consultancy services',
      'Contact form integration',
      'Professional navigation structure',
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
    functionality: 'Corporate website with structured service sections, professional branding, and contact CTA.',
    liveUrl: 'https://www.unitedintls.com/',
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
