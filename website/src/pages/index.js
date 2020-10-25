import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`{
   allSanityNews {
    edges {
      node {
        title
        publishedAt(fromNow: false)
        id
        body {
          style
          children {
            text
          }
        }
      }
    }
  }
}`;

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
  {data.allSanityNews.edges.map(({node : news}) =>
  <div>
    <ul>
      <h1>{news.title}</h1>
      <p>{news.id}</p>
    </ul>
  </div>
  )}
  </Layout>
)

export default IndexPage
