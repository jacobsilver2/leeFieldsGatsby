import React from "react"
import ReactPlayer from "react-player/lazy"
import styled from "styled-components"

const VideoContainer = styled.div`
  @keyframes modal-video-inner {
    from {
      transform: translate(0, 100px);
    }
    to {
      transform: translate(0, 0);
    }
  }
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
  background-color: #333;
  animation-timing-function: ease-out;
  animation-duration: 0.3s;
  animation-name: modal-video-inner;
  -webkit-transform: translate(0, 0);
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -ms-transition: -ms-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const reactPlayerOptions = {
  youtube: {
    playerVars: {
      autoplay: 1,
      controls: 0,
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
      controls: false,
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
