'use client'

import React, { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useGlobalDispatch, useGlobalState } from '../hooks'
import styles from '../styles/ContentContainer.module.css'
import { Footer } from './footer'
import { Header } from './header'
import { Signup } from './Signup'
import layoutStyles from './layout.module.css'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const dispatch = useGlobalDispatch()
  const state = useGlobalState()
  const pathname = usePathname()

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        dispatch({ type: 'SECONDARY_MENU_OFF' })
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  return (
    <>
      <div className={layoutStyles.wrapper}>
        <Header siteTitle="Lee Fields" />
        <main className={`${styles.container} ${state.tickerIsVisible ? styles.tickerOpen : ''}`}>
          {children}
        </main>
        <div className={`${layoutStyles.stickyFooter} ${state.videoModalOpen ? layoutStyles.videoModalOpen : ''}`}>
          <Signup location={pathname} />
          <Footer />
        </div>
      </div>
    </>
  )
}
