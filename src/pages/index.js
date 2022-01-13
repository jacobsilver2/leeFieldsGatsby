import React, { useContext, useRef, useLayoutEffect, useEffect } from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import { useInView } from "react-intersection-observer"
import { GlobalDispatchContext } from "../context/provider"
import Video from "../components/video"
import Shows from "../components/shows"
import SEO from "../components/seo"
import FadeWrapper from "../components/FadeWrapper"
import { StyledBigLogo, BigLogoWrapper } from "../styles/StyledBigLogo"

export const query = graphql`
  query HomePageQuery {
    title: site {
      siteMetadata {
        title
      }
    }
    seoRose: file(relativePath: { eq: "leeRoseLogo.png" }) {
      childImageSharp {
        resize(width: 1200) {
          src
          height
          width
        }
      }
    }
    video: airtable(table: { eq: "Videos" }, data: { Video_Order: { eq: 1 } }) {
      data {
        Video_URL
      }
    }
    hoverImg: file(base: { eq: "playVid.png" }) {
      childImageSharp {
        fixed(width: 128) {
          src
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // const [isScrolling, setisScrolling] = useState(false)
  const dispatch = useContext(GlobalDispatchContext)
  const firstUpdate = useRef(true)
  const [animateRef, animateInView] = useInView({ threshold: 0.7 })
  // const isScrollingDown = useIsScrollingDown()

  // useEffect(() => {
  //   // console.log(isScrollingDown)
  //   isScrollingDown
  //     ? dispatch({ type: "MOBILE_LOGO_OVERRIDE_OFF" })
  //     : dispatch({ type: "MOBILE_LOGO_OVERRIDE" })
  // }, [])

  useEffect(() => {
    window.addEventListener("scroll", _.debounce(setMobileOverrideOff, 100))
    return () =>
      window.removeEventListener(
        "scroll",
        _.debounce(setMobileOverrideOff, 1000)
      )
  }, [])

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    dispatch({ type: animateInView ? "CNN_ON" : "CNN_OFF" })
  })

  function setMobileOverrideOff() {
    dispatch({ type: "MOBILE_LOGO_OVERRIDE_OFF" })
  }
  // console.log(isScrollingDown)
  const { title } = data.title.siteMetadata
  const { Video_URL: vidUrl } = data.video.data
  return (
    <FadeWrapper>
      <SEO title="Lee Fields" image={data.seoRose.childImageSharp.resize} />
      <BigLogoWrapper>
        <StyledBigLogo ref={animateRef}>{title.toUpperCase()}</StyledBigLogo>
      </BigLogoWrapper>
      <Video
        hoverImg={data.hoverImg.childImageSharp.fixed.src}
        video={vidUrl}
      />
      <Shows />
    </FadeWrapper>
  )
}

export default IndexPage
