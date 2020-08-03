import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalDispatchContext, GlobalStateContext } from "../context/provider"
import Headroom from "react-headroom"
import Header from "./header"
import Footer from "./footer"
import Signup from "./Signup"
import ContentContainer from "../styles/ContentContainer"
import styled from "styled-components"
import VideoModalComponent from "./VideoModalComponent"
import VideoModalMobileComponent from "./VideoModalMobileComponent"
import useWindowSize from "../hooks/useWindowSize"
import { AnimatePresence } from "framer-motion"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const StickyFooter = styled.div`
  flex-shrink: 0;
`

const Layout = ({ children, location, ...props }) => {
  // console.log(location)
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const size = useWindowSize()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Wrapper>
        <AnimatePresence>
          {state.videoModalOpen && size.width >= 828 && <VideoModalComponent />}
          {state.videoModalOpen && size.width <= 828 && (
            <VideoModalMobileComponent />
          )}
        </AnimatePresence>
        <Headroom
          style={{ zIndex: "1000" }}
          onUnpin={() => dispatch({ type: "SECONDARY_MENU_OFF" })}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
        </Headroom>
        <ContentContainer tickerOpen={state.tickerIsVisible}>
          {children}
        </ContentContainer>
        <StickyFooter>
          <Signup location={location} />
          <Footer />
        </StickyFooter>
      </Wrapper>
    </>
  )
}

export default Layout
