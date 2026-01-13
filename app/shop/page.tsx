import type { Metadata } from 'next'
import { ShopClient } from './ShopClient'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop for music, apparel, and merchandise from Lee Fields & The Expressions',
}

export default function ShopPage() {
  return <ShopClient />
}
