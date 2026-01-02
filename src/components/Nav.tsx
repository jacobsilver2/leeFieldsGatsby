'use client'

import Link from 'next/link'
import React from 'react'
import { useGlobalState } from '../hooks'
import styles from '../styles/Nav.module.css'
import { NavLinksGroupOne } from './NavLinksGroupOne'
import { NavLinks as NavLinksGroupTwo } from './NavLinksGroupTwo'

interface NavProps {
  siteTitle: string
}

export const Nav = ({ siteTitle }: NavProps) => {
  const state = useGlobalState()

  const logoClasses = [
    styles.logo,
    state.cnnInView ? styles.logoHidden : styles.logoVisible
  ].filter(Boolean).join(' ')

  return (
    <>
      <div>
        <NavLinksGroupOne />
      </div>
      <div>
        <h2 className={logoClasses}>
          <Link href="/">
            {siteTitle.toUpperCase()}
          </Link>
        </h2>
      </div>
      <div>
        <NavLinksGroupTwo />
      </div>
    </>
  )
}
