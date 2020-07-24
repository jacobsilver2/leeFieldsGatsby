import React from "react"
import { navigate } from "gatsby"
import { Bar, Control } from "../styles/StyledVideoModal"

export const VideoModalTopBar = ({ muted, setMuted, prevPath }) => {
  return (
    <Bar>
      <Control onClick={() => setMuted(!muted)}>
        <p>{muted ? "SOUND ON" : "SOUND OFF"}</p>
      </Control>
      <Control
        onClick={() => navigate(prevPath || "/", { state: { noScroll: true } })}
      >
        <p>CLOSE</p>
      </Control>
    </Bar>
  )
}

export default VideoModalTopBar
