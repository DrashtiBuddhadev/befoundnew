import { client } from './client';
import {
  ALL_PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  PROJECTS_BY_CATEGORY_QUERY,
  FEATURED_PROJECTS_QUERY,
} from './queries';
import type { SanityProject } from './types';

/**
 * Fetch all projects
 */
export async function getAllProjects(): Promise<SanityProject[]> {
  try {
    const projects = await client.fetch(ALL_PROJECTS_QUERY);
    return projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  try {
    const project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
    return project;
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return null;
  }
}

/**
 * Fetch projects by category/type
 */
export async function getProjectsByCategory(
  projectType: 'brandingProject' | 'websiteDesignProject' | 'websiteDevelopmentProject' | 'seoProject'
): Promise<SanityProject[]> {
  try {
    const projects = await client.fetch(PROJECTS_BY_CATEGORY_QUERY, { projectType });
    return projects;
  } catch (error) {
    console.error('Error fetching projects by category:', error);
    return [];
  }
}

/**
 * Fetch featured projects
 */
export async function getFeaturedProjects(): Promise<SanityProject[]> {
  try {
    const projects = await client.fetch(FEATURED_PROJECTS_QUERY);
    return projects;
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

/**
 * Helper to convert numeric ID to slug-based routing
 * (Useful if you're migrating from numeric IDs to slug-based URLs)
 */
export async function getProjectById(id: number): Promise<SanityProject | null> {
  // This is a migration helper. You can map old IDs to slugs here
  // or query by a custom field if you add an 'oldId' field to your schema
  try {
    const allProjects = await getAllProjects();
    const project = allProjects.find((p) => p._id === String(id));
    return project || null;
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    return null;
  }
}
