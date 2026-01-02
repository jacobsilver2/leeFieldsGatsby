import { useState } from 'react'
import dynamic from 'next/dynamic'
import { reactPlayerOptions } from '../lib'
import { VideoModal } from './VideoModal'
import styles from '../styles/VideoPlayer.module.css'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
})

interface VideoProps {
  video: string
  hoverImg?: string
}

export const Video = ({ video, hoverImg }: VideoProps) => {
  const [muted, setMuted] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  const handleClick = () => {
    setMuted(true)
    setModalOpen(true)
  }

  return (
    <>
      <div
        className={styles.videoContainer}
        onClick={handleClick}
        style={hoverImg ? { cursor: `url('${hoverImg}') 25 64, auto` } : undefined}
      >
        <div className={styles.videoOverlayWrapper} />
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
      </div>
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
