import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import {
  StyledGatsbyLink,
  NavText,
  StyledNavElement,
} from "../styles/StyledNav"

const NavLinksFull = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "SECONDARY_MENU_OFF" })
  }

  const handleVidClick = () => {
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "SECONDARY_MENU_OFF" })
    dispatch({ type: "MODAL_VID_OPEN" })
  }

  return (
    <>
      <StyledGatsbyLink issecondarynav="true" onClick={handleClick} to="/music">
        <NavText issecondarynav="true">Music</NavText>
      </StyledGatsbyLink>
      <StyledNavElement issecondarynav="true" onClick={handleVidClick}>
        <NavText issecondarynav="true">Video</NavText>
      </StyledNavElement>
      <StyledGatsbyLink issecondarynav="true" onClick={handleClick} to="/tour">
        <NavText issecondarynav="true">Tour</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink issecondarynav="true" onClick={handleClick} to="/info">
        <NavText issecondarynav="true">Info</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink issecondarynav="true" onClick={handleClick} to="/shop">
        <NavText issecondarynav="true">Shop</NavText>
      </StyledGatsbyLink>
    </>
  )
}

export default NavLinksFull
