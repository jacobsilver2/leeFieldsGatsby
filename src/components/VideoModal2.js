import React, { useState } from "react"
import VideoModalPlayer from "./VideoModalPlayer"
import VideoModalControlBar from "./VideoModalControlBar"
import {
  Wrapper,
  VideoWrapper,
  ModalVideoInner,
} from "../styles/StyledVideoModal"
import VideoModalTopBar from "./VideoModalTopBar"

const VideoModal2 = ({ videos, prevPath = "/" }) => {
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
    <Wrapper>
      <VideoModalTopBar muted={muted} setMuted={setMuted} prevPath={prevPath} />
      <VideoWrapper>
        <ModalVideoInner>
          <VideoModalPlayer
            playing={true}
            currentVideo={currentVideo.node.data.Video_URL}
            muted={muted}
            handleEnded={handleEnded}
          />
        </ModalVideoInner>
      </VideoWrapper>
      <VideoModalControlBar
        currentVideoIndex={videos.indexOf(currentVideo) + 1}
        totalLengthOfVideos={videos.length}
        videoTitle={currentVideo.node.data.Video_Title}
        previousVideo={previousVideo}
        handleEnded={handleEnded}
      />
    </Wrapper>
  )
}

export default VideoModal2
