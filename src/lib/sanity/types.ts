// TypeScript types for Sanity data

export interface SanityProject {
  _id: string;
  _type: 'brandingProject' | 'websiteDesignProject' | 'websiteDevelopmentProject' | 'seoProject';
  title: string;
  slug: string;
  category: string;
  tags: string[];
  year: string;
  description: string;
  overview: string;
  client: string;
  country: string;
  industry: string;
  tools: string;
  functionality?: string;
  services: string[];
  heroImage: string;
  gallery: string[];
  highlights: Highlight[];
  moodboard?: Moodboard;
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
  publishedAt: string;

  // Branding specific
  brandStory?: string;
  logoConceptualization?: string;
  colorPalette?: PaletteSwatch[];
  typography?: TypographySystem;
  brandApplications?: BrandApplication[];

  // Design specific
  wireframes?: WireframeStep[];
  designProgression?: DesignProgression[];
  designPrinciples?: string[];
  figmaPrototype?: string;
  userPersonas?: UserPersona[];
  userFlows?: UserFlow[];

  // Development specific
  techStack?: TechStack;
  features?: Feature[];
  codeHighlights?: CodeHighlight[];
  performanceMetrics?: PerformanceMetrics;
  githubUrl?: string;
  apiDocumentation?: string;

  // SEO specific
  campaignDuration?: string;
  initialMetrics?: SEOMetrics;
  finalMetrics?: SEOMetrics;
  strategyImplemented?: Strategy[];
  keywordTargets?: KeywordTarget[];
  contentStrategy?: string;
  technicalSEO?: string[];
  linkBuildingStrategy?: string;
  analyticsReport?: string;
}

export interface Highlight {
  step: string;
  title: string;
  content: string;
  image: string;
}

export interface PaletteSwatch {
  color: string;
  label: string;
}

export interface MoodboardImage {
  image: string;
  caption: string;
}

export interface Moodboard {
  palette: PaletteSwatch[];
  images: MoodboardImage[];
}

export interface WireframeStep {
  title: string;
  description: string;
  image: string;
  type: 'low-fidelity' | 'high-fidelity' | 'final-design';
  learnings?: string;
}

export interface DesignProgression {
  stage: 'research' | 'wireframe' | 'prototype' | 'final';
  title: string;
  description: string;
  learnings?: string;
  image: string;
}

export interface TypographySystem {
  primaryFont: { name: string; weights: string[] };
  secondaryFont?: { name: string; weights: string[] };
  scale: Array<{ name: string; size: string; weight: string; sample: string }>;
}

export interface BrandApplication {
  title: string;
  description: string;
  image: string;
}

export interface UserPersona {
  name: string;
  role: string;
  goals: string;
  painPoints: string;
  image: string;
}

export interface UserFlow {
  title: string;
  description: string;
  flowImage: string;
}

export interface TechStack {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  infrastructure?: string[];
  other?: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
  image: string;
}

export interface CodeHighlight {
  title: string;
  description: string;
  code?: string;
  language?: string;
}

export interface PerformanceMetrics {
  lighthouse?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  loadTime?: string;
  otherMetrics?: string;
}

export interface SEOMetrics {
  organicTraffic: string;
  keywordRankings: string;
  domainAuthority: number;
  backlinks: number;
  conversionRate: string;
}

export interface Strategy {
  title: string;
  description: string;
  results: string;
}

export interface KeywordTarget {
  keyword: string;
  initialRank: number;
  finalRank: number;
  searchVolume: number;
}
