import React, { useContext } from "react"
import { GlobalDispatchContext, GlobalStateContext } from "../context/provider"
import { NavButton } from "../styles/StyledNav"
import { Link } from "gatsby"

const NavLinks = ({ handleSoundClick }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <>
      <NavButton>
        <Link to="/shows">Shows</Link>
      </NavButton>
      <NavButton>
        <Link to="/merch">Merch</Link>
      </NavButton>
      <NavButton>
        <Link to="/info">Info</Link>
      </NavButton>
      <NavButton onClick={() => dispatch({ type: "DONT_LEAVE_ME_THIS_WAY" })}>
        DON'T LEAVE ME THIS WAY
      </NavButton>
      <NavButton onClick={() => dispatch({ type: "FAITHFUL_MAN" })}>
        FAITHFUL MAN
      </NavButton>
      <NavButton
        onClick={() => {
          handleSoundClick()
        }}
      >
        {state.isMuted ? "TURN SOUND ON" : "TURN SOUND OFF"}
      </NavButton>
    </>
  )
}

export default NavLinks
