import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'websiteDesignProject',
  title: 'Website Design Project',
  type: 'document',
  fields: [
    // Basic Info
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      initialValue: 'Website Design',
      readOnly: true,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Images
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // Descriptions
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Used in project cards',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 4,
      description: 'Longer description for detail page',
      validation: (Rule) => Rule.required(),
    }),

    // Client & Meta Info
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tools',
      title: 'Tools & Software',
      type: 'string',
      description: 'Comma-separated list (e.g., Figma, Adobe XD, Sketch)',
    }),
    defineField({
      name: 'functionality',
      title: 'Functionality Description',
      type: 'text',
      rows: 3,
    }),

    // Services
    defineField({
      name: 'services',
      title: 'Services Delivered',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // Design-Specific Fields
    defineField({
      name: 'wireframes',
      title: 'Wireframe Evolution',
      type: 'array',
      of: [{ type: 'wireframeStep' }],
      description: 'Show the progression from low-fi to high-fi designs',
    }),
    defineField({
      name: 'designProgression',
      title: 'Design Progression Timeline',
      type: 'array',
      of: [{ type: 'designProgression' }],
      description: 'Research → Wireframe → Prototype → Final',
    }),
    defineField({
      name: 'typography',
      title: 'Typography System',
      type: 'typographySystem',
    }),
    defineField({
      name: 'designPrinciples',
      title: 'Design Principles',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Core principles guiding the design',
    }),
    defineField({
      name: 'figmaPrototype',
      title: 'Figma Prototype URL',
      type: 'url',
      description: 'Link to interactive Figma prototype',
    }),
    defineField({
      name: 'userPersonas',
      title: 'User Personas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Persona Name' },
            { name: 'role', type: 'string', title: 'Role/Job Title' },
            { name: 'goals', type: 'text', title: 'Goals' },
            { name: 'painPoints', type: 'text', title: 'Pain Points' },
            {
              name: 'image',
              type: 'image',
              title: 'Persona Image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'userFlows',
      title: 'User Flows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Flow Title' },
            { name: 'description', type: 'text', title: 'Description' },
            {
              name: 'flowImage',
              type: 'image',
              title: 'Flow Diagram',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),

    // Common Fields
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{ type: 'highlight' }],
    }),
    defineField({
      name: 'moodboard',
      title: 'Moodboard',
      type: 'object',
      fields: [
        {
          name: 'palette',
          title: 'Palette',
          type: 'array',
          of: [{ type: 'paletteSwatch' }],
        },
        {
          name: 'images',
          title: 'Moodboard Images',
          type: 'array',
          of: [{ type: 'moodboardImage' }],
        },
      ],
    }),

    // Optional fields
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Showcase URL',
      type: 'url',
      description: 'Gumlet or video embed URL',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
      year: 'year',
    },
    prepare({ title, media, year }) {
      return {
        title: title,
        subtitle: `Website Design • ${year}`,
        media: media,
      };
    },
  },
});
