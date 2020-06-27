import React, { useContext, useEffect } from "react"
import { GlobalDispatchContext } from "../context/provider"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import InfoComponent from "../components/info"

export const query = graphql`
  query GetInfo {
    contact: allAirtable(filter: { table: { eq: "Contact" } }) {
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
    about: allAirtable(filter: { table: { eq: "About" } }) {
      edges {
        node {
          id
          data {
            Headline
            P1
            P2
            P3
            AboutPic {
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Info = ({ data }) => {
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF", type: "TICKER_OFF" })
  }, [])
  return (
    <>
      <SEO title="Info" />
      <InfoComponent data={data} />
    </>
  )
}

export default Info
