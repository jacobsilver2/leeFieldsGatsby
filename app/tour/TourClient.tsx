'use client'

import { useEffect, useState } from 'react'
import { FadeWrapper } from '../../src/components/FadeWrapper'
import { SEO as Seo } from '../../src/components/seo'
import { Shows } from '../../src/components/shows'
import { useGlobalDispatch, useWindowSize } from '../../src/hooks/'
import { ShowRecord } from '../../src/types'
import styles from './page.module.css'

interface TourClientProps {
  shows: ShowRecord[]
}

export const TourClient = ({ shows }: TourClientProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const size = useWindowSize()
  const dispatch = useGlobalDispatch()

  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
  }, [dispatch])

  useEffect(() => {
    if (size.width >= 828) {
      setIsMobile(true)
    }
  }, [size])

  return (
    <FadeWrapper>
      <Seo title="Tour" />
      <div className={isMobile ? styles.wrapperMobile : styles.wrapper}>
        <Shows shows={shows} />
      </div>
    </FadeWrapper>
  )
}
