import {orderRankField} from '@sanity/orderable-document-list'

export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  groups: [
    {title: 'Basic', name: 'basic'},
    {title: 'Media', name: 'media'},
    {title: 'Details', name: 'details'},
  ],
  fields: [
    orderRankField({type: 'project', hidden: true}),

    {
      title: 'Title',
      name: 'title',
      type: 'string',
      group: ['basic', 'details'],
      validation: (Rule) => Rule.required().warning('Title is required.'),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'basic',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) =>
        Rule.required().warning(
          'A slug is required. Please generate a slug before you publish a project.'
        ),
    },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'image',
      fields: [
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
      ],
      options: {
        metadata: [
          'blurhash', // Default: included
          'lqip', // Default: included
          'palette', // Default: included
        ],
      },
      group: 'media',
    },
    {
      title: 'Poster',
      name: 'poster',
      type: 'image',
      options: {
        metadata: [
          'blurhash', // Default: included
          'lqip', // Default: included
          'palette', // Default: included
        ],
      },
      group: 'media',
    },
    {
      title: 'Broadcaster',
      name: 'client',
      type: 'string',
      group: ['basic', 'details'],
    },
    {
      title: 'Release Date',
      name: 'releaseDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
      group: 'details',
    },
    {
      title: 'Runtime',
      name: 'runtime',
      rows: 2,
      type: 'text',
      group: 'details',
    },
    {
      title: 'World Sales',
      name: 'worldSales',
      type: 'string',
      group: 'details',
    },
    {
      title: 'Additional Fields',
      name: 'additionalFields',
      type: 'array',
      of: [
        {
          title: 'New Field',
          type: 'object',
          fields: [
            {
              title: 'Label',
              name: 'label',
              type: 'string',
            },
            {
              title: 'Value',
              name: 'value',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    },
    {
      title: 'Team',
      name: 'team',
      type: 'array',
      of: [{type: 'block', lists: [{title: 'Bullet', value: 'bullet'}]}],
      group: 'details',
    },
    {
      title: 'Festivals',
      name: 'festivals',
      rows: 3,
      type: 'text',
      group: 'details',
    },
    {
      title: 'Synopsis',
      name: 'synopsis',
      type: 'array',
      of: [{type: 'block'}],
      group: 'details',
    },
    {
      title: 'Trailer',
      name: 'trailer',
      description: '',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).warning('Invalid. A valid URL starts with “http://” or “https://”, please try again.'),
      group: 'media',
    },
    {
      title: 'Stills',
      name: 'stills',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            metadata: [
              'blurhash', // Default: included
              'lqip', // Default: included
              'palette', // Default: included
            ],
          },
          fields: [
            {
              title: 'Description',
              name: 'description',
              type: 'string',
            },
          ],
        },
      ],

      options: {
        layout: 'grid',
      },
      group: 'media',
    },
    {
      title: 'Published',
      name: 'published',
      description: 'Set to published when this project should be visible on the frontend',
      type: 'boolean',
      initialValue: true,
      group: 'basic',
    },
  ],
}
