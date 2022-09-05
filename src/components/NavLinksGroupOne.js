import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import { GlobalDispatchContext } from '../context'
import {
  NavText,
  StyledGatsbyLink,
  StyledNavElement,
  VideoText,
} from '../styles/StyledNav'
import VideoModal from './VideoModal'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const NavLinksGroupOne = () => {
  const videoModalRef = useRef()
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: 'CNN_OFF' })
  }

  const handleVidClick = () => {
    videoModalRef.current?.openModal()
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
      <VideoModal ref={videoModalRef} />
    </Wrapper>
  )
}

export default NavLinksGroupOne
