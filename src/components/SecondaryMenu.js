import React from "react"
import { Content, StyledSecondaryMenu } from "../styles/StyledMobileMenu"
import NavLinks from "./NavLinksFull"

const SecondaryMenu = () => {
  return (
    <StyledSecondaryMenu>
      <Content>
        <NavLinks />
      </Content>
    </StyledSecondaryMenu>
  )
}
export default SecondaryMenu
