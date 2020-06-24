import React, { useContext } from "react"
import { StyledMobileMenu } from "../styles/StyledMobileMenu"
import { GlobalStateContext } from "../context/provider"
import NavLinks from "./NavLinksGroupOne"

const MobileMenu = ({ handleSoundClick }) => {
  const state = useContext(GlobalStateContext)
  return (
    <StyledMobileMenu open={state.secondaryMenuActive}>
      <NavLinks handleSoundClick={handleSoundClick} />
    </StyledMobileMenu>
  )
}
export default MobileMenu
