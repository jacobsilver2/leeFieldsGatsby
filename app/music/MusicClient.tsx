'use client'

import React, { useEffect, useState } from 'react'
import { FadeWrapper } from '../../src/components/FadeWrapper'
import { Music as MusicComponent } from '../../src/components/Music'
import { SEO as Seo } from '../../src/components/seo'
import { useGlobalDispatch } from '../../src/hooks'
import { FormattedMusicData } from '../../src/types'
import { fetchMusicData } from '../../src/lib/airtable'

export default function MusicClient() {
  const dispatch = useGlobalDispatch()
  const [data, setData] = useState<FormattedMusicData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
  }, [dispatch])

  useEffect(() => {
    const loadMusicData = async () => {
      try {
        const musicData = await fetchMusicData()
        const formattedData: FormattedMusicData = {
          allAirtable: {
            edges: musicData
              .filter(item => item.title)
              .map(item => ({
                node: {
                  id: item.id,
                  data: {
                    Record: item.title,
                    Listen: item.listenLink,
                    Order: item.order,
                    Year: item.year,
                    Buy: item.bandcampLink,
                    Preorder: null,
                    Image: {
                      localFiles: [{
                        childImageSharp: {
                          fluid: {
                            src: item.image,
                            srcSet: item.imageThumb || item.image,
                            aspectRatio: 1,
                          }
                        }
                      }]
                    }
                  }
                }
              }))
          }
        }
        setData(formattedData)
      } catch (error) {
        console.error('Failed to fetch music data:', error)
      } finally {
        setLoading(false)
      }
    }
    loadMusicData()
  }, [])

  if (loading || !data) {
    return (
      <FadeWrapper>
        <Seo title="Music" />
        <div style={{ padding: '2rem' }}>
          <p>Loading...</p>
        </div>
      </FadeWrapper>
    )
  }

  return (
    <FadeWrapper>
      <Seo title="Music" />
      <MusicComponent data={data} />
    </FadeWrapper>
  )
}
