import React, { useContext } from "react"
import { globalHistory as history } from "@reach/router"
import { GlobalDispatchContext } from "../context/provider"
import { StyledGatsbyLink, NavText } from "../styles/StyledNav"
// import styled from "styled-components"

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `

const NavLinksFull = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const { location } = history
  // const state = useContext(GlobalStateContext)

  const handleClick = () => {
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "SECONDARY_MENU_OFF" })
  }

  return (
    <>
      <StyledGatsbyLink onClick={handleClick} to="/music">
        <NavText issecondarynav="true">Music</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink
        state={{
          modal: true,
          prevPath: location.pathname,
        }}
        onClick={handleClick}
        to="/video"
      >
        <NavText issecondarynav="true">Video</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink onClick={handleClick} to="/tour">
        <NavText issecondarynav="true">Tour</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink onClick={handleClick} to="/info">
        <NavText issecondarynav="true">Info</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink onClick={handleClick} to="/shop">
        <NavText issecondarynav="true">Shop</NavText>
      </StyledGatsbyLink>
    </>
  )
}

export default NavLinksFull
