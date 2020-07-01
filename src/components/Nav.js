import React, { useContext } from "react"
import { Link } from "gatsby"
import { GlobalStateContext } from "../context/provider"
import { StyledLogo } from "../styles/StyledNav"
import NavLinksGroupOne from "./NavLinksGroupOne"
import NavLinksGroupTwo from "./NavLinksGroupTwo"

const Nav = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  return (
    <>
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
    </>
  )
}

export default Nav
