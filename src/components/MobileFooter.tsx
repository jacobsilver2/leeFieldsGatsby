import React from "react"
import Twitter from "../assets/svgs/twitter.svg"
import Facebook from "../assets/svgs/fb.svg"
import Instagram from "../assets/svgs/ig.svg"
import AppleMusic from "../assets/svgs/appleMusic.svg"
import Spotify from "../assets/svgs/spotify.svg"
import Soundcloud from "../assets/svgs/soundcloud.svg"
import iconStyles from "../styles/FooterSocialIcons.module.css"
import navStyles from "../styles/Nav.module.css"
import styles from "./MobileFooter.module.css"

export const MobileFooter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <p className={`${navStyles.navText} ${styles.item}`}>
          <a
            href="https://www.instagram.com/leefieldsandtheexpressions/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className={iconStyles.icon} />
          </a>
        </p>
        <p className={`${navStyles.navText} ${styles.item}`}>
          <a
            href="https://www.facebook.com/leefieldsandtheexpressions/"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook className={iconStyles.icon} />
          </a>
        </p>
        <p className={`${navStyles.navText} ${styles.item}`}>
          <a
            href="https://twitter.com/leefields12?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className={iconStyles.icon} />
          </a>
        </p>
        <p className={`${navStyles.navText} ${styles.item}`}>
          <a
            href="https://music.apple.com/us/artist/lee-fields-the-expressions/187277830"
            target="_blank"
            rel="noreferrer"
          >
            <AppleMusic className={`${iconStyles.icon} ${iconStyles.iconLarge} ${iconStyles.appleMusic}`} />
          </a>
        </p>
        <p className={`${navStyles.navText} ${styles.item}`}>
          <a
            href="https://open.spotify.com/artist/2bToe6WyGvADJftreuXh2K"
            target="_blank"
            rel="noreferrer"
          >
            <Spotify className={`${iconStyles.icon} ${iconStyles.iconLarge} ${iconStyles.spotify}`} />
          </a>
        </p>
        <p className={`${navStyles.navText} ${styles.item}`}>
          <a
            href="https://soundcloud.com/bigcrownrecords/lee-fields-the-expressions-time"
            target="_blank"
            rel="noreferrer"
          >
            <Soundcloud className={`${iconStyles.icon} ${iconStyles.iconLarge} ${iconStyles.soundcloud}`} />
          </a>
        </p>
      </div>
      <p className={navStyles.navText} style={{ textAlign: "center" }}>@2022 Lee Fields</p>
    </div>
  )
}
