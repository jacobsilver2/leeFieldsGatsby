import React, { useContext, useRef, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import { GlobalDispatchContext } from "../context/provider"
import Video from "../components/video"
import Shows from "../components/shows"
import Listen from "../components/listen"
import SEO from "../components/seo"
import { StyledBigLogo, BigLogoWrapper } from "../styles/StyledBigLogo"

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const IndexPage = ({ data }) => {
  const dispatch = useContext(GlobalDispatchContext)
  // const videoRef = useRef()
  const firstUpdate = useRef(true)
  const [ref, inView] = useInView({ threshold: 0.5 })

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    dispatch({ type: inView ? "CNN_ON" : "CNN_OFF" })
  })

  const { title } = data.site.siteMetadata
  return (
    <>
      <SEO title="Home" />
      <StyledBigLogo ref={ref}>{title.toUpperCase()}</StyledBigLogo>
      <Video />
      <Shows />
      <Listen />
    </>
  )
}

export default IndexPage
