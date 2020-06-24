import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import { StyledGatsbyLink } from "../styles/StyledNav"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
`

const NavLinks = ({ handleSoundClick }) => {
  const dispatch = useContext(GlobalDispatchContext)
  // const state = useContext(GlobalStateContext)

  const handleClick = () => {
    dispatch({ type: "CNN_OFF" })
  }

  return (
    <Wrapper>
      <StyledGatsbyLink onClick={handleClick} to="/info">
        <p>Info</p>
      </StyledGatsbyLink>
      <StyledGatsbyLink onClick={handleClick} to="/shop">
        <p>Shop</p>
      </StyledGatsbyLink>
    </Wrapper>
  )
}

export default NavLinks
