import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`{
        allSanitySales {
          edges {
            node {
              itemName
              price
              liveDate(formatString: "DD/mm/yy")
              endDate(fromNow: true)
              author {
                name
              }
              sellerName
              contactMethod
            }
          }
        }
}`;

const SalesPage = ({data}) => (
  <Layout>
      <h1>Sales</h1>
    <SEO title="Home" />
    <Link to='/'>Home</Link>
  {data.allSanitySales.edges.map(({node : sales}) =>
  <div>
    <ul>
      <h1>{sales.itemName}</h1>
      <p>{sales.price}</p>
      <p>Contact {sales.sellerName} on {sales.contactMethod}</p>
    </ul>
  </div>
  )}
  </Layout>
)

export default SalesPage
