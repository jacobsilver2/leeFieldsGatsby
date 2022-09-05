import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPlayer from 'react-player/lazy'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
}

const Background = styled.div`
  z-index: 1005;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas: 'none none close' 'prev video next' 'vidCount vidTitle vidSound';
  justify-items: center;
  align-items: center;
`
const Close = styled.div`
  grid-area: close;
`
const CloseButton = styled.button`
  cursor: pointer;
  color: white;
  background: none;
  border: none;
`

const Prev = styled.div`
  grid-area: prev;
  color: white;
`
const Next = styled.div`
  grid-area: next;
  color: white;
`

const Count = styled.div`
  grid-area: vidCount;
  color: white;
`

const Title = styled.div`
  grid-area: vidTitle;
  color: white;
`
const Sound = styled.div`
  grid-area: vidSound;
  text-align: center;
  overflow: visible;
  white-space: nowrap;
  button {
    cursor: pointer;
    color: white;
    background: none;
    border: none;
  }
`
const Video = styled.div`
  grid-area: video;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

const NextAndPrevButtons = styled.button`
  position: relative;
  width: 100%;
  all: unset;
  cursor: pointer;
`
const VideoModalDesktop = ({ handleClose, videos }) => {
  const [currentVideo, setCurrentVideo] = useState(videos[0])
  const [muted, setMuted] = useState(true)
 

  const handleSound = () => {
    setMuted((prevVal) => !prevVal)
  }

  const previousVideo = () => {
    if (currentVideo === videos[0]) {
      setCurrentVideo(videos[videos.length - 1])
    } else {
      const currentIndex = videos.indexOf(currentVideo)
      setCurrentVideo(videos[currentIndex - 1])
    }
  }

  const handleEndedAndNext = () => {
    if (videos.indexOf(currentVideo) === videos.length - 1) {
      setCurrentVideo(videos[0])
    } else {
      const currentIndex = videos.indexOf(currentVideo)
      setCurrentVideo(videos[currentIndex + 1])
    }
  }

  return (
    <Background>
      <Close onClick={handleClose}>
        <CloseButton>
          <p>CLOSE</p>
        </CloseButton>
      </Close>
      <Prev>
        <NextAndPrevButtons onClick={previousVideo}>
          <FontAwesomeIcon size="4x" icon={faArrowLeft} />
        </NextAndPrevButtons>
      </Prev>
      <Next>
        <NextAndPrevButtons onClick={handleEndedAndNext}>
          <FontAwesomeIcon size="4x" icon={faArrowRight} />
        </NextAndPrevButtons>
      </Next>
      <Count>
        <p>
          {currentVideo && videos.indexOf(currentVideo) + 1}/{videos.length}
        </p>
      </Count>
      <Title>
        <p>
          {currentVideo && currentVideo.node.data.Video_Title.toUpperCase()}
        </p>
      </Title>
      <Sound>
        <button onClick={handleSound}>
          <p>Sound {muted ? 'OFF' : 'ON'}</p>
        </button>
      </Sound>
      <Video>
        <ReactPlayer
          className="react-player"
          playing={true}
          url={currentVideo && currentVideo.node.data.Video_URL}
          config={reactPlayerOptions}
          muted={muted}
          controls={false}
          width="100%"
          height="100%"
          onEnded={handleEndedAndNext}
        />
      </Video>
    </Background>
  )
}

export default VideoModalDesktop
