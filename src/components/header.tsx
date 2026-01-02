import { useEffect } from 'react'
import { useGlobalDispatch, useGlobalState, useWindowSize } from '../hooks'
import styles from '../styles/Header.module.css'
import { MobileNav } from './MobileNav'
import { Nav } from './Nav'
import { NewsTicker } from './NewsTicker'
import { SecondaryMenu } from './SecondaryMenu'

interface HeaderProps {
  siteTitle: string
}

export const Header = ({ siteTitle }: HeaderProps) => {
  const state = useGlobalState()
  const dispatch = useGlobalDispatch()
  const size = useWindowSize()

  useEffect(() => {
    size.width > 828 && dispatch({ type: 'SECONDARY_MENU_OFF' })
  }, [size.width, dispatch])

  const headerClasses = [
    styles.header,
    state.videoModalOpen ? styles.videoModalOpen : '',
    state.cnnInView ? styles.cnnIsVisible : '',
    !state.tickerIsVisible ? styles.tickerNotVisible : ''
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={headerClasses}>
        {state.tickerIsVisible && <NewsTicker />}
        <div className={styles.inner}>
          <div className={styles.mobileNavWrapper}>
            <MobileNav siteTitle={siteTitle} />
          </div>
          <div className={styles.desktopNavWrapper}>
            <Nav siteTitle={siteTitle} />
          </div>
        </div>
        {state.secondaryMenuActive && <SecondaryMenu />}
      </header>
    </>
  )
}
