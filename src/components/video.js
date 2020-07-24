import React, { useState, useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import ReactPlayer from "react-player/lazy"
import reactPlayerOptions from "../lib/reactPlayerOptions"

import { VideoContainer, VideoOverlayWrapper } from "../styles/VideoPlayer"

const Video = ({ video, hoverImg }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const [muted, setMuted] = useState(true)
  function handleClick() {
    setMuted(true)
    dispatch({ type: "MODAL_VID_OPEN" })
  }

  return (
    <VideoContainer hoverImg={hoverImg} onClick={handleClick}>
      <VideoOverlayWrapper></VideoOverlayWrapper>
      <ReactPlayer
        className="react-player"
        playing={true}
        url={video}
        config={reactPlayerOptions}
        muted={muted}
        controls={false}
        loop={true}
        width="100%"
        height="100%"
      />
    </VideoContainer>
  )
}

export default Video
