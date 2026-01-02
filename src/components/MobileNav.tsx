'use client'

import Link from 'next/link'
import { useGlobalDispatch, useGlobalState } from '../hooks'
import styles from '../styles/Nav.module.css'
import mobileStyles from './MobileNav.module.css'
import { HamburgerMenu as Burger } from './Burger'

interface MobileNavProps {
  siteTitle: string
}

export const MobileNav = ({ siteTitle }: MobileNavProps) => {
  const state = useGlobalState()
  const dispatch = useGlobalDispatch()

  const handleBurgerClicked = () => {
    dispatch({ type: 'TOGGLE_SECONDARY_MENU' })
  }

  const isLogoVisible = !state.cnnInView || state.mobileLogoOverride || state.secondaryMenuActive

  const logoClasses = [
    styles.logo,
    isLogoVisible ? styles.logoVisible : styles.logoHidden
  ].filter(Boolean).join(' ')

  return (
    <div className={mobileStyles.logoAndBurgerWrapper}>
      <h2 className={logoClasses} suppressHydrationWarning>
        <Link onClick={() => dispatch({ type: 'SECONDARY_MENU_OFF' })} href="/">
          {siteTitle.toUpperCase()}
        </Link>
      </h2>
      <Burger
        isOpen={state.secondaryMenuActive}
        menuClicked={() => handleBurgerClicked()}
        height={10}
        width={25}
      />
    </div>
  )
}
