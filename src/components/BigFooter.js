import React from "react"
import StyledFooter from "../styles/StyledFooter"
import styled from "styled-components"
import { NavText } from "../styles/StyledNav"

const Wrapper = styled.div`
  display: flex;
  .item {
    padding: 0 1rem;
    &:hover {
      text-decoration: underline;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`

const BigFooter = () => {
  return (
    <StyledFooter>
      <div className="inner">
        <Wrapper>
          <NavText>@2022 Lee Fields</NavText>
        </Wrapper>
        <Wrapper>
          <NavText className="item">
            <a
              href="https://www.instagram.com/leefieldsandtheexpressions/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </NavText>
          <NavText className="item">
            <a
              href="https://www.facebook.com/leefieldsandtheexpressions/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </NavText>
          <NavText className="item">
            <a
              href="https://twitter.com/leefields12?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </NavText>
        </Wrapper>
        <Wrapper>
          <NavText className="item">
            <a
              href="https://music.apple.com/us/artist/lee-fields-the-expressions/187277830"
              target="_blank"
              rel="noreferrer"
            >
              Apple Music
            </a>
          </NavText>
          <NavText className="item">
            <a
              href="https://open.spotify.com/artist/2bToe6WyGvADJftreuXh2K"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
          </NavText>
          <NavText className="item">
            <a
              href="https://soundcloud.com/bigcrownrecords/lee-fields-the-expressions-time"
              target="_blank"
              rel="noreferrer"
            >
              Soundcloud
            </a>
          </NavText>
        </Wrapper>
      </div>
    </StyledFooter>
  )
}

export default BigFooter
