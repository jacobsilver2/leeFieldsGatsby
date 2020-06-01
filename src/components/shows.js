import React, { useContext } from "react"
import {
  StyledShowsComponent,
  ContentWrapper,
  CloseButton,
} from "../styles/StyledShowsComponent"
import { GlobalDispatchContext } from "../context/provider"

const Shows = () => {
  const dispatch = useContext(GlobalDispatchContext)
  return (
    <StyledShowsComponent>
      <CloseButton onClick={() => dispatch({ type: "CLOSE_NAV_BUTTON" })}>
        Close
      </CloseButton>
      <ContentWrapper>Hello from the Shows Component</ContentWrapper>
    </StyledShowsComponent>
  )
}

export default Shows
