import React, { useState, useRef } from 'react'
import ReactPlayer from 'react-player/lazy'
import { reactPlayerOptions } from '../lib'
import VideoModal from './VideoModal'

import { VideoContainer, VideoOverlayWrapper } from '../styles/VideoPlayer'

const Video = ({ video, hoverImg }) => {
  const videoModalRef = useRef()
  const [muted, setMuted] = useState(true)

  const handleClick = () => {
    setMuted(true)
    videoModalRef.current?.openModal()
  }

  return (
    <>
      <VideoContainer hoverImg={hoverImg} onClick={handleClick}>
        <VideoOverlayWrapper hoverImg={hoverImg} />
        <ReactPlayer
          className="react-player"
          playing={true}
          url={video}
          config={reactPlayerOptions}
          muted={muted}
          controls={false}
          loop={true}
          width="100%"
          height="100%"
        />
      </VideoContainer>
      <VideoModal ref={videoModalRef} />
    </>
  )
}

export default Video
