import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import { GlobalDispatchContext } from "../context/provider"
import Seo from "../components/seo"
import MusicComponent from "../components/Music"
import FadeWrapper from "../components/FadeWrapper"

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
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "TICKER_OFF" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <FadeWrapper>
      <Seo title="Music" />
      <MusicComponent data={data} />
    </FadeWrapper>
  )
}

export default MusicPage
