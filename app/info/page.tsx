import type { Metadata } from 'next'
import InfoClient from './InfoClient'

export const metadata: Metadata = {
  title: 'Info',
  description: 'About Lee Fields & The Expressions and contact information',
}

export default function InfoPage() {
  return <InfoClient />
}
