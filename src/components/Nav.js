import React, { useContext } from "react"
import { Link } from "gatsby"
import { GlobalStateContext } from "../context/provider"
import { StyledLogo } from "../styles/StyledNav"
import NavLinksGroupOne from "./NavLinksGroupOne"
import NavLinksGroupTwo from "./NavLinksGroupTwo"
import styled from "styled-components"

const NavLinksWrapper = styled.div`
  /* margin-top: 1.1rem; */
`

const Nav = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  return (
    <>
      <NavLinksWrapper>
        <NavLinksGroupOne />
      </NavLinksWrapper>
      <div>
        <StyledLogo visible={!state.cnnInView}>
          <Link fade to="/">
            {siteTitle.toUpperCase()}
          </Link>
        </StyledLogo>
      </div>
      <NavLinksWrapper>
        <NavLinksGroupTwo />
      </NavLinksWrapper>
    </>
  )
}

export default Nav
