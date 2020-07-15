import React, { useContext, useRef, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import { GlobalDispatchContext } from "../context/provider"
import Video from "../components/video"
import Shows from "../components/shows"
import SEO from "../components/seo"
import { StyledBigLogo, BigLogoWrapper } from "../styles/StyledBigLogo"

export const query = graphql`
  query HomePageQuery {
    title: site {
      siteMetadata {
        title
      }
    }
    video: allAirtable(filter: { table: { eq: "Videos" } }) {
      edges {
        node {
          id
          data {
            Video_Title
            Video_URL
            Video_Order
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const firstUpdate = useRef(true)
  const [animateRef, animateInView] = useInView({ threshold: 0.7 })

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    dispatch({ type: animateInView ? "CNN_ON" : "CNN_OFF" })
  })
  const { title } = data.title.siteMetadata
  const { edges } = data.video
  // homepage only displays one video, and it will be the first video according the the "Order" field in Airtable.
  const firstVid = edges.filter(vid => vid.node.data.Video_Order === 1)[0].node
    .data.Video_URL
  return (
    <>
      <SEO title="Home" />
      <BigLogoWrapper>
        <StyledBigLogo
          ref={animateRef}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: animateInView ? 1 : 0,
            scale: animateInView ? 1 : 0.5,
          }}
          transition={{
            opacity: { duration: 0.75 },
            scale: { duration: 0.75 },
          }}
        >
          {title.toUpperCase()}
        </StyledBigLogo>
      </BigLogoWrapper>
      <Video video={firstVid} />
      <Shows />
    </>
  )
}

export default IndexPage
