import React, { useContext, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"
import StyledHeader from "../styles/StyledHeader"

import { GlobalStateContext, GlobalDispatchContext } from "../context/provider"
import NewsTicker from "./NewsTicker"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import SecondaryMenu from "./SecondaryMenu"
import Headroom from "react-headroom"

const Header = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const size = useWindowSize()
  // const [visible, setVisible] = useState(true)

  // We don't want the secondary menu to ever be open if above 828. This will prevent that.
  useEffect(() => {
    size.width > 828 && dispatch({ type: "SECONDARY_MENU_OFF" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.width])

  return (
    <>
      {/* <Headroom onUnpin={() => dispatch({ type: "SECONDARY_MENU_OFF" })}> */}
      <StyledHeader
        tickerIsVisible={state.tickerIsVisible}
        cnnIsVisible={state.cnnInView}
      >
        {state.tickerIsVisible && <NewsTicker />}
        <div className="inner">
          {size.width <= 828 && <MobileNav siteTitle={siteTitle} />}
          {size.width > 828 && <Nav siteTitle={siteTitle} />}
        </div>
        {state.secondaryMenuActive && <SecondaryMenu />}
      </StyledHeader>
      {/* </Headroom> */}
    </>
  )
}

export default Header
