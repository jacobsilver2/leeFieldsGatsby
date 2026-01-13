'use client'

import React, { useEffect, useState } from 'react'
import { FadeWrapper } from '../../src/components/FadeWrapper'
import { Info as InfoComponent } from '../../src/components/info'
import { SEO as Seo } from '../../src/components/seo'
import { useGlobalDispatch } from '../../src/hooks'
import { InfoData } from '../../src/types'
import { fetchContactData, fetchAboutData } from '../../src/lib/airtable'

export default function InfoClient() {
  const dispatch = useGlobalDispatch()
  const [data, setData] = useState<InfoData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
  }, [dispatch])

  useEffect(() => {
    const loadInfoData = async () => {
      try {
        const [contactData, aboutData] = await Promise.all([
          fetchContactData(),
          fetchAboutData()
        ])

        const formattedData: InfoData = {
          contact: {
            edges: contactData.map(item => ({
              node: {
                id: item.id,
                data: {
                  Agency: item.agency,
                  Email1: item.email1,
                  Email2: null,
                  Name1: item.name1,
                  Name2: null,
                  Role: item.role,
                  Order: item.order,
                }
              }
            }))
          },
          about: {
            edges: aboutData ? [{
              node: {
                id: aboutData.id,
                data: {
                  Headline: aboutData.headline,
                  P1: aboutData.p1,
                  P2: aboutData.p2,
                  P3: aboutData.p3,
                  P4: aboutData.p4,
                  P5: aboutData.p5,
                  P6: aboutData.p6,
                  AboutPic: {
                    localFiles: [{
                      childImageSharp: {
                        fluid: {
                          src: aboutData.aboutPic,
                          srcSet: aboutData.aboutPicThumb || aboutData.aboutPic,
                        }
                      }
                    }]
                  }
                }
              }
            }] : []
          }
        }
        setData(formattedData)
      } catch (error) {
        console.error('Failed to fetch info data:', error)
      } finally {
        setLoading(false)
      }
    }
    loadInfoData()
  }, [])

  if (loading || !data) {
    return (
      <FadeWrapper>
        <Seo title="Info" />
        <div style={{ padding: '2rem' }}>
          <p>Loading...</p>
        </div>
      </FadeWrapper>
    )
  }

  return (
    <FadeWrapper>
      <Seo title="Info" />
      <InfoComponent data={data} />
    </FadeWrapper>
  )
}
