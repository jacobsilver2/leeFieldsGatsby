import React from "react"
import { navigate } from "gatsby"
import { Bar, Control } from "../styles/StyledVideoModal"

export const VideoModalTopBar = ({ muted, setMuted, prevPath }) => {
  return (
    <Bar>
      <Control onClick={() => setMuted(!muted)}>
        <p>{muted ? "Sound On" : "Sound Off"}</p>
      </Control>
      <Control
        onClick={() => navigate(prevPath || "/", { state: { noScroll: true } })}
      >
        <p>Close</p>
      </Control>
    </Bar>
  )
}

export default VideoModalTopBar
