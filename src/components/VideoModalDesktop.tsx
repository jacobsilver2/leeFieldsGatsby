import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPlayer from 'react-player/lazy'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './VideoModalDesktop.module.css'

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

interface VideoNode {
  node: {
    id: string
    data: {
      Video_Title: string
      Video_URL: string
    }
  }
}

interface VideoModalDesktopProps {
  handleClose: () => void
  videos: VideoNode[]
}

export const VideoModalDesktop = ({ handleClose, videos }: VideoModalDesktopProps) => {
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
    <div className={styles.background}>
      <div className={styles.close} onClick={handleClose}>
        <button className={styles.closeButton}>
          <p>CLOSE</p>
        </button>
      </div>
      <div className={styles.prev}>
        <button className={styles.nextAndPrevButtons} onClick={previousVideo}>
          <FontAwesomeIcon size="4x" icon={faArrowLeft} />
        </button>
      </div>
      <div className={styles.next}>
        <button className={styles.nextAndPrevButtons} onClick={handleEndedAndNext}>
          <FontAwesomeIcon size="4x" icon={faArrowRight} />
        </button>
      </div>
      <div className={styles.count}>
        <p>
          {currentVideo && videos.indexOf(currentVideo) + 1}/{videos.length}
        </p>
      </div>
      <div className={styles.title}>
        <p>
          {currentVideo && currentVideo.node.data.Video_Title.toUpperCase()}
        </p>
      </div>
      <div className={styles.sound}>
        <button onClick={handleSound}>
          <p>Sound {muted ? 'OFF' : 'ON'}</p>
        </button>
      </div>
      <div className={styles.video}>
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
      </div>
    </div>
  )
}
