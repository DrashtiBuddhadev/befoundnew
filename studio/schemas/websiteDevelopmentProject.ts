import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'websiteDevelopmentProject',
  title: 'Website Development Project',
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
      initialValue: 'Website Development',
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
      title: 'Tech Stack',
      type: 'string',
      description: 'Technologies used (e.g., React, Next.js, Node.js, PostgreSQL)',
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

    // Development-Specific Fields
    defineField({
      name: 'techStack',
      title: 'Detailed Tech Stack',
      type: 'object',
      fields: [
        {
          name: 'frontend',
          title: 'Frontend',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'React, Next.js, Vue, etc.',
        },
        {
          name: 'backend',
          title: 'Backend',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Node.js, Express, NestJS, etc.',
        },
        {
          name: 'database',
          title: 'Database',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'PostgreSQL, MongoDB, MySQL, etc.',
        },
        {
          name: 'infrastructure',
          title: 'Infrastructure',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'AWS, Vercel, Docker, etc.',
        },
        {
          name: 'other',
          title: 'Other Tools',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Feature Title' },
            { name: 'description', type: 'text', title: 'Description' },
            {
              name: 'icon',
              type: 'string',
              title: 'Icon Name',
              description: 'Lucide icon name',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Feature Screenshot',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'codeHighlights',
      title: 'Code Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Highlight Title' },
            { name: 'description', type: 'text', title: 'Description' },
            {
              name: 'code',
              type: 'text',
              title: 'Code Snippet',
              description: 'Optional code snippet',
            },
            { name: 'language', type: 'string', title: 'Language' },
          ],
        },
      ],
    }),
    defineField({
      name: 'performanceMetrics',
      title: 'Performance Metrics',
      type: 'object',
      fields: [
        {
          name: 'lighthouse',
          title: 'Lighthouse Scores',
          type: 'object',
          fields: [
            { name: 'performance', type: 'number', title: 'Performance (0-100)' },
            { name: 'accessibility', type: 'number', title: 'Accessibility (0-100)' },
            { name: 'bestPractices', type: 'number', title: 'Best Practices (0-100)' },
            { name: 'seo', type: 'number', title: 'SEO (0-100)' },
          ],
        },
        { name: 'loadTime', type: 'string', title: 'Load Time' },
        { name: 'otherMetrics', type: 'text', title: 'Other Metrics' },
      ],
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub Repository',
      type: 'url',
      description: 'Link to GitHub repo (if public)',
    }),
    defineField({
      name: 'apiDocumentation',
      title: 'API Documentation',
      type: 'url',
      description: 'Link to API documentation',
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
      validation: (Rule) => Rule.required(),
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
        subtitle: `Website Development • ${year}`,
        media: media,
      };
    },
  },
});
