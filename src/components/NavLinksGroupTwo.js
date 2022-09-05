import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalDispatchContext } from '../context'
import { NavText, StyledGatsbyLink } from '../styles/StyledNav'

const Wrapper = styled.div`
  display: flex;
`

const NavLinks = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: 'CNN_OFF' })
  }

  return (
    <Wrapper>
      <StyledGatsbyLink isright="true" onClick={handleClick} to="/info">
        <NavText>Info</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink isright="true" onClick={handleClick} to="/shop">
        <NavText>Shop</NavText>
      </StyledGatsbyLink>
    </Wrapper>
  )
}

export default NavLinks
