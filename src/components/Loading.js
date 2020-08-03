import React from "react"
import styled from "styled-components"
// import { css } from "@emotion/core"
import ClipLoader from "react-spinners/ClipLoader"

const Loader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: white;
  opacity: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = () => {
  return (
    <Loader>
      <ClipLoader color="black" size="30px" />
    </Loader>
  )
}

export default Loading
