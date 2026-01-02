'use client'

import { useState, useEffect } from 'react'
import { useGlobalDispatch } from '../hooks'
import { usePageVisibility } from '../lib/usePageVisibility'
import { fetchNewsData } from '../lib/airtable'
import { NewsRecord } from '../types'
import styles from './NewsTicker.module.css'

export const NewsTicker = () => {
  const pageIsVisible = usePageVisibility()
  const dispatch = useGlobalDispatch()
  const [newsItems, setNewsItems] = useState<NewsRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadNews = async () => {
      try {
        const data = await fetchNewsData()
        setNewsItems(data)
      } catch (error) {
        console.error('Failed to fetch news data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadNews()
  }, [])

  if (isLoading || !newsItems || newsItems.length === 0) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.tickerContainer}>
        <div className={`${styles.tickerTrack} ${pageIsVisible ? '' : styles.paused}`}>
          {Array(10).fill(null).map((_, repeatIndex) => (
            newsItems.map((item) => (
              <p key={`${item.id}-${repeatIndex}`} className={styles.tickerItem}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.headline}
                </a>
              </p>
            ))
          ))}
        </div>
      </div>
      <button className={styles.closeButton} onClick={() => dispatch({ type: 'TICKER_OFF' })}>
        &#x2715;
      </button>
    </div>
  )
}
