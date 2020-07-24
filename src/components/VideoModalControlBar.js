import React from "react"
import { Control, PrevNext, BottomBar } from "../styles/StyledVideoModal"

export const VideoModalControlBar = ({
  currentVideoIndex,
  totalLengthOfVideos,
  videoTitle,
  previousVideo,
  handleEnded,
}) => {
  return (
    <BottomBar>
      <Control>
        <p>
          {currentVideoIndex}/{totalLengthOfVideos}
        </p>
      </Control>
      <Control>
        <p>{videoTitle}</p>
      </Control>
      <Control>
        <PrevNext onClick={() => previousVideo()}>
          <p>PREV &nbsp;</p>
        </PrevNext>
        <PrevNext onClick={() => handleEnded()}>
          <p>NEXT &nbsp;</p>
        </PrevNext>
      </Control>
    </BottomBar>
  )
}

export default VideoModalControlBar
