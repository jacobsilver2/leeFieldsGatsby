import React, { useState } from 'react'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { useWindowSize } from '../hooks'
import { InfoData } from '../types'
import styles from './info.module.css'

interface InfoProps {
  data: InfoData
}

export const Info = ({ data }: InfoProps) => {
  const [active, setActive] = useState('About')
  const size = useWindowSize()

  return (
    <>
      {size.width >= 828 ? (
        <div className={styles.wrapper}>
          <div className={styles.selection}>
            <p
              onClick={() => setActive('About')}
              className={`${styles.selector} ${active === 'About' ? styles.active : ''}`}
            >
              About
            </p>
            <p
              onClick={() => setActive('Contact')}
              className={`${styles.selector} ${active === 'Contact' ? styles.active : ''}`}
            >
              Contact
            </p>
          </div>
          <div className={styles.content}>
            {active === 'About' && <About data={data.about} />}
            {active === 'Contact' && <Contact data={data.contact} />}
          </div>
        </div>
      ) : (
        <div className={styles.mobileWrapper}>
          <div className={styles.mobileSelection}>
            <p
              onClick={() => setActive('About')}
              className={`${styles.selector} ${active === 'About' ? styles.active : ''}`}
            >
              About
            </p>
            <p
              onClick={() => setActive('Contact')}
              className={`${styles.selector} ${active === 'Contact' ? styles.active : ''}`}
            >
              Contact
            </p>
          </div>
          <div className={styles.mobileContent}>
            {active === 'About' && <About data={data.about} />}
            {active === 'Contact' && <Contact data={data.contact} />}
          </div>
        </div>
      )}
    </>
  )
}
