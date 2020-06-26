import React from "react"
import StyledFooter from "../styles/StyledFooter"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  .item {
    padding: 0 ${({ theme }) => theme.spacing[8]};
    &:hover {
      text-decoration: underline;
    }
    &:last-child {
      padding-right: 0;
    }
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="inner">
        <Wrapper>
          <p>@2020 Big Crown Records</p>
        </Wrapper>
        <Wrapper>
          <p className="item">
            <a href="http://www.instagram.com">Instagram</a>
          </p>
          <p className="item">
            <a href="http://www.facebook.com">Facebook</a>
          </p>
          <p className="item">
            <a href="http://www.twitter.com">Twitter</a>
          </p>
        </Wrapper>
        <Wrapper>
          <p className="item">
            <a href="http://www.apple.com">Apple Music</a>
          </p>
          <p className="item">
            <a href="http://www.spotify.com">Spotify</a>
          </p>
          <p className="item">
            <a href="http://www.soundcloud.com">Soundcloud</a>
          </p>
        </Wrapper>
      </div>
    </StyledFooter>
  )
}

export default Footer
