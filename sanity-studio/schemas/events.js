export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        {
            name: 'eventName',
            title: 'Event Name',
            type: 'string'
          },
          {
            name: 'eventPeriod',
            title: 'Event Period',
            type: 'reference',
            to: {type: 'period'}
          },
          {
            name: 'eventDate',
            title: 'Event Date',
            type: 'date'
          },
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'}
          },
          {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}]
          },
          {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
          },
          {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
          }
        ],

        preview: {
          select: {
            title: 'eventName',
            author: 'author.name',
            media: 'mainImage'
          },
          prepare(selection) {
            const {author} = selection
            return Object.assign({}, selection, {
              subtitle: author && `by ${author}`
            })
          }
        }
      }
