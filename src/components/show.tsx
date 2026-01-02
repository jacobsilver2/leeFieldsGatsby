import { ShowRecord } from "../types"
import styles from './show.module.css'

interface ShowProps {
  show: ShowRecord
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const Show = ({ show }: ShowProps) => {
  const showDate = (() => {
    const [year, month, day] = show.date.split('-')
    return `${monthNames[parseInt(month, 10) - 1]} ${parseInt(day, 10)}`
  })()

  return (
    <div className={styles.styledShow}>
      <div>
        <h5>{showDate}</h5>
      </div>
      <div>
        <h5>{show.venue}</h5>
      </div>
      <div className={styles.locationLink}>
        <h5>{show.location}</h5>
      </div>
      <div className={styles.buyLink}>
        <h5>
          <a href={show.ticketLink} target="_blank" rel="noreferrer">
            Tickets
          </a>
        </h5>
      </div>
    </div>
  )
}
