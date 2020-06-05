import React from "react"
import GlobalContextProvider from "./src/context/provider"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <Layout>{element}</Layout>
    </GlobalContextProvider>
  )
}
