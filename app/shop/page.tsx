import type { Metadata } from 'next'
import { fetchShopData } from '../../src/lib/airtable'
import { ShopClient } from './ShopClient'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop for music, apparel, and merchandise from Lee Fields & The Expressions',
}

export const revalidate = 3600

export default async function ShopPage() {
  let shopData: Awaited<ReturnType<typeof fetchShopData>> = []

  try {
    shopData = await fetchShopData()
  } catch (error) {
    console.error('Failed to fetch shop data:', error)
  }

  return <ShopClient items={shopData} />
}
