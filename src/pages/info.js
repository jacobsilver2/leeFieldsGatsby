import React from "react"
import { graphql } from "gatsby"
import InfoComponent from "../components/info"

export const query = graphql`
  query {
    leeHaldern: file(relativePath: { eq: "leeHaldern.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Info = ({ data }) => {
  return <InfoComponent image={data.leeHaldern} />
}

export default Info
