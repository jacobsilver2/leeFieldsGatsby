import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import InfoComponent from "../components/info"

export const query = graphql`
  query GetInfo {
    allAirtable(filter: { table: { eq: "Info" } }) {
      edges {
        node {
          id
          data {
            Agency
            Email1
            Email2
            Name1
            Name2
            Role
            Order
          }
        }
      }
    }
  }
`

const Info = ({ data }) => {
  return (
    <>
      <SEO title="Info" />
      <InfoComponent data={data} />
    </>
  )
}

export default Info
