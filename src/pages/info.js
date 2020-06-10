import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { GlobalDispatchContext } from "../context/provider"
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
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    // if (firstUpdate.current) {
    //   firstUpdate.current = false
    //   return
    // }
    dispatch({ type: "CNN_OFF" })
  }, [])
  return (
    <>
      <SEO title="Info" />
      <InfoComponent image={data.leeHaldern} />
    </>
  )
}

export default Info
