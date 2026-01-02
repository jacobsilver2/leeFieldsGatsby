import type { Metadata } from 'next'
import { fetchContactData, fetchAboutData } from '../../src/lib/airtable'
import InfoClient from './InfoClient'

export const metadata: Metadata = {
  title: 'Info',
  description: 'About Lee Fields & The Expressions and contact information',
}

export const revalidate = 3600

export default async function InfoPage() {
  let contactData: Awaited<ReturnType<typeof fetchContactData>> = []
  let aboutData: Awaited<ReturnType<typeof fetchAboutData>> = null

  try {
    contactData = await fetchContactData()
    aboutData = await fetchAboutData()
  } catch (error) {
    console.error('Failed to fetch info data:', error)
  }

  const formattedData = {
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

  return <InfoClient data={formattedData} />
}
