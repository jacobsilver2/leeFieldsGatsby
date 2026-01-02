import { useState } from 'react'
import Link from 'next/link'
import { useGlobalDispatch } from '../hooks'
import styles from '../styles/Nav.module.css'
import { VideoModal } from './VideoModal'

export const NavLinksFull = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useGlobalDispatch()

  const handleClick = () => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'SECONDARY_MENU_OFF' })
  }

  const handleVidClick = () => {
    setModalOpen(true)
  }

  return (
    <>
      <Link className={styles.gatsbyLinkSecondary} onClick={handleClick} href="/music">
        <p className={styles.navTextSecondary}>Music</p>
      </Link>
      <div className={styles.navElementSecondary} onClick={handleVidClick}>
        <p className={styles.navTextSecondary}>Video</p>
      </div>
      <Link className={styles.gatsbyLinkSecondary} onClick={handleClick} href="/tour">
        <p className={styles.navTextSecondary}>Tour</p>
      </Link>
      <Link className={styles.gatsbyLinkSecondary} onClick={handleClick} href="/info">
        <p className={styles.navTextSecondary}>Info</p>
      </Link>
      <Link className={styles.gatsbyLinkSecondary} onClick={handleClick} href="/shop">
        <p className={styles.navTextSecondary}>Shop</p>
      </Link>
      <VideoModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
