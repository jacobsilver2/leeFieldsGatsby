import styles from "../styles/MobileMenu.module.css"
import { NavLinksFull as NavLinks } from "./NavLinksFull"

export const SecondaryMenu = () => {
  return (
    <nav className={styles.secondaryMenu}>
      <div className={styles.content}>
        <NavLinks />
      </div>
    </nav>
  )
}
