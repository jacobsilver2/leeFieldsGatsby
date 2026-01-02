import { ShowRecord } from "../types"
import { Show } from "./show"
import styles from './showsList.module.css'

interface ShowsListProps {
  shows: ShowRecord[]
}

export const ShowsList = ({ shows }: ShowsListProps) => {
  return (
    <div className={styles.showsListContainer}>
      {shows.length !== 0 ? (
        shows.map(show => <Show key={show.id} show={show} />)
      ) : (
        <div className={styles.noShows}>
          <h5>There are no upcoming shows</h5>
        </div>
      )}
    </div>
  )
}
