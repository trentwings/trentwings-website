export default {
    name: 'sales',
    title: 'Sales',
    type: 'document',
    fields: [
        {
            name: 'itemName',
            title: 'Item Name',
            type: 'string'
          },
          {
            name: 'price',
            title: 'Price',
            type: 'string'
          },

          {
            name: 'liveDate',
            title: 'Live Date',
            type: 'date'
          },
          {
            name: 'endDate',
            title: 'End Date',
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
          },
          {
            name: 'sellerName',
            title: 'Seller Name',
            type: 'string'
          },
          {
            name: 'contactMethod',
            title: 'Contact Method',
            type: 'string'
          },



        ],

        preview: {
          select: {
            title: 'itemName',
            sellerName: 'sellerName',
            media: 'mainImage'
          },
          prepare(selection) {
            const {sellerName} = selection
            return Object.assign({}, selection, {
              subtitle: sellerName && `by ${sellerName}`
            })
          }
        }
      }
