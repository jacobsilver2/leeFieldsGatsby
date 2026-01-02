import { useState } from 'react'
import Link from 'next/link'
import { useGlobalDispatch } from '../hooks'
import styles from '../styles/Nav.module.css'
import navStyles from './NavLinksGroupOne.module.css'
import { VideoModal } from './VideoModal'

export const NavLinksGroupOne = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useGlobalDispatch()

  const handleClick = () => {
    dispatch({ type: 'CNN_OFF' })
  }

  const handleVidClick = () => {
    setModalOpen(true)
  }

  return (
    <div className={navStyles.wrapper}>
      <Link className={`${styles.gatsbyLink} ${styles.isLeft}`} onClick={handleClick} href="/music">
        <p className={styles.navText}>Music</p>
      </Link>
      <div className={`${styles.navElement} ${styles.isLeft}`} onClick={handleVidClick}>
        <p className={styles.videoText}>Video</p>
      </div>
      <Link className={`${styles.gatsbyLink} ${styles.isLeft}`} onClick={handleClick} href="/tour">
        <p className={styles.navText}>Tour</p>
      </Link>
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
