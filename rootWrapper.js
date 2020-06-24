import React from "react"
import GlobalContextProvider from "./src/context/provider"
import Layout from "./src/components/layout"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./src/styles/GlobalStyle"
import { theme } from "./src/styles/theme"
import { Helmet } from "react-helmet"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <Helmet>
        <link
          href="//cloud.typenetwork.com/projects/3970/fontface.css/"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>{element}</Layout>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}
