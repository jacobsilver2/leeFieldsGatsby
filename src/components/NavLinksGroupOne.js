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
  // const handleModalVidClick = () => {
  //   dispatch({ type: "CNN_OFF" })
  //   dispatch({ type: "MODAL_VID_OPEN" })
  // }

  const handleVidClick = () => {
    dispatch({ type: "MODAL_VID_OPEN" })
  }

  return (
    <Wrapper>
      <StyledGatsbyLink isleft="true" onClick={handleClick} to="/music">
        <NavText>Music</NavText>
      </StyledGatsbyLink>
      {/* <StyledGatsbyLink
        state={{
          modal: true,
          prevPath: location.pathname,
        }}
        isleft="true"
        onClick={handleClick}
        to="/video"
      > */}
      <NavText onClick={handleVidClick}>Video</NavText>
      {/* </StyledGatsbyLink> */}
      <StyledGatsbyLink isleft="true" onClick={handleClick} to="/tour">
        <NavText>Tour</NavText>
      </StyledGatsbyLink>
    </Wrapper>
  )
}

export default NavLinksGroupOne
