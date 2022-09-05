import React from 'react'
import ReactPlayer from 'react-player/lazy'
import styled from 'styled-components'

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
      'sharing-enable': false,
      'queue-enable': false,
      'ui-logo': false,
      'ui-start-screen-info': false,
    },
  },
}

const VideoModalPlayer = ({ playing, currentVideo, handleEnded, muted }) => (
  <>
    <VideoContainer>
      <ReactPlayer
        className="react-player"
        playing={playing}
        url={currentVideo}
        config={reactPlayerOptions}
        muted={muted}
        controls={false}
        width="100%"
        height="100%"
        onEnded={handleEnded}
      />
    </VideoContainer>
  </>
)

export default VideoModalPlayer
