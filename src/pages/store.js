import React, { useEffect, useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import SEO from "../components/seo"
import Merch from "../components/merch"

const StorePage = props => {
  const dispatch = useContext(GlobalDispatchContext)
  // const firstUpdate = useRef(true)
  useEffect(() => {
    // if (firstUpdate.current) {
    //   firstUpdate.current = false
    //   return
    // }
    dispatch({ type: "CNN_OFF" })
  }, [])
  return (
    <>
      <SEO title="Store" />
      <Merch />
    </>
  )
}

export default StorePage
