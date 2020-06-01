import styled from "styled-components"

export const VideoBackground = styled.div`
  background: ${props => props.theme.black};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -99;
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    /* background: rgba(0, 0, 0, 0.75); */
  }
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`
export const VideoForeground = styled.div`
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  @media (min-aspect-ratio: 16/9) {
    height: 300%;
    top: -100%;
  }

  @media (max-aspect-ratio: 16/9) {
    width: 300%;
    left: -100%;
  }
`
