import React from "react"
import { Link } from "gatsby"
import useWindowSize from "../hooks/useWindowSize"
import StyledHeader from "../styles/StyledHeader"
import { StyledNav, Start, End, NavButton } from "../styles/StyledNav"
import Burger from "./Burger"
import NavLinks from "./NavLinks"
import { theme } from "../styles/theme"

const Header = ({ siteTitle, handleSoundClick }) => {
  const size = useWindowSize()

  return (
    <StyledHeader>
      <StyledNav>
        <Start>
          <Link to="/">
            <h1 style={{ margin: 0 }}>{siteTitle}</h1>
          </Link>
        </Start>
        <End>
          {size.width >= theme.mobileWidth ? (
            <NavLinks handleSoundClick={handleSoundClick} />
          ) : (
            <Burger handleSoundClick={handleSoundClick} />
          )}
        </End>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
