import React, { useContext, useEffect } from "react"
import { graphql } from "gatsby"
import { GlobalDispatchContext } from "../context/provider"
import VideoModal from "../components/VideoModal"

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

const Video = ({ data }) => {
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF", type: "TICKER_OFF" })
  }, [])
  const { edges } = data.allAirtable
  return (
    <>
      <VideoModal videos={edges} />
    </>
  )
}

export default Video
