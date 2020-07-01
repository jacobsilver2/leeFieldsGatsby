import React, { useContext } from "react"
import { Link } from "gatsby"
import useWindowSize from "../hooks/useWindowSize"
import StyledHeader from "../styles/StyledHeader"

import { GlobalStateContext } from "../context/provider"
import NewsTicker from "./NewsTicker"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  const size = useWindowSize()
  return (
    <StyledHeader
      tickerIsVisible={state.tickerIsVisible}
      cnnIsVisible={state.cnnInView}
    >
      {state.tickerIsVisible && <NewsTicker />}
      <div className="inner">
        {size.width <= 828 && <MobileNav siteTitle={siteTitle} />}
        {size.width > 828 && <Nav siteTitle={siteTitle} />}
      </div>
    </StyledHeader>
  )
}

export default Header
