/**
 * Adapter to convert between legacy projectsData format and Sanity format
 * Useful during migration phase
 */

import type { Project } from '../../pages/work/projectsData';
import type { SanityProject } from './types';

/**
 * Convert Sanity project to legacy Project format
 * Use this during migration to ensure backward compatibility
 */
export function sanityToLegacyProject(sanityProject: SanityProject): Project {
  return {
    id: parseInt(sanityProject._id.replace(/\D/g, '')) || 0, // Extract numeric ID or use 0
    title: sanityProject.title,
    category: sanityProject.category,
    tags: sanityProject.tags,
    image: sanityProject.heroImage,
    year: sanityProject.year,
    description: sanityProject.description,
    overview: sanityProject.overview,
    services: sanityProject.services,
    client: sanityProject.client,
    gallery: sanityProject.gallery,
    country: sanityProject.country,
    industry: sanityProject.industry,
    tools: sanityProject.tools,
    functionality: sanityProject.functionality || '',
    liveUrl: sanityProject.liveUrl,
    videoUrl: sanityProject.videoUrl,
    highlights: sanityProject.highlights || [],
    moodboard: sanityProject.moodboard
      ? {
          palette: sanityProject.moodboard.palette,
          images: sanityProject.moodboard.images.map((img) => ({
            src: img.image,
            caption: img.caption,
          })),
        }
      : undefined,
    wireframes: sanityProject.wireframes,
    designProgression: sanityProject.designProgression,
    typography: sanityProject.typography,
    figmaPrototype: sanityProject.figmaPrototype,
    designPrinciples: sanityProject.designPrinciples,
  };
}

/**
 * Helper to get project by ID (legacy) or slug (new)
 * Useful during migration when you want to support both URL patterns
 */
export async function getProjectByIdOrSlug(
  idOrSlug: string,
  fetchFn: (slug: string) => Promise<SanityProject | null>
): Promise<SanityProject | null> {
  // If it's a number, it's legacy ID - you might have a mapping
  if (/^\d+$/.test(idOrSlug)) {
    // Option 1: You can create a mapping of old IDs to slugs
    // const slugMapping: Record<string, string> = {
    //   '1': 'kaizen-dezain',
    //   '2': 'muse-masterpiece',
    //   // ...
    // };
    // const slug = slugMapping[idOrSlug];
    // if (slug) return fetchFn(slug);
    
    // Option 2: Fetch all and find by a custom oldId field (if you added one to schemas)
    console.warn('Legacy numeric ID used. Consider migrating to slug-based URLs.');
    return null;
  }

  // It's a slug, fetch normally
  return fetchFn(idOrSlug);
}

/**
 * Type guard to check if project is from Sanity
 */
export function isSanityProject(project: any): project is SanityProject {
  return project && '_type' in project && '_id' in project;
}

/**
 * Get project type label
 */
export function getProjectTypeLabel(type: SanityProject['_type']): string {
  const labels: Record<SanityProject['_type'], string> = {
    brandingProject: 'Logo & Branding',
    websiteDesignProject: 'Website Design',
    websiteDevelopmentProject: 'Website Development',
    seoProject: 'SEO & Digital Marketing',
  };
  return labels[type] || type;
}

/**
 * Check if project has type-specific content
 */
export function hasTypeSpecificContent(project: SanityProject): {
  hasBrandingContent: boolean;
  hasDesignContent: boolean;
  hasDevelopmentContent: boolean;
  hasSEOContent: boolean;
} {
  return {
    hasBrandingContent:
      project._type === 'brandingProject' &&
      !!(project.brandStory || project.colorPalette?.length || project.brandApplications?.length),
    hasDesignContent:
      project._type === 'websiteDesignProject' &&
      !!(project.wireframes?.length || project.designProgression?.length || project.userPersonas?.length),
    hasDevelopmentContent:
      project._type === 'websiteDevelopmentProject' &&
      !!(project.techStack || project.features?.length || project.performanceMetrics),
    hasSEOContent:
      project._type === 'seoProject' &&
      !!(project.initialMetrics || project.finalMetrics || project.keywordTargets?.length),
  };
}
