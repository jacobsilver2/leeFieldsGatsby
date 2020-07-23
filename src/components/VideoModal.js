import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import VideoModalPlayer from "./VideoModalPlayer"
import FadeWrapper from "../components/FadeWrapper"
import {
  StyledSoundOnButton,
  StyledSoundOffButton,
} from "../styles/VideoPlayer"
import {
  Wrapper,
  SoundOnSoundOff,
  Content,
  Close,
  ControlBar,
  Control,
  PrevNext,
  VideoBox,
  UpperCaseTitle
} from "../styles/StyledVideoModal"



const VideoModal = ({ videos, prevPath = "/" }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0])
  const [muted, setMuted] = useState(true)

  const handleEnded = () => {
    if (videos.indexOf(currentVideo) === videos.length - 1) {
      setCurrentVideo(videos[0])
    } else {
      const currentIndex = videos.indexOf(currentVideo)
      setCurrentVideo(videos[currentIndex + 1])
    }
  }

  const previousVideo = () => {
    if (currentVideo === videos[0]) {
      setCurrentVideo(videos[videos.length - 1])
    } else {
      const currentIndex = videos.indexOf(currentVideo)
      setCurrentVideo(videos[currentIndex - 1])
    }
  }


  return (
    // <FadeWrapper>
      <Close
        onClick={() => navigate(prevPath || "/", { state: { noScroll: true } })}
      >
        <p>Close</p>
      </Close>
      <Content>
        <VideoBox>
          <VideoModalPlayer
            playing={true}
            currentVideo={currentVideo.node.data.Video_URL}
            muted={muted}
            handleEnded={handleEnded}
          />
        </VideoBox>
        <SoundOnSoundOff onClick={() => setMuted(!muted)}>
          {muted ? <StyledSoundOnButton /> : <StyledSoundOffButton />}
        </SoundOnSoundOff>
      </Content>
      <ControlBar>
        <Control>
          <p>{`${videos.indexOf(currentVideo) + 1}/${videos.length}`}</p>
        </Control>
        <Control>
          <UpperCaseTitle>{currentVideo.node.data.Video_Title.toUpperCase()}</UpperCaseTitle>
        </Control>
        <Control className="prevnext">
          <PrevNext onClick={() => previousVideo()}>
            <p>Prev &nbsp;</p>
          </PrevNext>
          <PrevNext onClick={() => handleEnded()}>
            <p>Next &nbsp;</p>
          </PrevNext>
        </Control>
      </ControlBar>
    // </FadeWrapper>
  )
}

export default VideoModal
