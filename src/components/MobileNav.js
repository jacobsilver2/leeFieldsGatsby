import React, { useContext } from "react"
import { Link } from "gatsby"
import { GlobalStateContext } from "../context/provider"
import { StyledLogo } from "../styles/StyledNav"

const MobileNav = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  return (
    <>
      <div>
        <StyledLogo visible={!state.cnnInView}>
          <Link to="/">{siteTitle.toUpperCase()}</Link>
        </StyledLogo>
      </div>
      <div>BURGER</div>
    </>
  )
}

export default MobileNav
