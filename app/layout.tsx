import localFont from 'next/font/local'
import type { Metadata, Viewport } from 'next'
import { Providers } from './providers'
import { Layout } from '../src/components/layout'
import '../src/styles/variables.css'
import '../src/styles/global.css'

const formaDJRBanner = localFont({
  src: [
    {
      path: '../public/fonts/formaDJRBanner/Medium/FormaDJRBanner-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/formaDJRBanner/Bold/FormaDJRBanner-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ],
  variable: '--font-forma-banner',
})

const formaDJRText = localFont({
  src: [
    {
      path: '../public/fonts/formaDJRText/Light/FormaDJRText-Light-Testing.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/formaDJRText/Regular/FormaDJRText-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: '../public/fonts/formaDJRText/Medium/FormaDJRText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-forma-text',
})

export const metadata: Metadata = {
  title: {
    default: 'Lee Fields & The Expressions',
    template: '%s | Lee Fields & The Expressions',
  },
  description: 'The official website of Lee Fields & The Expressions',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${formaDJRBanner.variable} ${formaDJRText.variable}`}>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <div id="portal"></div>
      </body>
    </html>
  )
}
