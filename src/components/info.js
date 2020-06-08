import React, { useContext } from "react"
import Img from "../components/image"
import {
  StyledShowsComponent,
  ContentWrapper,
  CloseButton,
} from "../styles/StyledShowsComponent"
import { GlobalDispatchContext } from "../context/provider"
import styled from "styled-components"

const StyledImgWrapper = styled.div`
  width: 100%;
`

const Shows = ({ image }) => {
  const dispatch = useContext(GlobalDispatchContext)
  return (
    <StyledShowsComponent>
      <CloseButton onClick={() => dispatch({ type: "CLOSE_NAV_BUTTON" })}>
        Close
      </CloseButton>
      <ContentWrapper>
        <Img image={image} alt="Lee Fields At Haldern" />
      </ContentWrapper>
    </StyledShowsComponent>
  )
}

export default Shows
