import React, { useState, useEffect } from "react"
import VideoModalPlayer from "./VideoModalPlayer"
import VideoModalControlBar from "./VideoModalControlBar"
import useWindowSize from "../hooks/useWindowSize"
import {
  Wrapper,
  VideoWrapper,
  ModalVideoInner,
  CursorTrap,
} from "../styles/StyledVideoModal"
import VideoModalTopBar from "./VideoModalTopBar"

const VideoModal2 = ({ videos, prevPath = "/", nextCursor, prevCursor }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0])
  const [muted, setMuted] = useState(true)
  const [cursor, setCursor] = useState("")
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const size = useWindowSize()

  useEffect(() => {
    console.log(`the total width is ${size.width}`)
    console.log(`the midway point is ${size.width / 2}`)
  }, [size.width])

  const onMouseMove = e => {
    parseInt(cursorPos.x) < size.width / 2
      ? setCursor(prevCursor)
      : setCursor(nextCursor)
    console.log(
      `the cursor is at x:${e.nativeEvent.offsetX}, y:${e.nativeEvent.offsetY}`
    )
    setCursorPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
  }

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
    <Wrapper onMouseMove={onMouseMove}>
      <VideoModalTopBar muted={muted} setMuted={setMuted} prevPath={prevPath} />
      <VideoWrapper cursor={cursor}>
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
        videoTitle={currentVideo.node.data.Video_Title.toUpperCase()}
        previousVideo={previousVideo}
        handleEnded={handleEnded}
      />
    </Wrapper>
  )
}

export default VideoModal2
