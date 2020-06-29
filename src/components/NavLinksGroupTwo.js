import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import { StyledGatsbyLink, NavText } from "../styles/StyledNav"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
`

const NavLinks = () => {
  const dispatch = useContext(GlobalDispatchContext)
  // const state = useContext(GlobalStateContext)

  const handleClick = () => {
    dispatch({ type: "CNN_OFF" })
  }

  return (
    <Wrapper>
      <StyledGatsbyLink isRight onClick={handleClick} to="/info">
        <NavText>Info</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink isRight onClick={handleClick} to="/shop">
        <NavText>Shop</NavText>
      </StyledGatsbyLink>
    </Wrapper>
  )
}

export default NavLinks
