import React from 'react'
import styled from 'styled-components'
import { VideoContainer } from '../styles/VideoPlayer'
import ReactPlayer from 'react-player/lazy'

const VidWrapper = styled.div`
  display: block;
  margin: 10rem 2rem;
`

const Title = styled.div`
  color: white;
  /* text-align: center; */
`

const Movie = styled.div`
  margin: 0 auto;
  /* width: 80%; */
`

const Order = styled.div`
  color: white;
  align-self: flex-start;
  /* text-align: left; */
`

const TextWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 1.5rem;
  }
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
      'autoplay-mute': true,
      controls: false,
      'sharing-enable': false,
      'queue-enable': false,
      'ui-logo': false,
      'ui-start-screen-info': false,
    },
  },
}

const VideoModalMobileVidList = ({ videos }) => {
  const vidList = videos.map((vid, i) => (
    <VidWrapper key={vid.node.id}>
      <Movie>
        <VideoContainer>
          {/* <VideoOverlayWrapper></VideoOverlayWrapper> */}
          <ReactPlayer
            className="react-player"
            playing={false}
            url={vid.node.data.Video_URL}
            config={reactPlayerOptions}
            muted={false}
            controls={true}
            loop={false}
            width="100%"
            height="100%"
          />
        </VideoContainer>
      </Movie>
      <TextWrapper>
        <Order>
          <p>{`${i + 1}/${videos.length}`}</p>
        </Order>
        <Title>
          <p>{vid.node.data.Video_Title.toUpperCase()}</p>
        </Title>
        <div></div>
      </TextWrapper>
    </VidWrapper>
  ))

  return <>{vidList}</>
}

export default VideoModalMobileVidList
