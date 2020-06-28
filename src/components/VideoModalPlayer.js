import React from "react"
import ReactPlayer from "react-player/lazy"
import styled from "styled-components"

const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const reactPlayerOptions = {
  youtube: {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      enablejsapi: 1,
      disablekb: 1,
      modestBranding: 1,
      fs: 0,
      iv_load_policy: 0,
    },
  },
  dailymotion: {
    params: {
      autoplay: false,
      mute: true,
      controls: true,
      "sharing-enable": false,
      "queue-enable": false,
      "ui-logo": false,
      "ui-start-screen-info": false,
    },
  },
}

const VideoModalPlayer = ({ playing, currentVideo, handleEnded, muted }) => {
  return (
    <>
      <VideoContainer>
        <ReactPlayer
          className="react-player"
          playing={playing}
          url={currentVideo}
          config={reactPlayerOptions}
          muted={muted}
          controls={true}
          width="100%"
          height="100%"
          onEnded={handleEnded}
        />
      </VideoContainer>
    </>
  )
}

export default VideoModalPlayer
