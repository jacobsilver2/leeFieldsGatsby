import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useLayoutEffect,
} from "react"
import Portal from "./portal"
import styled from "styled-components"

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 1005;
`

const Container = styled.div`
  position: relative;
  padding: 2rem;
  background-color: ${props => props.theme.color.offWhite};
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  color: black;
  background: none;
  border: none;
`

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (display) {
      document.body.style.overflow = "hidden"
    }
    return () => (document.body.style.overflow = originalStyle)
  }, [display])

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    }
  })

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        handleClose()
      }
    }
    window.addEventListener("keydown", close)
    return () => window.removeEventListener("keydown", close)
  }, [])

  const handleOpen = () => {
    setDisplay(true)
  }

  const handleClose = () => {
    setDisplay(false)
  }

  if (display) {
    return (
      <Portal>
        <Backdrop>
          <Container>
            <CloseButton onClick={handleClose}>
              <p>X</p>
            </CloseButton>
            {props.children}
          </Container>
        </Backdrop>
      </Portal>
    )
  }

  return null
})

export default Modal
