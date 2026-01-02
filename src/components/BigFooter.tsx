import React from "react"
import footerStyles from "../styles/Footer.module.css"
import navStyles from "../styles/Nav.module.css"
import styles from "./BigFooter.module.css"

export const BigFooter = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.inner}>
        <div className={styles.wrapper}>
          <p className={navStyles.navText}>@2022 Lee Fields</p>
        </div>
        <div className={styles.wrapper}>
          <p className={`${navStyles.navText} ${styles.item}`}>
            <a
              href="https://www.instagram.com/mrleefields/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
          <p className={`${navStyles.navText} ${styles.item}`}>
            <a
              href="https://www.facebook.com/mrleefields/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
          <p className={`${navStyles.navText} ${styles.item}`}>
            <a
              href="https://twitter.com/leefields12?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
        <div className={styles.wrapper}>
          <p className={`${navStyles.navText} ${styles.item}`}>
            <a
              href="https://music.apple.com/us/artist/lee-fields-the-expressions/187277830"
              target="_blank"
              rel="noreferrer"
            >
              Apple Music
            </a>
          </p>
          <p className={`${navStyles.navText} ${styles.item}`}>
            <a
              href="https://open.spotify.com/artist/2bToe6WyGvADJftreuXh2K"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
          </p>
          <p className={`${navStyles.navText} ${styles.item}`}>
            <a
              href="https://soundcloud.com/bigcrownrecords/lee-fields-the-expressions-time"
              target="_blank"
              rel="noreferrer"
            >
              Soundcloud
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
