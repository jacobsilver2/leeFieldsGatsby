import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import VideoModalPlayer from "./VideoModalPlayer"
import {
  StyledSoundOnButton,
  StyledSoundOffButton,
} from "../styles/VideoPlayer"
const Wrapper = styled.div`
  height: 100vh;
`

export const SoundOnSoundOff = styled.div`
  cursor: pointer;
  text-align: center;
  margin-top: 2rem;
  /* position: absolute; */
  /* bottom: 1rem; */
  /* right: 1rem; */
`

const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const Close = styled.div`
  position: absolute;
  z-index: 999;
  top: ${({ theme }) => theme.spacing[6]};
  right: ${({ theme }) => theme.spacing[6]};
  color: #fff;
  cursor: pointer;
`

const ControlBar = styled.div`
  position: absolute;
  color: white;
  z-index: 999;
  bottom: ${({ theme }) => theme.spacing[6]};
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Control = styled.div`
  display: flex;
`

const PrevNext = styled.div`
  cursor: pointer;
`

const VideoBox = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  @media only screen and (max-width: 1280px) {
    /* top: 25vh; */
    /* margin: auto; */
    top: 25%;
    width: 100%;
    height: 100%;
  }
`

const VideoModal = ({ videos, prevPath = "/" }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0])
  const [muted, setMuted] = useState(true)
  // console.log(currentVideo)

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
    <>
      <Close
        onClick={() => navigate(prevPath || "/", { state: { noScroll: true } })}
      >
        <p>Close</p>
      </Close>
      <Wrapper>
        <Content>
          <VideoBox>
            <VideoModalPlayer
              playing={true}
              currentVideo={currentVideo.node.data.Video_URL}
              muted={muted}
              handleEnded={handleEnded}
            />
            <SoundOnSoundOff onClick={() => setMuted(!muted)}>
              {muted ? <StyledSoundOnButton /> : <StyledSoundOffButton />}
            </SoundOnSoundOff>
          </VideoBox>
        </Content>
      </Wrapper>
      <ControlBar>
        <Control>
          <p>{`${videos.indexOf(currentVideo) + 1}/${videos.length}`}</p>
        </Control>
        <Control>
          <p>{currentVideo.node.data.Video_Title}</p>
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
    </>
  )
}

export default VideoModal
