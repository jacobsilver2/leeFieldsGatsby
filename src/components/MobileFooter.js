import React from "react"
import {
  StyledTwitter,
  StyledInstagram,
  StyledFacebook,
  StyledAppleMusic,
  StyledSpotify,
  StyledSoundCloud,
} from "../styles/StyledFooterSocialIcons"
import { NavText } from "../styles/StyledNav"

import styled from "styled-components"

const Wrapper = styled.div`
  border-top: 1px solid black;
  display: block;
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`

const MobileFooter = () => {
  return (
    <Wrapper>
      <Links>
        <NavText className="item">
          <a
            href="https://www.instagram.com/leefieldsandtheexpressions/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <StyledInstagram />
          </a>
        </NavText>
        <NavText className="item">
          <a
            href="https://www.facebook.com/leefieldsandtheexpressions/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledFacebook />
          </a>
        </NavText>
        <NavText className="item">
          <a
            href="https://twitter.com/leefields12?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            <StyledTwitter />
          </a>
        </NavText>
        <NavText className="item">
          <a
            href="https://music.apple.com/us/artist/lee-fields-the-expressions/187277830"
            target="_blank"
            rel="noreferrer"
          >
            <StyledAppleMusic />
          </a>
        </NavText>
        <NavText className="item">
          <a
            href="https://open.spotify.com/artist/2bToe6WyGvADJftreuXh2K"
            target="_blank"
            rel="noreferrer"
          >
            <StyledSpotify />
          </a>
        </NavText>
        <NavText className="item">
          <a
            href="https://soundcloud.com/bigcrownrecords/lee-fields-the-expressions-time"
            target="_blank"
            rel="noreferrer"
          >
            <StyledSoundCloud />
          </a>
        </NavText>
      </Links>
      <NavText style={{ textAlign: "center" }}>
        <a href="https://bigcrownrecords.com/" target="_blank" rel="noreferrer">
          @2020 Big Crown Records
        </a>
      </NavText>
    </Wrapper>
  )
}

export default MobileFooter
