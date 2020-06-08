import React from "react"
import GlobalContextProvider from "./src/context/provider"
import Layout from "./src/components/layout"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./src/styles/GlobalStyle"
import { theme } from "./src/styles/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>{element}</Layout>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}
