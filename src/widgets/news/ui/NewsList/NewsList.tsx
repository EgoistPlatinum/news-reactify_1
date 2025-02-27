import styles from './styles.module.css'
import { INews } from '@/entities/news'
import { withSkeleton } from '@/shared/hoks/withSkeleton.tsx'
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard.tsx'
import { ReactNode } from 'react'

interface Props {
  news?: Array<INews>
  type?: 'banner' | 'item'
  direction?: 'row' | 'column'
  viewNewsSlot?: (news: INews) => ReactNode
}

function NewsList({ news, type = 'item', viewNewsSlot }: Props) {
  return (
    <ul className={`${type === 'item' ? styles.items : styles.banners}`}>
      {news?.map(item => (
        <NewsCard
          key={item.id}
          item={item}
          type={type}
          viewNewsSlot={viewNewsSlot}
        />
      ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10)

export default NewsListWithSkeleton
