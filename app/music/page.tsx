import type { Metadata } from 'next'
import MusicClient from './MusicClient'

export const metadata: Metadata = {
  title: 'Music',
  description: 'Discography and albums by Lee Fields & The Expressions',
}

export default function MusicPage() {
  return <MusicClient />
}
