import React, { useEffect, useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import Shows from "../components/shows"
import SEO from "../components/seo"

const TourPage = props => {
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    // if (firstUpdate.current) {
    //   firstUpdate.current = false
    //   return
    // }
    dispatch({ type: "CNN_OFF" })
  }, [])
  return (
    <>
      <SEO title="Tour" />
      <Shows />
    </>
  )
}

export default TourPage
