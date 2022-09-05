import React, { useContext, useEffect } from 'react'
import FadeWrapper from '../components/FadeWrapper'
import Seo from '../components/seo'
import ShowsComponent from '../components/shows'
import { GlobalDispatchContext } from '../context'

const Shows = (props) => {
  const dispatch = useContext(GlobalDispatchContext)

  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FadeWrapper>
      <Seo title="Shows" />
      <ShowsComponent />
    </FadeWrapper>
  )
}

export default Shows
