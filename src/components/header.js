import React, { useContext, useEffect } from 'react'
import { GlobalDispatchContext, GlobalStateContext } from '../context'
import { useWindowSize } from '../hooks'
import StyledHeader from '../styles/StyledHeader'
import MobileNav from './MobileNav'
import Nav from './Nav'
import NewsTicker from './NewsTicker'
import SecondaryMenu from './SecondaryMenu'

const Header = ({ siteTitle }) => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const size = useWindowSize()

  useEffect(() => {
    size.width > 828 && dispatch({ type: 'SECONDARY_MENU_OFF' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size.width])

  return (
    <>
      <StyledHeader
        tickerIsVisible={state.tickerIsVisible}
        cnnIsVisible={state.cnnInView}
        videoModalOpen={state.videoModalOpen}
      >
        {state.tickerIsVisible && <NewsTicker />}
        <div className="inner">
          {size.width <= 828 && <MobileNav siteTitle={siteTitle} />}
          {size.width > 828 && <Nav siteTitle={siteTitle} />}
        </div>
        {state.secondaryMenuActive && <SecondaryMenu />}
      </StyledHeader>
    </>
  )
}

export default Header
