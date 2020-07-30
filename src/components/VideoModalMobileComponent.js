import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalDispatchContext } from "../context/provider"
import {
  Overlay,
  Content,
  CloseContainer,
} from "../styles/StyledVideoModalMobile"
import VideoList from "./VideoModalMobileVidList"
import useLockBodyScroll from "../hooks/useLockBodyScroll"

const VideoModalMobileComponent = () => {
  useLockBodyScroll()
  const dispatch = useContext(GlobalDispatchContext)

  function handleClose() {
    dispatch({ type: "MODAL_VID_CLOSED" })
  }

  const duration = 1
  const variants = {
    initial: {
      height: 0,
    },
    enter: {
      height: "100%",
      transition: {
        duration: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      height: 0,
      transition: { duration: duration },
    },
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
                Video_Still {
                  localFiles {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Overlay
      key="mobilemodal"
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Content>
        <CloseContainer onClick={handleClose}>
          <p>CLOSE</p>
        </CloseContainer>
        <VideoList videos={videos} />
      </Content>
    </Overlay>
  )
}

export default VideoModalMobileComponent
