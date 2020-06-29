import React, { useContext } from "react"
import { globalHistory as history } from "@reach/router"
import { GlobalDispatchContext } from "../context/provider"
import { StyledGatsbyLink, NavText } from "../styles/StyledNav"
import styled from "styled-components"
// import { Link } from "gatsby"

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const NavLinksGroupOne = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const { location } = history
  // const state = useContext(GlobalStateContext)

  const handleClick = () => {
    dispatch({ type: "CNN_OFF" })
  }

  return (
    <Wrapper>
      <StyledGatsbyLink isLeft onClick={handleClick} to="/music">
        <NavText>Music</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink
        state={{
          modal: true,
          prevPath: location.pathname,
        }}
        isLeft
        onClick={handleClick}
        to="/video"
      >
        <NavText>Video</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink isLeft onClick={handleClick} to="/tour">
        <NavText>Tour</NavText>
      </StyledGatsbyLink>
    </Wrapper>
  )
}

export default NavLinksGroupOne
