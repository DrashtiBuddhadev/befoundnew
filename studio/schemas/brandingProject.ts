import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'brandingProject',
  title: 'Logo & Branding Project',
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
      initialValue: 'Brand Identity',
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
      description: 'Comma-separated list',
    }),

    // Services
    defineField({
      name: 'services',
      title: 'Services Delivered',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // Branding-Specific Fields
    defineField({
      name: 'brandStory',
      title: 'Brand Story',
      type: 'text',
      rows: 5,
      description: 'The narrative behind the brand identity',
    }),
    defineField({
      name: 'logoConceptualization',
      title: 'Logo Conceptualization',
      type: 'text',
      rows: 4,
      description: 'Explanation of logo design thinking',
    }),
    defineField({
      name: 'colorPalette',
      title: 'Color Palette',
      type: 'array',
      of: [{ type: 'paletteSwatch' }],
      description: 'Brand color palette with hex codes and labels',
    }),
    defineField({
      name: 'typography',
      title: 'Typography System',
      type: 'typographySystem',
    }),
    defineField({
      name: 'brandApplications',
      title: 'Brand Applications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Application Title' },
            { name: 'description', type: 'text', title: 'Description' },
            {
              name: 'image',
              type: 'image',
              title: 'Application Image',
              options: { hotspot: true },
            },
          ],
        },
      ],
      description: 'How the brand identity is applied (packaging, signage, etc.)',
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
        subtitle: `Branding • ${year}`,
        media: media,
      };
    },
  },
});
