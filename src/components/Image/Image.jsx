import {formatDate} from "../../helpers/formatDate.js";
import styles from './styles.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";

const Image = ({image}) => {

  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  )
}

export default Image