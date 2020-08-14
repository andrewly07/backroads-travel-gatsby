import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
// import Button from "../examples/Button"
// import RegularHeader from "../examples/RegularHeader"

export default class classes extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid} />
      </Layout>
    )
  }
}
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "boxing-spar.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
