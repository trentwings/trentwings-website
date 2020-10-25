import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >

    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </Link>
      </h2>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/events"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Events
        </Link>
      </h2>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/sales"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Sales
        </Link>
      </h2>
      <h2 style={{ margin: 0 }}>
        <Link
          to="/gallery"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Gallery
        </Link>
      </h2>




    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
