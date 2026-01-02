'use client'

import { GlobalContextProvider } from '../src/context'

export function Providers({ children }: { children: React.ReactNode }) {
  return <GlobalContextProvider>{children}</GlobalContextProvider>
}
