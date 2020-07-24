import React from "react"
import GlobalContextProvider from "./src/context/provider"
import Layout from "./src/components/layout"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./src/styles/GlobalStyle"
// import Fonts from "./src/styles/Fonts"
import { theme } from "./src/styles/theme"
import "./static/fonts/fonts.css"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        {/* <Fonts /> */}
        <GlobalStyle />
        <Layout>{element}</Layout>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}
