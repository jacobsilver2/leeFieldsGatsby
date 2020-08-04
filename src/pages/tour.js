import React, { useEffect, useContext, useState } from "react"
import { GlobalDispatchContext } from "../context/provider"
import Shows from "../components/shows"
import SEO from "../components/seo"
import FadeWrapper from "../components/FadeWrapper"
import useWindowSize from "../hooks/useWindowSize"
import styled from "styled-components"

// adding a wrapper to add a little extra top space
// without affecting the homepage, which uses the same tour component

const Wrapper = styled.div`
  margin-top: ${({ isMobile }) => (isMobile ? "2rem" : "0")};
`

const TourPage = props => {
  const [isMobile, setisMobile] = useState(false)
  const size = useWindowSize()
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "TICKER_OFF" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    if (size.width >= 828) {
      setisMobile(true)
    }
  }, [size])
  return (
    <FadeWrapper>
      <SEO title="Tour" />
      <Wrapper isMobile={isMobile ? "true" : "false"}>
        <Shows />
      </Wrapper>
    </FadeWrapper>
  )
}

export default TourPage
