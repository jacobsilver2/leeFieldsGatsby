import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import { StyledGatsbyLink } from "../styles/StyledNav"
import styled from "styled-components"
// import { Link } from "gatsby"

const Wrapper = styled.div`
  display: flex;
`

const NavLinksGroupOne = ({ handleSoundClick }) => {
  const dispatch = useContext(GlobalDispatchContext)
  // const state = useContext(GlobalStateContext)

  const handleClick = () => {
    dispatch({ type: "CNN_OFF" })
  }

  return (
    <Wrapper>
      <StyledGatsbyLink onClick={handleClick} to="/music">
        <p>Music</p>
      </StyledGatsbyLink>
      <StyledGatsbyLink onClick={handleClick} to="/video">
        <p>Video</p>
      </StyledGatsbyLink>
      <StyledGatsbyLink onClick={handleClick} to="/tour">
        <p>Tour</p>
      </StyledGatsbyLink>
    </Wrapper>
  )
}

export default NavLinksGroupOne
