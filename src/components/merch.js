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
    <div>
      <h1>Hello From The Merch Page</h1>
    </div>
  )
}

export default Shows
