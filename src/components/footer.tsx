import { BigFooter } from '../components/BigFooter'
import { MobileFooter } from '../components/MobileFooter'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <>
      <div className={styles.mobileFooterWrapper}>
        <MobileFooter />
      </div>
      <div className={styles.desktopFooterWrapper}>
        <BigFooter />
      </div>
    </>
  )
}
