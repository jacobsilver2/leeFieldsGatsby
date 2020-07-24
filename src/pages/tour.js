import React, { useEffect, useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import Shows from "../components/shows"
import SEO from "../components/seo"
import FadeWrapper from "../components/FadeWrapper"

const TourPage = props => {
  const dispatch = useContext(GlobalDispatchContext)
  useEffect(() => {
    dispatch({ type: "CNN_OFF" })
    dispatch({ type: "TICKER_OFF" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <FadeWrapper>
      <SEO title="Tour" />
      <Shows />
    </FadeWrapper>
  )
}

export default TourPage
