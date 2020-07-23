import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import useLockBodyScroll from "../hooks/useLockBodyScroll"
import { GlobalDispatchContext, GlobalStateContext } from "../context/provider"

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: block;
  /* pointer-events: none; */
  /* z-index: 1000000; */
  background-color: black;
  overflow: hidden;
`

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  /* z-index: 1; */
  padding: 40px 0;
  color: white;
`

const TextContainer = styled.div`
  color: white;
`

const VideoModalComponent = () => {
  const dispatch = useContext(GlobalDispatchContext)
  useLockBodyScroll()

  function onClose() {
    console.log("clicked")
    dispatch({ type: "MODAL_VID_CLOSED" })
  }

  return (
    <Wrapper>
      <Container>
        <TextContainer onClick={onClose}>Hello</TextContainer>
      </Container>
    </Wrapper>
  )
}

export default VideoModalComponent
