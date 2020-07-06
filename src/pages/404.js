import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div style={{ textAlign: "center" }}>
      <h5>NOT FOUND</h5>
      <p>Sorry, this page doesn't exist!</p>
    </div>
  </>
)

export default NotFoundPage
