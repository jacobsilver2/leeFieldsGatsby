import React, { useContext, useEffect } from "react"
import { GlobalDispatchContext } from "../context/provider"
import SEO from "../components/seo"
import ShowsComponent from "../components/shows"

const Shows = props => {
  const dispatch = useContext(GlobalDispatchContext)
  // const firstUpdate = useRef(true)
  useEffect(() => {
    dispatch({ type: "CNN_OFF", type: "TICKER_OFF" })
  }, [])
  return (
    <>
      <SEO title="Shows" />
      <ShowsComponent />
    </>
  )
}

export default Shows
