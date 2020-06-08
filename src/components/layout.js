import React, { useContext, useRef } from "react"
import YouTube from "react-youtube"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./header"
import { VideoBackground, VideoForeground } from "../styles/VideoPlayer"
import { GlobalStateContext, GlobalDispatchContext } from "../context/provider"
import { useOnClickOutside } from "../hooks/useOnClickOutside"
import MobileMenu from "./MobileMenu"
import { theme } from "../styles/theme"
import GlobalStyle from "../styles/GlobalStyle"
import youTubeOptions from "../lib/youtubeOptions"

const Layout = ({ children }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const videoRef = useRef()
  const menuNode = useRef()
  useOnClickOutside(menuNode, () => dispatch({ type: "SECONDARY_MENU_OFF" }))

  const onReady = e => {
    // event.target.mute();
  }
  const onEnd = e => {
    e.target.playVideo()
  }

  const handleSoundClick = () => {
    dispatch({ type: "TOGGLE_SOUND" })
    state.isMuted
      ? videoRef.current.internalPlayer.unMute()
      : videoRef.current.internalPlayer.mute()
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {state.secondaryMenuActive && (
        <div ref={menuNode}>
          <MobileMenu handleSoundClick={handleSoundClick} />
        </div>
      )}
      <Header
        siteTitle={data.site.siteMetadata.title}
        handleSoundClick={handleSoundClick}
      />
      <VideoBackground>
        <VideoForeground>
          <YouTube
            ref={videoRef}
            videoId={state.video}
            opts={youTubeOptions}
            onReady={onReady}
            onEnd={onEnd}
          />
        </VideoForeground>
      </VideoBackground>
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
