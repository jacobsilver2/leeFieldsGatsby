import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import ReactPlayer from "react-player/lazy"
import reactPlayerOptions from "../lib/reactPlayerOptions"
import {
  Wrapper,
  VideoContainer,
  VideoOverlayWrapper,
} from "../styles/VideoPlayer"

const Video = ({ video, hoverImg }) => {
  const [muted, setMuted] = useState(true)
  // console.log(hoverImg)
  function handleClick() {
    setMuted(true)
    navigate("/video", { state: { modal: true } })
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
