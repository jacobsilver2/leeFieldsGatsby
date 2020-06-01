import React, { useContext } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ContentContainer from "../styles/ContentContainer"
import SEO from "../components/seo"
import Shows from "../components/shows"
import Merch from "../components/merch"
import Info from "../components/info"
import { GlobalStateContext } from "../context/provider"

const IndexPage = () => {
  const state = useContext(GlobalStateContext)
  return (
    <Layout>
      <ContentContainer>
        <SEO title="Home" />
        {state.navButtonActive === "shows" && <Shows />}
        {state.navButtonActive === "merch" && <Merch />}
        {state.navButtonActive === "info" && <Info />}
      </ContentContainer>
    </Layout>
  )
}

export default IndexPage
