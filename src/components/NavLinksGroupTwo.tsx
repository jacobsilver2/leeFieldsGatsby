import React from 'react'
import Link from 'next/link'
import { useGlobalDispatch } from '../hooks'
import styles from '../styles/Nav.module.css'
import navStyles from './NavLinksGroupTwo.module.css'

export const NavLinks = () => {
  const dispatch = useGlobalDispatch()

  const handleClick = () => {
    dispatch({ type: 'CNN_OFF' })
  }

  return (
    <div className={navStyles.wrapper}>
      <Link className={`${styles.gatsbyLink} ${styles.isRight}`} onClick={handleClick} href="/info">
        <p className={styles.navText}>Info</p>
      </Link>
      <Link className={`${styles.gatsbyLink} ${styles.isRight}`} onClick={handleClick} href="/shop">
        <p className={styles.navText}>Shop</p>
      </Link>
    </div>
  )
}
