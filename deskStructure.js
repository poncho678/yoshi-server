import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export const customStructure = (S, context) =>
  S.list()
    .title('Base')
    .items([
      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) => !['infos', 'projects'].includes(listItem.getId())
      ),
      orderableDocumentListDeskItem({
        type: 'projects',
        title: 'Projects',
        // Required if using multiple lists of the same 'type'
        id: 'orderable-en-projects',
        // pass from the structure callback params above
        S,
        context,
      }),
      S.listItem()
        .title('Settings')
        .child(
          S.list()
            // Sets a title for our new list
            .title('Settings Documents')
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title('Infos')
                .child(S.document().schemaType('infos').documentId('infos')),
            ])
        ),
      // S.divider(),
    ])
