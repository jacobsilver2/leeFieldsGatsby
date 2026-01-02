import React from "react"
import styles from "../styles/VideoModalMobile.module.css"
import { VideoModalMobileVidList as VideoList } from "./VideoModalMobileVidList"

interface VideoNode {
  node: {
    id: string
    data: {
      Video_Title: string
      Video_URL: string
    }
  }
}

interface VideoModalMobileProps {
  videos: VideoNode[]
  handleClose: () => void
}

export const VideoModalMobileComponent = ({ videos, handleClose }: VideoModalMobileProps) => (
  <div className={styles.overlay}>
    <div className={styles.content}>
      <div className={styles.closeContainer} onClick={handleClose}>
        <p>CLOSE</p>
      </div>
      <VideoList videos={videos} />
    </div>
  </div>
)
