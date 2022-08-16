import React, { useContext, useEffect } from "react"
import { GlobalDispatchContext } from "../context/provider"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import InfoComponent from "../components/info"
import FadeWrapper from "../components/FadeWrapper"

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
P4
P5
P6
            AboutPic {
              localFiles {
                childImageSharp {
                  fluid(quality: 100) {
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
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "TICKER_OFF" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <FadeWrapper>
      <Seo title="Info" />
      <InfoComponent data={data} />
    </FadeWrapper>
  )
}

export default Info
