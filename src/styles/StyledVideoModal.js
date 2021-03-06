import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const VideoWrapper = styled.div`
cursor: url('${props => props.cursor}'), pointer;
  /* max-width: 1500px; */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  display: table;
`

export const CursorTrap = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
`

export const ModalVideoInner = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`

export const SoundOnSoundOff = styled.div`
  cursor: pointer;
  text-align: center;
  margin-top: 2rem;
  /* z-index: 999; */
`

export const Bar = styled.div`
  position: absolute;
  top: 0px;
  z-index: 1001;
  justify-content: space-between;
  padding: 1.5rem;
  color: #fff;
  display: flex;
  width: 100%;
`

export const BottomBar = styled.div`
  position: absolute;
  z-index: 1001;
  justify-content: space-between;
  padding: 1.5rem;
  color: #fff;
  display: flex;
  width: 100%;
  bottom: 0px;
`

export const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const Control = styled.div`
  cursor: pointer;
  display: flex;
  p {
    @media only screen and (max-width: 868px) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`

export const PrevNext = styled.div`
  cursor: pointer;
`

export const UpperCaseTitle = styled.p`
  text-transform: uppercase;
`

export const VideoBox = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  @media only screen and (max-width: 1280px) {
    width: 100%;
    height: 100%;
  }
`
