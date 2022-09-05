import { graphql, useStaticQuery } from 'gatsby'
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useLayoutEffect,
  useState,
} from 'react'
import { GlobalDispatchContext } from '../context'
import { useWindowSize } from '../hooks'
import FadeWrapper from './FadeWrapper'
import Portal from './portal'
import VideoModalDesktop from './VideoModalDesktop'
import VideoModalMobile from './VideoModalMobile'

const VideoModal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false)
  const size = useWindowSize()
  const dispatch = useContext(GlobalDispatchContext)

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
    }
  })

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (display) {
      document.body.style.overflow = 'hidden'
    }
    return () => (document.body.style.overflow = originalStyle)
  }, [display])


  const handleOpen = () => {
    setDisplay(true)
  }

  const handleClose = () => {
    setDisplay(false)
    dispatch({ type: 'SECONDARY_MENU_OFF' })
    dispatch({ type: 'CNN_OFF' })
  }

  const {
    allAirtable: { edges: videos },
  } = useStaticQuery(
    graphql`
      query {
        allAirtable(
          filter: { table: { eq: "Videos" } }
          sort: { fields: data___Video_Order }
        ) {
          edges {
            node {
              id
              data {
                Video_Title
                Video_URL
              }
            }
          }
        }
      }
    `,
  )

  if (display) {
    return (
      <Portal>
        <FadeWrapper transition={0.5}>
          {size.width <= 828 ? (
            <VideoModalMobile videos={videos} handleClose={handleClose} />
          ) : (
            <VideoModalDesktop handleClose={handleClose} videos={videos} />
          )}
        </FadeWrapper>
      </Portal>
    )
  }

  return null
})

export default VideoModal
