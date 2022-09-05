import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import FadeWrapper from '../components/FadeWrapper'
import Seo from '../components/seo'
import Shows from '../components/shows'
import { GlobalDispatchContext } from '../context'
import { useWindowSize } from '../hooks/'

// adding a wrapper to add a little extra top space
// without affecting the homepage, which uses the same tour component

const Wrapper = styled.div`
  margin-top: ${({ isMobile }) => (isMobile ? '2rem' : '0')};
`

const TourPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const size = useWindowSize()
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (size.width >= 828) {
      setIsMobile(true)
    }
  }, [size])

  return (
    <FadeWrapper>
      <Seo title="Tour" />
      <Wrapper isMobile={isMobile ? 'true' : 'false'}>
        <Shows />
      </Wrapper>
    </FadeWrapper>
  )
}

export default TourPage
