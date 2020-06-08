import React, { useContext, useState, useRef } from "react"
import { GlobalStateContext, GlobalDispatchContext } from "../context/provider"
import Video from "../components/video"
import Shows from "../components/shows"

import SEO from "../components/seo"

const IndexPage = () => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const videoRef = useRef()

  return (
    <>
      <SEO title="Home" />
      <Video />
      <Shows />
    </>
  )
}

export default IndexPage
