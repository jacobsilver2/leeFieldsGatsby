import React, { useRef, useEffect, useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import SEO from "../components/seo"
import MerchComponent from "../components/merch"

const Merch = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const firstUpdate = useRef(true)
  useEffect(() => {
    // if (firstUpdate.current) {
    //   firstUpdate.current = false
    //   return
    // }
    dispatch({ type: "CNN_OFF" })
  }, [])
  return (
    <>
      <SEO title="Merch" />
      <MerchComponent />
    </>
  )
}

export default Merch
