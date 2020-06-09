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
  return <Img image={image} />
}

export default Shows
