import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext, useEffect, useRef } from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import { GlobalDispatchContext, GlobalStateContext } from '../context'
import ContentContainer from '../styles/ContentContainer'
import Footer from './footer'
import Header from './header'
import Popup from './popup'
import PopupContent from './PopupContent'
import Signup from './Signup'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const StickyFooter = styled.div`
  display: ${({ videoModalOpen }) => (videoModalOpen ? 'none' : '')};
  flex-shrink: 0;
`

const Layout = ({ children, location, ...props }) => {
  const modalRef = useRef()
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site: site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    modalRef.current?.openModal()
  }, [])

  return (
    <>
      <Wrapper>
        <Popup ref={modalRef}>
          <PopupContent />
        </Popup>
        <Headroom
          style={{ zIndex: '1000' }}
          onUnpin={() => dispatch({ type: 'SECONDARY_MENU_OFF' })}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
        </Headroom>
        <ContentContainer tickerOpen={state.tickerIsVisible}>
          {children}
        </ContentContainer>
        <StickyFooter videoModalOpen={state.videoModalOpen}>
          <Signup location={location} />
          <Footer />
        </StickyFooter>
      </Wrapper>
    </>
  )
}

export default Layout
