import React, { useContext, useRef } from "react"
import PropTypes from "prop-types"
import YouTube from "react-youtube"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Header from "./header"
import { VideoBackground, VideoForeground } from "../styles/VideoPlayer"
import { GlobalStateContext, GlobalDispatchContext } from "../context/provider"
// import "./layout.css"

export const theme = {
  red: "#FF0000",
  blue: "#017ad9",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  headerHeight: "10rem",
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
    font-family: 'Lato';
    font-weight: normal;
    font-style: normal;
  }
  
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Lato';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'Lato'; }
`

const Layout = ({ children }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const videoRef = useRef()
  const youTubeOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      enablejsapi: 1,
    },
  }
  const onReady = e => {
    // access to player in all event handlers via event.target
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
      <Header
        siteTitle={data.site.siteMetadata.title}
        handleSoundClick={handleSoundClick}
        ref={videoRef}
      />
      <VideoBackground>
        <VideoForeground>
          <YouTube
            ref={videoRef}
            videoId="--nTlj66uRE"
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
