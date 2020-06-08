import React, { useContext } from "react"
import { GlobalDispatchContext, GlobalStateContext } from "../context/provider"
import { NavButton, StyledLink, StyledGatsbyLink } from "../styles/StyledNav"
import { Link } from "gatsby"

const NavLinks = ({ handleSoundClick }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  return (
    <>
      <StyledGatsbyLink to="/info">Info</StyledGatsbyLink>
      <StyledGatsbyLink to="/watch">Watch</StyledGatsbyLink>
      <StyledGatsbyLink to="/listen">Listen</StyledGatsbyLink>
      <StyledGatsbyLink to="/tour">Tour</StyledGatsbyLink>
      <StyledGatsbyLink to="/store">Store</StyledGatsbyLink>
      {/* <StyledLink
        open={state.secondaryMenuActive}
        to="/shows"
        onClick={() => dispatch({ type: "SECONDARY_MENU_OFF" })}
      >
        <NavButton open={state.secondaryMenuActive}>SHOWS</NavButton>
      </StyledLink>

      <StyledLink
        open={state.secondaryMenuActive}
        to="/merch"
        onClick={() => dispatch({ type: "SECONDARY_MENU_OFF" })}
      >
        <NavButton open={state.secondaryMenuActive}>MERCH</NavButton>
      </StyledLink>

      <StyledLink
        open={state.secondaryMenuActive}
        to="/info"
        onClick={() => dispatch({ type: "SECONDARY_MENU_OFF" })}
      >
        <NavButton open={state.secondaryMenuActive}>INFO</NavButton>
      </StyledLink>

      <NavButton
        open={state.secondaryMenuActive}
        onClick={() => {
          dispatch({ type: "DONT_LEAVE_ME_THIS_WAY" })
          dispatch({ type: "SECONDARY_MENU_OFF" })
        }}
      >
        DON'T LEAVE ME THIS WAY
      </NavButton>
      <NavButton
        open={state.secondaryMenuActive}
        onClick={() => {
          dispatch({ type: "FAITHFUL_MAN" })
          dispatch({ type: "SECONDARY_MENU_OFF" })
        }}
      >
        FAITHFUL MAN
      </NavButton>
      <NavButton
        open={state.secondaryMenuActive}
        onClick={() => {
          handleSoundClick()
        }}
      >
        {state.isMuted ? "TURN SOUND ON" : "TURN SOUND OFF"}
      </NavButton> */}
    </>
  )
}

export default NavLinks
