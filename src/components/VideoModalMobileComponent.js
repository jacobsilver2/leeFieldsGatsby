import React, { useContext, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalDispatchContext, GlobalStateContext } from "../context/provider"
import {
  Overlay,
  Content,
  CloseContainer,
} from "../styles/StyledVideoModalMobile"
import VideoList from "./VideoModalMobileVidList"
import useLockBodyScroll from "../hooks/useLockBodyScroll"
import { motion, AnimatePresence, usePresence } from "framer-motion"

const VideoModalMobileComponent = () => {
  const [visible, setvisible] = useState(true)
  useLockBodyScroll()
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const [isPresent, safeToRemove] = usePresence()

  console.log(isPresent)
  console.log(safeToRemove)

  function handleClose() {
    setvisible(false)
    dispatch({ type: "MODAL_VID_CLOSED" })
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
    <AnimatePresence>
      {visible ? (
        <Overlay
          key="modal"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.5 }}
          exit={{ height: 0 }}
        >
          <Content>
            <CloseContainer onClick={handleClose}>
              <p>CLOSE</p>
            </CloseContainer>
            <VideoList videos={videos} />
          </Content>
        </Overlay>
      ) : null}
    </AnimatePresence>
  )
}

export default VideoModalMobileComponent
