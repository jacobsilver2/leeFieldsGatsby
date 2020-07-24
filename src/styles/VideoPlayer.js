import styled from "styled-components"
import { Link } from "gatsby"
import PlayButton from "../assets/svgs/play.svg"
import PauseButton from "../assets/svgs/pauseButton.svg"
import SoundOn from "../assets/svgs/soundOn.svg"
import SoundOff from "../assets/svgs/soundOff.svg"

export const Wrapper = styled.div`
  /* border-bottom: 1px solid ${({ theme }) => theme.color.black}; */
`

export const VideoContainer = styled.div`
  cursor: url('${props => props.hoverImg}') 25 64, auto;
  position: relative;
  padding-top: 56.25%;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const PlayLink = styled(Link)`
  cursor: pointer;
  margin: auto;
`
export const VideoOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: white; */
  /* opacity: 0.75; */
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .react-player {
  }
`

export const StyledPlayButton = styled(PlayButton)`
  stroke: white;
  stroke-width: 0.4px;
  fill: white;
  height: 8vw;
  width: 8vw;
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
  height: 5vw;
  width: 5vw;
`
export const StyledSoundOffButton = styled(SoundOff)`
  stroke: white;
  stroke-width: 1px;
  fill: white;
  height: 5vw;
  width: 5vw;
`

export const SoundOnSoundOff = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`

export const ControlsAndTitleWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* justify-content: space-between; */
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

export const Title = styled.div`
  text-align: center;
`
