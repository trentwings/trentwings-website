import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`{
    allSanityEvents {
      edges {
        node {
          eventName
          eventDate(formatString: "ddd D MMMM YYYY")
          eventPeriod {
            periodTitle
          }
        }
      }
    }
}`;

const SecondPage = ({data}) => (
  <Layout>
      <h1>Gallery</h1>
    <SEO title="Home" />
    <Link to='/'>Home</Link>
  {data.allSanityEvents.edges.map(({node : events}) =>
  <div>
    <ul>
      <h1>{events.eventName}</h1>
      <p>{events.eventDate}</p>
      <p>{events.eventPeriod.periodTitle}</p>
    </ul>
  </div>
  )}
  </Layout>
)

export default SecondPage
