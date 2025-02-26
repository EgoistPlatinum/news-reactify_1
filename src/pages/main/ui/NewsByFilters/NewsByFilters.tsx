import styles from './styles.module.css'
import NewsList from '../../../../widgets/news/ui/NewsList/NewsList.tsx'
import useDebounce from '../../../../shared/hooks/useDebounce.tsx'
import Pagination from '../../../../features/pagination/ui/Pagination/Pagination.tsx'
import NewsFilters from '../NewsFilters/NewsFilters.tsx'
import { useAppDispatch, useAppSelector } from '@/app/appStore.ts'
import { useGetNewsQuery } from '@/entities/news/api/newsApi.ts'
import { TOTAL_PAGES } from '@/shared/constants/constants.ts'
import { setFilters } from '@/entities/news/model/newsSlice.ts'

const NewsByFilters = () => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector(state => state.news.filters)

  const news = useAppSelector(state => state.news.news)

  const debounceKeywords = useDebounce(filters.keywords, 1500)

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debounceKeywords,
  })

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }))
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > TOTAL_PAGES) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }))
    }
  }

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }))
  }

  return (
    <section className={styles.section}>
      {/*@ts-ignore*/}
      <NewsFilters filters={filters} />

      <Pagination
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  )
}

export default NewsByFilters
