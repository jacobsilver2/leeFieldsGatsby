import React, { useContext } from "react"
import { Link } from "gatsby"
import useWindowSize from "../hooks/useWindowSize"
import StyledHeader from "../styles/StyledHeader"
import { StyledLogo } from "../styles/StyledNav"
import Burger from "./Burger"
import NavLinks from "./NavLinks"
import SocialLinks from "./socialLinks"
import { theme } from "../styles/theme"
import { GlobalStateContext } from "../context/provider"

const Header = ({ siteTitle, handleSoundClick }) => {
  const state = useContext(GlobalStateContext)
  const size = useWindowSize()
  return (
    <StyledHeader>
      <div>
        {size.width >= theme.mobileWidth ? (
          <NavLinks handleSoundClick={handleSoundClick} />
        ) : (
          <Burger handleSoundClick={handleSoundClick} />
        )}
      </div>
      <div>
        {!state.cnnInView && (
          <StyledLogo>
            <Link to="/">{siteTitle.toUpperCase()}</Link>
          </StyledLogo>
        )}
      </div>
      <div>
        <SocialLinks />
      </div>
    </StyledHeader>
  )
}

export default Header
