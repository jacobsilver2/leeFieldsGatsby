import { ShowRecord } from '../types'
import styles from '../styles/ShowsComponent.module.css'
import { ShowsList } from './showsList'

interface ShowsProps {
  shows?: ShowRecord[]
}

export const Shows = ({ shows = [] }: ShowsProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>UPCOMING SHOWS</h2>
      <ShowsList shows={shows} />
    </div>
  )
}
