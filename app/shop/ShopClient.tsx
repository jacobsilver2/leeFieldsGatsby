'use client'

import { useEffect, useState } from 'react'
import { FadeWrapper } from '../../src/components/FadeWrapper'
import { SEO as Seo } from '../../src/components/seo'
import { ShopComponent } from '../../src/components/Shop'
import { useGlobalDispatch } from '../../src/hooks'
import { ShopRecord } from '../../src/types'
import { fetchShopData } from '../../src/lib/airtable'
import styles from './page.module.css'

type Category = 'all' | 'music' | 'apparel' | 'posters' | 'etc'

export const ShopClient = () => {
  const [category, setCategory] = useState<Category>('all')
  const [items, setItems] = useState<ShopRecord[]>([])
  const [loading, setLoading] = useState(true)
  const dispatch = useGlobalDispatch()

  useEffect(() => {
    dispatch({ type: 'CNN_OFF' })
    dispatch({ type: 'TICKER_OFF' })
  }, [dispatch])

  useEffect(() => {
    const loadShopData = async () => {
      try {
        const data = await fetchShopData()
        setItems(data)
      } catch (error) {
        console.error('Failed to fetch shop data:', error)
      } finally {
        setLoading(false)
      }
    }
    loadShopData()
  }, [])

  let filteredItems: ShopRecord[]
  switch (category) {
    case 'all':
      filteredItems = items
      break
    case 'music':
      filteredItems = items.filter((item) => item.category === 'Music')
      break
    case 'apparel':
      filteredItems = items.filter((item) => item.category === 'Apparel')
      break
    case 'posters':
      filteredItems = items.filter((item) => item.category === 'Poster')
      break
    case 'etc':
      filteredItems = items.filter((item) => item.category === 'Etc.')
      break
    default:
      filteredItems = items
      break
  }

  if (loading) {
    return (
      <FadeWrapper>
        <Seo title="Shop" />
        <div className={styles.shopContainer}>
          <p>Loading...</p>
        </div>
      </FadeWrapper>
    )
  }

  return (
    <FadeWrapper>
      <Seo title="Shop" />
      <div className={styles.shopContainer}>
        <ul className={styles.ulWrapper}>
          <li
            className={`${styles.liElement} ${category === 'all' ? styles.liActive : styles.liInactive}`}
            onClick={() => setCategory('all')}
          >
            <h5>Shop All</h5>
          </li>
          <li
            className={`${styles.liElement} ${category === 'music' ? styles.liActive : styles.liInactive}`}
            onClick={() => setCategory('music')}
          >
            <h5>Music</h5>
          </li>
          <li
            className={`${styles.liElement} ${category === 'apparel' ? styles.liActive : styles.liInactive}`}
            onClick={() => setCategory('apparel')}
          >
            <h5>Apparel</h5>
          </li>
          <li
            className={`${styles.liElement} ${category === 'posters' ? styles.liActive : styles.liInactive}`}
            onClick={() => setCategory('posters')}
          >
            <h5>Posters</h5>
          </li>
          <li
            className={`${styles.liElement} ${category === 'etc' ? styles.liActive : styles.liInactive}`}
            onClick={() => setCategory('etc')}
          >
            <h5>Etc.</h5>
          </li>
        </ul>
        <ShopComponent items={filteredItems} />
      </div>
    </FadeWrapper>
  )
}
