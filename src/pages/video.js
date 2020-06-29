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

const Video = ({ data, location }) => {
  const { prevPath } = location.state
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "TICKER_OFF" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { edges } = data.allAirtable
  return (
    <>
      <VideoModal prevPath={prevPath} videos={edges} />
    </>
  )
}

export default Video
