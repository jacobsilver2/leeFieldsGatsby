import React, { useState } from "react"
import ReactPlayer from "react-player/lazy"
import reactPlayerOptions from "../lib/reactPlayerOptions"
import videoLibary from "../lib/videoLibrary"
import {
  Wrapper,
  VideoContainer,
  ControlsAndTitleWrapper,
  VidPicker,
  Vid,
  Title,
  PauseAndSoundWrapper,
  PauseAndSound,
} from "../styles/VideoPlayer"

const Video = () => {
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [currentVideo, setCurrentVideo] = useState(videoLibary[0])

  const handleToggleMuted = () => {
    setMuted(!muted)
  }

  const handlePause = () => {
    setPlaying(!playing)
  }
  return (
    <Wrapper>
      <VideoContainer>
        <ReactPlayer
          playing={playing}
          url={currentVideo.url}
          config={reactPlayerOptions}
          muted={muted}
          volume={0.75}
        />
      </VideoContainer>
      <ControlsAndTitleWrapper>
        <VidPicker>
          <Vid onClick={() => setCurrentVideo(videoLibary[0])}>01</Vid>
          <Vid onClick={() => setCurrentVideo(videoLibary[1])}>02</Vid>
          <Vid onClick={() => setCurrentVideo(videoLibary[2])}>03</Vid>
        </VidPicker>
        <Title>{currentVideo.title}</Title>
        <PauseAndSoundWrapper>
          <PauseAndSound onClick={handlePause}>Pause</PauseAndSound>
          <PauseAndSound onClick={handleToggleMuted}>
            Turn Sound {muted ? "On" : "Off"}
          </PauseAndSound>
        </PauseAndSoundWrapper>
      </ControlsAndTitleWrapper>
    </Wrapper>
  )
}

export default Video
