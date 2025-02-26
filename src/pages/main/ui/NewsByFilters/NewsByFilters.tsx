import styles from './styles.module.css'
import useDebounce from '../../../../shared/hooks/useDebounce.tsx'
import { useAppSelector } from '@/app/appStore.ts'
import { useGetNewsQuery } from '@/entities/news/api/newsApi.ts'
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi.ts'
import { NewsFilters } from '@/widgets/news'
import NewsListWithPagination from '@/pages/main/ui/NewsListWithPagination/NewsListWithPagination.tsx'

const NewsByFilters = () => {
  const filters = useAppSelector(state => state.news.filters)

  const news = useAppSelector(state => state.news.news)

  const debounceKeywords = useDebounce(filters.keywords, 1500)

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords,
  })

  const { data } = useGetCategoriesQuery(null)

  return (
    <section className={styles.section}>
      <NewsFilters categories={data?.categories || []} filters={filters} />

      <NewsListWithPagination filters={filters} news={news} isLoading={isLoading} />
    </section>
  )
}

export default NewsByFilters
