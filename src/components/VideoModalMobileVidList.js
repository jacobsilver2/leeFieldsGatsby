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

const VideoModalMobileVidList = ({ videos }) => {
  //   console.log(videos)
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
            //   config={reactPlayerOptions}
            muted={false}
            controls={true}
            loop={true}
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
