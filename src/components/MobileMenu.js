import React, { useContext } from "react"
import { StyledMobileMenu, Content } from "../styles/StyledMobileMenu"
import { GlobalStateContext } from "../context/provider"
import NavLinks from "./NavLinksFull"

const MobileMenu = ({ handleSoundClick }) => {
  const state = useContext(GlobalStateContext)
  return (
    <StyledMobileMenu open={state.secondaryMenuActive}>
      <Content>
        <NavLinks handleSoundClick={handleSoundClick} />
      </Content>
    </StyledMobileMenu>
  )
}
export default MobileMenu
