import { defineType, defineField } from 'sanity';

// Highlight step object
export const highlight = defineType({
  name: 'highlight',
  title: 'Highlight',
  type: 'object',
  fields: [
    defineField({
      name: 'step',
      title: 'Step Number',
      type: 'string',
      description: 'e.g., "01", "02", "03"',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});

// Palette swatch object
export const paletteSwatch = defineType({
  name: 'paletteSwatch',
  title: 'Palette Swatch',
  type: 'object',
  fields: [
    defineField({
      name: 'color',
      title: 'Color (Hex)',
      type: 'string',
      description: 'e.g., #1a1a2e',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g., "Deep Navy"',
    }),
  ],
  preview: {
    select: {
      color: 'color',
      label: 'label',
    },
    prepare({ color, label }) {
      return {
        title: label,
        subtitle: color,
        media: undefined,
      };
    },
  },
});

// Moodboard image object
export const moodboardImage = defineType({
  name: 'moodboardImage',
  title: 'Moodboard Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
});

// Wireframe step object
export const wireframeStep = defineType({
  name: 'wireframeStep',
  title: 'Wireframe Step',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Low Fidelity', value: 'low-fidelity' },
          { title: 'High Fidelity', value: 'high-fidelity' },
          { title: 'Final Design', value: 'final-design' },
        ],
      },
    }),
    defineField({
      name: 'learnings',
      title: 'Learnings',
      type: 'text',
      rows: 3,
    }),
  ],
});

// Design progression object
export const designProgression = defineType({
  name: 'designProgression',
  title: 'Design Progression',
  type: 'object',
  fields: [
    defineField({
      name: 'stage',
      title: 'Stage',
      type: 'string',
      options: {
        list: [
          { title: 'Research', value: 'research' },
          { title: 'Wireframe', value: 'wireframe' },
          { title: 'Prototype', value: 'prototype' },
          { title: 'Final', value: 'final' },
        ],
      },
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'learnings',
      title: 'Learnings',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});

// Typography system object
export const typographySystem = defineType({
  name: 'typographySystem',
  title: 'Typography System',
  type: 'object',
  fields: [
    defineField({
      name: 'primaryFont',
      title: 'Primary Font',
      type: 'object',
      fields: [
        { name: 'name', title: 'Font Name', type: 'string' },
        { name: 'weights', title: 'Weights', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'secondaryFont',
      title: 'Secondary Font (Optional)',
      type: 'object',
      fields: [
        { name: 'name', title: 'Font Name', type: 'string' },
        { name: 'weights', title: 'Weights', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'scale',
      title: 'Typography Scale',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'size', title: 'Size', type: 'string' },
            { name: 'weight', title: 'Weight', type: 'string' },
            { name: 'sample', title: 'Sample Text', type: 'string' },
          ],
        },
      ],
    }),
  ],
});
