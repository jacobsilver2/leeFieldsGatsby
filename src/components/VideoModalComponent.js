import React, { useEffect, useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import useLockBodyScroll from "../hooks/useLockBodyScroll"
import { GlobalDispatchContext } from "../context/provider"
import ReactPlayer from "react-player/lazy"
import styled from "styled-components"
import FadeWrapper from "./FadeWrapper"

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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas: "none none close" "prev video next" "vidCount vidTitle vidSound";
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

const VideoModalComponent = () => {
  const [muted, setMuted] = useState(true)
  const [currentVideo, setcurrentVideo] = useState()
  const dispatch = useContext(GlobalDispatchContext)
  useLockBodyScroll()

  useEffect(() => {
    dispatch({ type: "TICKER_OFF" })
    setcurrentVideo(video.edges[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function onClose() {
    dispatch({ type: "MODAL_VID_CLOSED" })
  }

  function handleSound() {
    setMuted(prevVal => !prevVal)
  }

  function previousVideo() {
    if (currentVideo === video.edges[0]) {
      setcurrentVideo(video.edges[video.edges.length - 1])
    } else {
      const currentIndex = video.edges.indexOf(currentVideo)
      setcurrentVideo(video.edges[currentIndex - 1])
    }
  }

  function handleEndedAndNext() {
    if (video.edges.indexOf(currentVideo) === video.edges.length - 1) {
      setcurrentVideo(video.edges[0])
    } else {
      const currentIndex = video.edges.indexOf(currentVideo)
      setcurrentVideo(video.edges[currentIndex + 1])
    }
  }

  const { video } = useStaticQuery(
    graphql`
      query {
        video: allAirtable(
          filter: { table: { eq: "Videos" } }
          sort: { fields: data___Video_Order }
        ) {
          edges {
            node {
              id
              data {
                Video_Title
                Video_URL
                Video_Order
              }
            }
          }
        }
      }
    `
  )

  return (
    <FadeWrapper transition={0.5}>
      <Background>
        <Close onClick={onClose}>
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
            {currentVideo && video.edges.indexOf(currentVideo) + 1}/
            {video.edges.length}
          </p>
        </Count>
        <Title>
          <p>
            {currentVideo && currentVideo.node.data.Video_Title.toUpperCase()}
          </p>
        </Title>
        <Sound>
          <button onClick={handleSound}>
            <p>Sound {muted ? "OFF" : "ON"}</p>
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
    </FadeWrapper>
  )
}

export default VideoModalComponent
