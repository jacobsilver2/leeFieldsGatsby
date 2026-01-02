'use client'

import React, { useEffect } from 'react'
import { FadeWrapper } from '../../src/components/FadeWrapper'
import { Info as InfoComponent } from '../../src/components/info'
import { SEO as Seo } from '../../src/components/seo'
import { useGlobalDispatch } from '../../src/hooks'
import { InfoData } from '../../src/types'

interface InfoClientProps {
  data: InfoData
}

export default function InfoClient({ data }: InfoClientProps) {
  const dispatch = useGlobalDispatch()

  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
  }, [dispatch])

  return (
    <FadeWrapper>
      <Seo title="Info" />
      <InfoComponent data={data} />
    </FadeWrapper>
  )
}
