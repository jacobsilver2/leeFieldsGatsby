import React from "react"
import { Link } from "gatsby"
import useWindowSize from "../hooks/useWindowSize"
import StyledHeader from "../styles/StyledHeader"
import { StyledNav, StyledGatsbyLink, StyledLogo } from "../styles/StyledNav"
import Burger from "./Burger"
import NavLinks from "./NavLinks"
import SocialLinks from "./socialLinks"
import { theme } from "../styles/theme"

const Header = ({ siteTitle, handleSoundClick }) => {
  const size = useWindowSize()
  return (
    <StyledHeader>
      <StyledNav>
        <div>
          {size.width >= theme.mobileWidth ? (
            <NavLinks handleSoundClick={handleSoundClick} />
          ) : (
            <Burger handleSoundClick={handleSoundClick} />
          )}
        </div>
        <div>
          <StyledLogo>
            <Link to="/">{siteTitle.toUpperCase()}</Link>
          </StyledLogo>
        </div>
        <div>
          <SocialLinks />
        </div>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
