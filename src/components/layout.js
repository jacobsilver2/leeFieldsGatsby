import React, { useContext, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import { GlobalStateContext, GlobalDispatchContext } from "../context/provider"
import { useOnClickOutside } from "../hooks/useOnClickOutside"
import MobileMenu from "./MobileMenu"
import ContentContainer from "../styles/ContentContainer"

const Layout = ({ children }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
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
      {state.secondaryMenuActive && (
        <div ref={menuNode}>
          <MobileMenu />
        </div>
      )}
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentContainer>{children}</ContentContainer>
    </>
  )
}

export default Layout
