import React from 'react'
import ReactPlayer from 'react-player/lazy'
import styles from './VideoModalMobileVidList.module.css'
import videoStyles from '../styles/VideoPlayer.module.css'

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

interface VideoNode {
  node: {
    id: string
    data: {
      Video_Title: string
      Video_URL: string
    }
  }
}

interface VideoModalMobileVidListProps {
  videos: VideoNode[]
}

export const VideoModalMobileVidList = ({ videos }: VideoModalMobileVidListProps) => {
  const vidList = videos.map((vid, i) => (
    <div key={vid.node.id} className={styles.vidWrapper}>
      <div className={styles.movie}>
        <div className={videoStyles.videoContainer}>
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
        </div>
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.order}>
          <p>{`${i + 1}/${videos.length}`}</p>
        </div>
        <div className={styles.title}>
          <p>{vid.node.data.Video_Title.toUpperCase()}</p>
        </div>
        <div></div>
      </div>
    </div>
  ))

  return <>{vidList}</>
}
