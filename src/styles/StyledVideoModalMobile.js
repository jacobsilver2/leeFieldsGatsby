import styled from "styled-components"
import { motion } from "framer-motion"

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1001;
  display: block;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
  background-color: black;
`

export const Content = styled(motion.div)`
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
  top: 2rem;
  right: 2rem;
  color: white;
  p {
    font-size: 2.5rem;
  }
`
