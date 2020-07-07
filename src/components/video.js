import React, { useState } from "react"
import { Link } from "gatsby"
import ReactPlayer from "react-player/lazy"
import reactPlayerOptions from "../lib/reactPlayerOptions"
import {
  Wrapper,
  VideoContainer,
  VideoOverlayWrapper,
  StyledPlayButton,
  StyledSoundOnButton,
  StyledSoundOffButton,
  SoundOnSoundOff,
} from "../styles/VideoPlayer"

const Video = ({ video }) => {
  const [muted, setMuted] = useState(true)
  return (
    <Wrapper>
      <VideoContainer>
        <VideoOverlayWrapper>
          <Link
            onClick={() => {
              setMuted(true)
            }}
            to="/video"
            state={{
              modal: true,
            }}
          >
            <StyledPlayButton />
          </Link>
          <SoundOnSoundOff
            onClick={() => {
              setMuted(!muted)
            }}
          >
            {muted ? <StyledSoundOnButton /> : <StyledSoundOffButton />}
          </SoundOnSoundOff>
        </VideoOverlayWrapper>
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
      {/* <ControlsAndTitleWrapper>
        <VidPicker>
          <Vid
            role="button"
            active={currentVideo === videoLibary[0]}
            onClick={() => setCurrentVideo(videoLibary[0])}
          >
            01
          </Vid>
          <Vid
            role="button"
            active={currentVideo === videoLibary[1]}
            onClick={() => setCurrentVideo(videoLibary[1])}
          >
            02
          </Vid>
          <Vid
            role="button"
            active={currentVideo === videoLibary[2]}
            onClick={() => setCurrentVideo(videoLibary[2])}
          >
            03
          </Vid>
        </VidPicker>
        <Title>{currentVideo.title}</Title>
        <PauseAndSoundWrapper>
          {/* <PauseAndSound role="button" onClick={handlePause}>
            Pause
          </PauseAndSound>
          <PauseAndSound role="button" onClick={handleToggleMuted}>
            Turn Sound {muted ? "On" : "Off"}
          </PauseAndSound> */}
      {/* </PauseAndSoundWrapper> */}
      {/* </ControlsAndTitleWrapper> */}
    </Wrapper>
  )
}

export default Video
