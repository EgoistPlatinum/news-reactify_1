import styles from './styles.module.css'
import NewsItem from '../../../../entities/news/ui/NewsItem/NewsItem.tsx'
import { withSkeleton } from '../../../../shared/hoks/withSkeleton.tsx'
import { INews } from '../../../../entities/news'

interface Props {
  news?: Array<INews>
}

function NewsList({ news }: Props) {
  return (
    <ul className={styles.list}>
      {news?.map(item => <NewsItem key={item.id} item={item} />)}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)

export default NewsListWithSkeleton
