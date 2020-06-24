import React, { useContext } from "react"
import { Link } from "gatsby"
import useWindowSize from "../hooks/useWindowSize"
import StyledHeader from "../styles/StyledHeader"
import { StyledLogo } from "../styles/StyledNav"
import Burger from "./Burger"
import NavLinksGroupOne from "./NavLinksGroupOne"
import NavLinksGroupTwo from "./NavLinksGroupTwo"
import SocialLinks from "./socialLinks"
import { theme } from "../styles/theme"
import { GlobalStateContext } from "../context/provider"

const Header = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  const size = useWindowSize()

  return (
    <StyledHeader cnnIsVisible={state.cnnInView}>
      <div className="inner">
        <div>
          {size.width >= theme.mobileWidth ? <NavLinksGroupOne /> : <Burger />}
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
