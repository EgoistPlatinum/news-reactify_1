import styles from './styles.module.css'
import { INews } from '@/entities/news'
import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo.ts'
import Image from '@/shared/ui/Image/Image.tsx'

interface Props {
  item: INews
  type: 'banner' | 'item'
}

export default function NewsCard({ item, type = 'item' }: Props) {
  return (
    <li className={`${styles.card} ${type === 'banner' && styles.banner}`}>
      {type === 'banner' ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      )}

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  )
}
