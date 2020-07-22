import React from "react"
import styled from "styled-components"
// import { css } from "@emotion/core"
import BeatLoader from "react-spinners/BeatLoader"

const Loader = styled.div`
  display: flex;
  justify-content: center;
`

const Loading = () => {
  return (
    <Loader>
      <BeatLoader color="black" size="30" />
    </Loader>
  )
}

export default Loading
