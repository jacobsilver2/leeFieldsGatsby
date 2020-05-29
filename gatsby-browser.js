import React from "react"
import GlobalContextProvider from "./src/context/provider"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
