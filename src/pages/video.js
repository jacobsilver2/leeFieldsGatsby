import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import { GlobalDispatchContext } from "../context/provider"
import VideoModal from "../components/VideoModal2"

export const query = graphql`
  query VidQuery {
    allAirtable(filter: { table: { eq: "Videos" } }) {
      edges {
        node {
          id
          data {
            Video_Title
            Video_URL
            Video_Order
          }
        }
      }
    }
  }
`

const Video = ({ data, location }) => {
  let prevPath = "/"
  // console.log(location)
  // const prevPath = location.state
  if (typeof window !== `undefined`) {
    console.log("window is not undefined!")
    if (location.state) {
      prevPath = location.state.prevPath
    }
  }
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "TICKER_OFF" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { edges } = data.allAirtable
  const videosInOrder = edges.sort(
    (a, b) => a.node.data.Video_Order - b.node.data.Video_Order
  )
  return (
    <>
      <VideoModal prevPath={prevPath} videos={videosInOrder} />
    </>
  )
}

export default Video
