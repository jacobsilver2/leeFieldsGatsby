import styled from "styled-components"
import { motion } from "framer-motion"

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  z-index: 1001;
  /* pointer-events: none; */
  /* z-index: 1000000; */
  background-color: black;
  overflow: hidden;
`

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* padding: 5rem; */
`

export const CloseContainer = styled.div`
  z-index: 1001;
  position: fixed;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  color: white;
  p {
    font-size: 2.5rem;
  }
`

export const BottomBar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  color: #fff;
  background: black;
  width: 100%;
  bottom: 0px;
  p {
    font-size: 2.5rem;
  }
`

export const MouseTrap = styled.div`
  z-index: 1002;
  position: absolute;
  top: 3.5rem;
  bottom: 3.5rem;
  left: 0;
  right: 0;
`
export const MouseTrapInner = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  opacity: 80%;
`

export const PrevCursor = styled.div`
  cursor: url("${props => props.cursor}"), pointer;
`

export const NextCursor = styled.div`
  cursor: url("${props => props.cursor}"), pointer;
`
export const SoundBox = styled.div`
  cursor: pointer;
`
