import styled from "styled-components"
import PlayButton from "../assets/svgs/playButton.svg"
import PauseButton from "../assets/svgs/pauseButton.svg"
import SoundOn from "../assets/svgs/soundOn.svg"
import SoundOff from "../assets/svgs/soundOff.svg"

export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
`

export const VideoContainer = styled.div`
  position: relative;
  /* width: 100%; */
  /* overflow: hidden; */
  padding-bottom: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    /* width: 100%; */
    /* height: 100%; */
    border: 0;
    pointer-events: none;
  }
`
export const VideoOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: white; */
  /* opacity: 0.75; */
  z-index: 10;
  display: flex;
`

export const StyledPlayButton = styled(PlayButton)`
  margin: auto;
  stroke: white;
  stroke-width: 0.4px;
  fill: white;
  height: 10rem;
  width: 10rem;
`

export const StyledPauseButton = styled(PauseButton)`
  stroke: white;
  stroke-width: 1px;
  fill: white;
  height: 10rem;
  width: 10rem;
`
export const StyledSoundOnButton = styled(SoundOn)`
  stroke: white;
  stroke-width: 1px;
  fill: white;
  height: 10rem;
  width: 10rem;
`

export const StyledSoundOffButton = styled(SoundOff)`
  stroke: white;
  stroke-width: 1px;
  fill: white;
  height: 10rem;
  width: 10rem;
`

export const ControlsAndTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const VidPicker = styled.div`
  display: flex;
`

export const PauseAndSoundWrapper = styled.div`
  display: flex;
`

export const PauseAndSound = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
`

export const Vid = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme, active }) =>
    active ? theme.color.black : theme.color.lightgrey};
  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
  cursor: pointer;
`

export const Title = styled.div``
