export default {
  name: 'infos',
  title: 'Infos',
  type: 'document',
  fields: [
    {
      title: 'Site Name',
      name: 'siteName',
      type: 'string',
      validation: (Rule) => Rule.max(35).warning('Shorter titles are usually better'),
    },
    {
      title: 'Site Description',
      name: 'siteDescription',
      type: 'text',
      description: 'Search Engines will display a maximum of 150 characters. Keep it short.',
      rows: 5,
      validation: (Rule) =>
        Rule.max(150).warning(
          'Search Engines will display a maximum of 150 characters. Keep it short.'
        ),
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Mail',
      name: 'mail',
      type: 'string',
      validation: (Rule) => Rule.email().warning('This is not a valid mail adress.'),
    },
    {title: 'Bio', name: 'bio', type: 'array', of: [{type: 'block'}]},
    {title: 'Slideshow', name: 'slideshow', type: 'array', of: [{type: 'image'}]},
    {
      title: 'Datenschutzerklaerung',
      name: 'datenschutzerklaerung',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Curriculum Vitae',
      name: 'curriculumVitae',
      type: 'array',
      of: [
        {
          title: 'Lists',
          name: 'lists',
          type: 'object',
          fields: [
            {
              title: 'List Title',
              name: 'listTitle',
              type: 'string',
            },
            {
              title: 'List Items',
              name: 'listItems',
              type: 'array',
              of: [
                {
                  title: 'Single List Item',
                  name: 'singleListItem',
                  type: 'object',
                  fields: [
                    {
                      title: 'Content',
                      name: 'content',
                      type: 'string',
                    },
                    {
                      title: 'Year',
                      name: 'year',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Imprint',
      name: 'imprint',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
