import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'seoProject',
  title: 'SEO Project',
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
      initialValue: 'SEO & Digital Marketing',
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
      title: 'SEO Tools Used',
      type: 'string',
      description: 'Google Analytics, Search Console, Ahrefs, SEMrush, etc.',
    }),

    // Services
    defineField({
      name: 'services',
      title: 'Services Delivered',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    // SEO-Specific Fields
    defineField({
      name: 'campaignDuration',
      title: 'Campaign Duration',
      type: 'string',
      description: 'e.g., "6 months", "1 year"',
    }),
    defineField({
      name: 'initialMetrics',
      title: 'Initial Metrics (Before)',
      type: 'object',
      fields: [
        { name: 'organicTraffic', type: 'string', title: 'Organic Traffic' },
        { name: 'keywordRankings', type: 'string', title: 'Keyword Rankings' },
        { name: 'domainAuthority', type: 'number', title: 'Domain Authority' },
        { name: 'backlinks', type: 'number', title: 'Backlinks' },
        { name: 'conversionRate', type: 'string', title: 'Conversion Rate' },
      ],
    }),
    defineField({
      name: 'finalMetrics',
      title: 'Final Metrics (After)',
      type: 'object',
      fields: [
        { name: 'organicTraffic', type: 'string', title: 'Organic Traffic' },
        { name: 'keywordRankings', type: 'string', title: 'Keyword Rankings' },
        { name: 'domainAuthority', type: 'number', title: 'Domain Authority' },
        { name: 'backlinks', type: 'number', title: 'Backlinks' },
        { name: 'conversionRate', type: 'string', title: 'Conversion Rate' },
      ],
    }),
    defineField({
      name: 'strategyImplemented',
      title: 'Strategy Implemented',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Strategy Title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'results', type: 'text', title: 'Results Achieved' },
          ],
        },
      ],
    }),
    defineField({
      name: 'keywordTargets',
      title: 'Target Keywords',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'keyword', type: 'string', title: 'Keyword' },
            { name: 'initialRank', type: 'number', title: 'Initial Rank' },
            { name: 'finalRank', type: 'number', title: 'Final Rank' },
            { name: 'searchVolume', type: 'number', title: 'Monthly Search Volume' },
          ],
        },
      ],
    }),
    defineField({
      name: 'contentStrategy',
      title: 'Content Strategy',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'technicalSEO',
      title: 'Technical SEO Improvements',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Site speed, mobile optimization, schema markup, etc.',
    }),
    defineField({
      name: 'linkBuildingStrategy',
      title: 'Link Building Strategy',
      type: 'text',
      rows: 3,
    }),

    // Common Fields
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      of: [{ type: 'highlight' }],
    }),

    // Optional fields
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'analyticsReport',
      title: 'Analytics Report URL',
      type: 'url',
      description: 'Link to detailed analytics report (PDF or doc)',
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
        subtitle: `SEO • ${year}`,
        media: media,
      };
    },
  },
});
