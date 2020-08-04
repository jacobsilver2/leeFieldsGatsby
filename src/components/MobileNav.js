import React, { useContext, useEffect } from "react"
import { Link } from "gatsby"
import Burger from "./Burger"
import { GlobalStateContext, GlobalDispatchContext } from "../context/provider"
import { StyledLogo } from "../styles/StyledNav"
import styled from "styled-components"

const LogoAndBurgerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`

const MobileNav = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  // const [burgerIsOpen, setBurgerIsOpen] = useState(false)

  // useEffect(() => {
  //   dispatch({ type: "MOBILE_LOGO_OVERRIDE" })
  // }, [])

  const handleBurgerClicked = () => {
    // setBurgerIsOpen(prev => !prev)
    dispatch({ type: "TOGGLE_SECONDARY_MENU" })
  }

  return (
    <LogoAndBurgerWrapper>
      <StyledLogo visible={!state.cnnInView || state.mobileLogoOverride}>
        <Link onClick={() => dispatch({ type: "SECONDARY_MENU_OFF" })} to="/">
          {siteTitle.toUpperCase()}
        </Link>
      </StyledLogo>
      <Burger
        isOpen={state.secondaryMenuActive}
        menuClicked={() => handleBurgerClicked()}
        height={10}
        width={25}
      />
    </LogoAndBurgerWrapper>
  )
}

export default MobileNav
