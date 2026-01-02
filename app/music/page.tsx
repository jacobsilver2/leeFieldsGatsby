import type { Metadata } from 'next'
import { fetchMusicData } from '../../src/lib/airtable'
import MusicClient from './MusicClient'

export const metadata: Metadata = {
  title: 'Music',
  description: 'Discography and albums by Lee Fields & The Expressions',
}

export const revalidate = 3600

export default async function MusicPage() {
  let musicData: Awaited<ReturnType<typeof fetchMusicData>> = []

  try {
    musicData = await fetchMusicData()
  } catch (error) {
    console.error('Failed to fetch music data:', error)
  }

  const formattedData = {
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

  return <MusicClient data={formattedData} />
}
