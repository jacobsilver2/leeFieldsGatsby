import React from "react"
import ReactPlayer from "react-player/lazy"
import reactPlayerOptions from "../lib/reactPlayerOptions"
import { Wrapper, VideoContainer } from "../styles/VideoPlayer"

const Video = ({ video }) => {
  return (
    <Wrapper>
      <VideoContainer>
        {/* <VideoOverlayWrapper>
          {playing ? (
            <div style={{ position: "absolute", bottom: "0px", left: "0px" }}>
              <StyledPauseButton onClick={handlePause} />
            </div>
          ) : (
            <StyledPlayButton onClick={handlePause} />
          )}
          <div style={{ position: "absolute", bottom: "0px", right: "10px" }}>
            {muted ? (
              <StyledSoundOffButton onClick={handleToggleMuted} />
            ) : (
              <StyledSoundOnButton onClick={handleToggleMuted} />
            )}
          </div>
        </VideoOverlayWrapper> */}
        <ReactPlayer
          className="react-player"
          playing={true}
          url={video}
          config={reactPlayerOptions}
          muted={true}
          controls={true}
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
