import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { GlobalDispatchContext, GlobalStateContext } from "../context/provider"

import StyledHeader from "../styles/StyledHeader"
import { StyledNav, Start, End, NavButton } from "../styles/StyledNav"

const Header = ({ siteTitle, handleSoundClick }) => {
  // const audioElm = document.getElementById("backgroundVideo")
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  // const handleSoundClick = () => {
  //   dispatch({ type: "TOGGLE_SOUND" })
  //   state.isMuted
  //     ? ytplayer && ytplayer.internalPlayer.unMute()
  //     : ytplayer && ytplayer.internalPlayer.mute()
  // }

  return (
    <StyledHeader>
      <StyledNav>
        <Start>
          <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        </Start>
        <End>
          <NavButton onClick={() => dispatch({ type: "SHOWS_ACTIVE" })}>
            Shows
          </NavButton>
          <NavButton onClick={() => dispatch({ type: "MERCH_ACTIVE" })}>
            Merch
          </NavButton>
          <NavButton onClick={() => dispatch({ type: "INFO_ACTIVE" })}>
            Info
          </NavButton>
          <NavButton
            onClick={() => {
              //   document.getElementById(
              //     "backgroundVideo"
              //   ).muted = !document.getElementById("backgroundVideo").muted
              handleSoundClick()
            }}
          >
            {state.isMuted ? "Turn Sound On" : "Turn Sound Off"}
          </NavButton>
        </End>
      </StyledNav>
    </StyledHeader>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
