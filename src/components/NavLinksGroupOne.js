import React, { useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import {
  StyledGatsbyLink,
  NavText,
  StyledNavElement,
  VideoText,
} from "../styles/StyledNav"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const NavLinksGroupOne = () => {
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: "CNN_OFF" })
  }

  const handleVidClick = () => {
    dispatch({ type: "MODAL_VID_OPEN" })
  }

  return (
    <Wrapper>
      <StyledGatsbyLink isleft="true" onClick={handleClick} to="/music">
        <NavText>Music</NavText>
      </StyledGatsbyLink>
      <StyledNavElement isLeft="true" onClick={handleVidClick}>
        <VideoText>Video</VideoText>
      </StyledNavElement>
      <StyledGatsbyLink isleft="true" onClick={handleClick} to="/tour">
        <NavText>Tour</NavText>
      </StyledGatsbyLink>
    </Wrapper>
  )
}

export default NavLinksGroupOne
