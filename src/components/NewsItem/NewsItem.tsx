import styles from './styles.module.css'
import { formatTimeAgo } from '../../helpers/formatTimeAgo.ts'
import { INews } from '../../interfaces'

interface Props {
  item: INews
}

export default function NewsItem({ item }: Props): JSX.Element {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  )
}
