import React from "react"
import styles from "../styles/Nav.module.css"

export const SocialLinks = () => {
  return (
    <>
      <a className={styles.link} href="http://www.spotify.com">Spotify</a>
      <a className={styles.link} href="http://www.itunes.com">Itunes</a>
      <a className={styles.link} href="http://www.instagram.com">IG</a>
      <a className={styles.link} href="http://www.facebook.com">FB</a>
    </>
  )
}
