'use client'

import React, { useEffect } from 'react'
import { FadeWrapper } from '../../src/components/FadeWrapper'
import { Music as MusicComponent } from '../../src/components/Music'
import { SEO as Seo } from '../../src/components/seo'
import { useGlobalDispatch } from '../../src/hooks'
import { FormattedMusicData } from '../../src/types'

interface MusicClientProps {
  data: FormattedMusicData
}

export default function MusicClient({ data }: MusicClientProps) {
  const dispatch = useGlobalDispatch()

  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
  }, [dispatch])

  return (
    <FadeWrapper>
      <Seo title="Music" />
      <MusicComponent data={data} />
    </FadeWrapper>
  )
}
