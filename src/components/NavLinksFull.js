import React, { useContext, useRef } from 'react'
import { GlobalDispatchContext } from '../context'
import {
  NavText,
  StyledGatsbyLink,
  StyledNavElement,
} from '../styles/StyledNav'
import VideoModal from './VideoModal'

const NavLinksFull = () => {
  const videoModalRef = useRef()
  const dispatch = useContext(GlobalDispatchContext)

  const handleClick = () => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'SECONDARY_MENU_OFF' })
  }

  const handleVidClick = () => {
    videoModalRef.current?.openModal()
  }

  return (
    <>
      <StyledGatsbyLink issecondarynav="true" onClick={handleClick} to="/music">
        <NavText issecondarynav="true">Music</NavText>
      </StyledGatsbyLink>
      <StyledNavElement issecondarynav="true" onClick={handleVidClick}>
        <NavText issecondarynav="true">Video</NavText>
      </StyledNavElement>
      <StyledGatsbyLink issecondarynav="true" onClick={handleClick} to="/tour">
        <NavText issecondarynav="true">Tour</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink issecondarynav="true" onClick={handleClick} to="/info">
        <NavText issecondarynav="true">Info</NavText>
      </StyledGatsbyLink>
      <StyledGatsbyLink issecondarynav="true" onClick={handleClick} to="/shop">
        <NavText issecondarynav="true">Shop</NavText>
      </StyledGatsbyLink>
      <VideoModal ref={videoModalRef} />
    </>
  )
}

export default NavLinksFull
