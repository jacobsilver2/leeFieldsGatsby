import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import VideoModalPlayer from "./VideoModalPlayer"

const Wrapper = styled.div`
  /* display: flex;
  position: relative; */
  height: 100vh;
`
const Content = styled.div`
  color: white;
  /* display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto; */
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

const VideoModal = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0])

  const handleEnded = () => {
    if (currentVideo === videos[2]) {
      setCurrentVideo(videos[0])
    } else {
      const currentIndex = videos.indexOf(currentVideo)
      setCurrentVideo(videos[currentIndex + 1])
    }
  }

  const previousVideo = () => {
    if (currentVideo === videos[0]) {
      setCurrentVideo(videos[2])
    } else {
      const currentIndex = videos.indexOf(currentVideo)
      setCurrentVideo(videos[currentIndex - 1])
    }
  }

  return (
    <>
      <Close onClick={() => navigate(`/`, { state: { noScroll: true } })}>
        <p>Close</p>
      </Close>
      <Wrapper>
        <Content>
          <div></div>
          <VideoModalPlayer
            playing={true}
            currentVideo={currentVideo.node.data.Video_URL}
            muted={true}
            handleEnded={handleEnded}
          />
          <div></div>
        </Content>
      </Wrapper>
      <ControlBar>
        <Control>
          <p>{`${videos.indexOf(currentVideo)}/${videos.length}`}</p>
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
