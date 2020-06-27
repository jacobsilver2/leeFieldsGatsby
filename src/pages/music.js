import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import { GlobalDispatchContext } from "../context/provider"
import SEO from "../components/seo"
import MusicComponent from "../components/Music"

export const query = graphql`
  query GetMusic {
    allAirtable(filter: { table: { eq: "Music" } }) {
      edges {
        node {
          id
          data {
            Record
            Listen
            Order
            Year
            Buy
            Image {
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

const MusicPage = ({ data }) => {
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF", type: "TICKER_OFF" })
  }, [])
  return (
    <>
      <SEO title="Listen" />
      <MusicComponent data={data} />
    </>
  )
}

export default MusicPage
