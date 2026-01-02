import { ClipLoader } from "./ClipLoader"
import styles from "./Loading.module.css"

export const Loading = () => {
  return (
    <div className={styles.loader}>
      <ClipLoader color="black" size="30px" />
    </div>
  )
}
