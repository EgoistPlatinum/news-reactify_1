import NewsList from '../../../../widgets/news/ui/NewsList/NewsList.tsx'
import Pagination from '../../../../features/pagination/ui/Pagination/Pagination.tsx'
import { TOTAL_PAGES } from '@/shared/constants/constants.ts'
import { IFilters } from '@/shared/interfaces'
import { INews } from '@/entities/news'
import usePaginationNews from '@/pages/main/utils/hooks/usePaginationNews.tsx'

interface Props {
  filters: IFilters
  news: Array<INews>
  isLoading: boolean
}

const NewsListWithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePreviousPage, handlePageClick } =
    usePaginationNews(filters)

  return (
    <Pagination
      top
      bottom
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
      handlePageClick={handlePageClick}
    >
      <NewsList type="item" direction="column" isLoading={isLoading} news={news} />
    </Pagination>
  )
}

export default NewsListWithPagination
