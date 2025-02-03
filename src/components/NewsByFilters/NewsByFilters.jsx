import styles from './styles.module.css'
import Pagination from "../Pagination/Pagination.jsx";
import {PAGE_SIZE, TOTAL_PAGES} from "../constants/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";
import {useFilters} from "../../helpers/hooks/useFilters.js";
import useDebounce from "../../helpers/hooks/useDebounce.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getNews} from "../../api/apiNews.js";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.jsx";

const NewsByFilters = () => {

  const {filters, changeFilters} = useFilters({
    page_size: PAGE_SIZE,
    page_number: 1,
    category: null,
    keywords: ''
  })

  const debounceKeywords = useDebounce(filters.keywords, 1500)

  const {data, isLoading} = useFetch(getNews, {
    ...filters,
    keywords: debounceKeywords
  })

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilters("page_number", filters.page_number + 1)
    }
  }

  const handlePreviousPage = () => {
    if (filters.page_number > TOTAL_PAGES) {
      changeFilters("page_number", filters.page_number - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    changeFilters("page_number", pageNumber)
  }


  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters}/>

      <PaginationWrapper top bottom totalPages={TOTAL_PAGES} currentPage={filters.page_number} handleNextPage={handleNextPage}
                         handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}>

        <NewsList isLoading={isLoading} news={data?.news}/>

      </PaginationWrapper>
    </section>
  )
}

export default NewsByFilters