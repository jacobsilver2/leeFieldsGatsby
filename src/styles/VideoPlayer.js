import styled from "styled-components"

export const Wrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.black};
`

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  /* overflow: hidden; */
  padding-bottom: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
    pointer-events: none;
  }
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
