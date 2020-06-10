import React, { useRef, useEffect, useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import SEO from "../components/seo"
import ListenComponent from "../components/listen"

const ListenPage = props => {
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
      <SEO title="Listen" />
      <ListenComponent />
    </>
  )
}

export default ListenPage
