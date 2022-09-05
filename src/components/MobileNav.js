import { Link } from 'gatsby'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalDispatchContext, GlobalStateContext } from '../context'
import { StyledLogo } from '../styles/StyledNav'
import Burger from './Burger'

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

  const handleBurgerClicked = () => {
    dispatch({ type: 'TOGGLE_SECONDARY_MENU' })
  }

  return (
    <LogoAndBurgerWrapper>
      <StyledLogo
        visible={
          !state.cnnInView ||
          state.mobileLogoOverride ||
          state.secondaryMenuActive
        }
      >
        <Link onClick={() => dispatch({ type: 'SECONDARY_MENU_OFF' })} to="/">
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
