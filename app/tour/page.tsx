import type { Metadata } from 'next'
import { fetchShowsData } from '../../src/lib/airtable'
import { TourClient } from './TourClient'

export const metadata: Metadata = {
  title: 'Tour',
  description: 'Upcoming tour dates and shows for Lee Fields & The Expressions',
}

export const revalidate = 0

export default async function TourPage() {
  let showsData: Awaited<ReturnType<typeof fetchShowsData>> = []

  try {
    showsData = await fetchShowsData()
  } catch (error) {
    console.error('Failed to fetch shows data:', error)
  }

  return <TourClient shows={showsData} />
}
