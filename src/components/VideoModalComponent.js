import React, { useEffect, useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import useLockBodyScroll from "../hooks/useLockBodyScroll"
import { GlobalDispatchContext } from "../context/provider"
import { VideoWrapper, ModalVideoInner } from "../styles/StyledVideoModal"
import FadeWrapper from "./FadeWrapper"
import {
  Overlay,
  Content,
  CloseContainer,
  BottomBar,
  MouseTrap,
  MouseTrapInner,
  PrevCursor,
  NextCursor,
  SoundBox,
} from "../styles/StyledVideoModalComponent"
import VideoModalPlayer from "./VideoModalPlayer"

const VideoModalComponent = () => {
  const [muted, setMuted] = useState(true)
  const [currentVideo, setcurrentVideo] = useState()
  const dispatch = useContext(GlobalDispatchContext)
  useLockBodyScroll()

  useEffect(() => {
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

  const { video, prevCursor, nextCursor } = useStaticQuery(
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
        prevCursor: file(base: { eq: "prevVid.png" }) {
          childImageSharp {
            fixed(width: 128) {
              src
            }
          }
        }
        nextCursor: file(base: { eq: "nextVid.png" }) {
          childImageSharp {
            fixed(width: 128) {
              src
            }
          }
        }
      }
    `
  )

  const { src: prevCursorUrl } = prevCursor.childImageSharp.fixed
  const { src: nextCursorUrl } = nextCursor.childImageSharp.fixed

  return (
    <FadeWrapper transition={0.5}>
      <Overlay>
        <Content>
          <CloseContainer onClick={onClose}>
            <p>CLOSE</p>
          </CloseContainer>
          <MouseTrap>
            <MouseTrapInner>
              <PrevCursor
                onClick={previousVideo}
                cursor={prevCursorUrl}
              ></PrevCursor>
              <NextCursor
                onClick={handleEndedAndNext}
                cursor={nextCursorUrl}
              ></NextCursor>
            </MouseTrapInner>
          </MouseTrap>
          <VideoWrapper>
            <ModalVideoInner>
              <VideoModalPlayer
                playing={true}
                currentVideo={currentVideo && currentVideo.node.data.Video_URL}
                muted={muted}
                handleEnded={handleEndedAndNext}
              />
            </ModalVideoInner>
          </VideoWrapper>
          <BottomBar>
            <div>
              <p>
                {currentVideo && video.edges.indexOf(currentVideo) + 1}/
                {video.edges.length}
              </p>
            </div>
            <div>
              <p>
                {currentVideo &&
                  currentVideo.node.data.Video_Title.toUpperCase()}
              </p>
            </div>
            <SoundBox onClick={handleSound}>
              <p>SOUND {muted ? "ON" : "OFF"}</p>
            </SoundBox>
          </BottomBar>
        </Content>
      </Overlay>
    </FadeWrapper>
  )
}

export default VideoModalComponent
