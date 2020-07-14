import React, { useContext, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalDispatchContext, GlobalStateContext } from "../context/provider"
import { useOnClickOutside } from "../hooks/useOnClickOutside"
import Header from "./header"
import Footer from "./footer"
import Signup from "./Signup"
import ContentContainer from "../styles/ContentContainer"
import styled from "styled-components"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const StickyFooter = styled.div`
  flex-shrink: 0;
`

const Layout = ({ children }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const menuNode = useRef()
  useOnClickOutside(menuNode, () => dispatch({ type: "SECONDARY_MENU_OFF" }))

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
      {/* {state.secondaryMenuActive && (
        <div ref={menuNode}>
          <MobileMenu />
        </div>
      )} */}
      {/* {state.videoModalOpen && <ModalVid />} */}
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentContainer>{children}</ContentContainer>
        <StickyFooter>
          <Signup />
          <Footer />
        </StickyFooter>
      </Wrapper>
    </>
  )
}

export default Layout
