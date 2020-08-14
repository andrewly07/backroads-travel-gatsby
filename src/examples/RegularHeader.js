import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        return (
          <div>
            <h1>title: {data.site.siteMetadata.title}</h1>
            <h1>author: {data.site.siteMetadata.author}</h1>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
