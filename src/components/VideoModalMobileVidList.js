import React, { useState } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { VideoContainer, VideoOverlayWrapper } from "../styles/VideoPlayer"
import ReactPlayer from "react-player/lazy"

const VidWrapper = styled.div`
  display: block;
  margin: 10rem 0;
`

const Still = styled.div`
  width: 40%;
  margin: 0.5vh auto;
`

const Title = styled.div`
  color: white;
  text-align: center;
`

const Movie = styled.div`
  margin: 0 auto;
  width: 80%;
`

const VerticalLine = styled.div`
  position: relative;
  border-left: 2px solid white;
  height: 15vh;
  left: 50%;
  margin-left: -3px;
  top: 0;
  margin-bottom: 2rem;
`
const reactPlayerOptions = {
  youtube: {
    playerVars: {
      autoplay: 0,
      controls: 1,
      disablekb: 1,
      fs: 0,
      loop: 0,
      modestBranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 0,
      enablejsapi: 1,
      iv_load_policy: 3,
    },
  },
  dailymotion: {
    params: {
      autoplay: true,
      "autoplay-mute": true,
      controls: false,
      "sharing-enable": false,
      "queue-enable": false,
      "ui-logo": false,
      "ui-start-screen-info": false,
    },
  },
}

const VideoModalMobileVidList = ({ videos }) => {
  const [muted, setmuted] = useState(true)

  const vidList = videos.map(vid => (
    <VidWrapper key={vid.node.id}>
      <Still>
        <Img
          fluid={vid.node.data.Video_Still.localFiles[0].childImageSharp.fluid}
        />
      </Still>
      <Title>
        <h5>{vid.node.data.Video_Title.toUpperCase()}</h5>
      </Title>
      <VerticalLine />
      <Movie>
        <VideoContainer>
          {/* <VideoOverlayWrapper></VideoOverlayWrapper> */}
          <ReactPlayer
            className="react-player"
            playing={false}
            url={vid.node.data.Video_URL}
            config={reactPlayerOptions}
            muted={false}
            controls={false}
            loop={false}
            width="100%"
            height="100%"
          />
        </VideoContainer>
      </Movie>
    </VidWrapper>
  ))

  return <>{vidList}</>
}

export default VideoModalMobileVidList
