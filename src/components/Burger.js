import React, { useContext } from "react"
import { StyledBurger } from "../styles/StyledBurger"
import { GlobalStateContext, GlobalDispatchContext } from "../context/provider"

const Burger = () => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  return (
    <StyledBurger
      open={state.secondaryMenuActive}
      onClick={() =>
        dispatch({
          type: "TOGGLE_SECONDARY_MENU",
        })
      }
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
