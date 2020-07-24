import React, { useContext } from "react"
import { GlobalStateContext } from "../context/provider"
import { Content, StyledSecondaryMenu } from "../styles/StyledMobileMenu"
import NavLinks from "./NavLinksFull"

const SecondaryMenu = () => {
  const state = useContext(GlobalStateContext)
  return (
    <StyledSecondaryMenu>
      <Content>
        <NavLinks />
      </Content>
    </StyledSecondaryMenu>
  )
}
export default SecondaryMenu
