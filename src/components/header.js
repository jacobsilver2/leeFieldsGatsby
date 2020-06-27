import React, { useContext, useState } from "react"
import { Link } from "gatsby"
// import useWindowSize from "../hooks/useWindowSize"
import StyledHeader from "../styles/StyledHeader"
import { StyledLogo } from "../styles/StyledNav"
// import Burger from "./Burger"
import NavLinksGroupOne from "./NavLinksGroupOne"
import NavLinksGroupTwo from "./NavLinksGroupTwo"
// import SocialLinks from "./socialLinks"
// import { theme } from "../styles/theme"
import { GlobalStateContext, GlobalDispatchContext } from "../context/provider"
import NewsTicker from "./NewsTicker"

const Header = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  // const size = useWindowSize()

  return (
    <StyledHeader cnnIsVisible={state.cnnInView}>
      {state.tickerIsVisible && <NewsTicker />}
      <div className="inner">
        <div>
          <NavLinksGroupOne />
        </div>
        <div>
          <StyledLogo visible={!state.cnnInView}>
            <Link to="/">{siteTitle.toUpperCase()}</Link>
          </StyledLogo>
        </div>
        <div>
          <NavLinksGroupTwo />
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
