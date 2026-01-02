import React from 'react'
import ReactPlayer from 'react-player/lazy'
import styles from './VideoModalPlayer.module.css'

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

interface VideoModalPlayerProps {
  playing: boolean
  currentVideo: string
  handleEnded: () => void
  muted: boolean
}

export const VideoModalPlayer = ({ playing, currentVideo, handleEnded, muted }: VideoModalPlayerProps) => (
  <>
    <div className={styles.videoContainer}>
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
    </div>
  </>
)
