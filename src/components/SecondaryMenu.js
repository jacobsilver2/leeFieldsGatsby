import React, { useContext } from "react"
import { StyledSecondaryMenu, Content } from "../styles/StyledMobileMenu"
import { GlobalStateContext } from "../context/provider"
import NavLinks from "./NavLinksFull"

const SecondaryMenu = () => {
  const state = useContext(GlobalStateContext)
  return (
    <StyledSecondaryMenu open={state.secondaryMenuActive}>
      <Content>
        <NavLinks />
      </Content>
    </StyledSecondaryMenu>
  )
}
export default SecondaryMenu
