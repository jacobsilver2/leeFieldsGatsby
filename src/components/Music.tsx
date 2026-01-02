import { useMemo } from 'react'
import { OptimizedImage as Img } from './image'
import Link from 'next/link'
import { FormattedMusicData } from '../types'
import styles from './Music.module.css'

interface MusicProps {
  data: FormattedMusicData
}

export const Music = ({ data }: MusicProps) => {
  const albums = useMemo(() => {
    if (!data?.allAirtable?.edges || data.allAirtable.edges.length === 0) {
      return null
    }

    return data.allAirtable.edges
      .sort((a, b) => a.node.data.Order - b.node.data.Order)
      .map((album) => {
      const { data, id } = album.node
      return (
        <div key={id} className={styles.card}>
          <div className={styles.content}>
            <div className={styles.image}>
              <Img image={data.Image.localFiles[0]} />
            </div>
            <div className={styles.text}>
              <div className={styles.title}>
                <h3>{data.Record?.toUpperCase() || 'Unknown Album'}</h3>
                <h3>({data.Year || 'N/A'})</h3>
              </div>
              <div className={styles.links}>
                <Link href="/shop" className={styles.buyLink}>
                  <h5>Buy</h5>
                </Link>
                <h5 className={styles.listenLink}>
                  <a href={data.Listen} target="_blank" rel="noreferrer">
                    Listen
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }, [data])

  if (!data?.allAirtable?.edges || data.allAirtable.edges.length === 0) {
    return (
      <div className={styles.wrapper}>
        <div style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h3>No music data available</h3>
          <p>Configure your Airtable API key to load music albums.</p>
        </div>
      </div>
    )
  }

  return <div className={styles.wrapper}>{albums}</div>
}
