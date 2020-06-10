import React, { useEffect, useContext } from "react"
import { GlobalDispatchContext } from "../context/provider"
import SEO from "../components/seo"

const WatchPage = () => {
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
      <SEO title="Watch" />
      <div>
        <h1>Hello from the watch page</h1>
        <p>I'm not sure if we need a watch page.</p>
      </div>
    </>
  )
}

export default WatchPage
