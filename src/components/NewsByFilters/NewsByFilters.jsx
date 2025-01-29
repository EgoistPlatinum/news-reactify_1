import styles from './styles.module.css'
import Pagination from "../Pagination/Pagination.jsx";
import {TOTAL_PAGES} from "../constants/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";

const NewsByFilters = ({filters, changeFilters, isLoading, news}) => {



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

      <Pagination totalPages={TOTAL_PAGES} currentPage={filters.page_number} handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>

      <NewsList isLoading={isLoading} news={news}/>

      <Pagination totalPages={TOTAL_PAGES} currentPage={filters.page_number} handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>
    </section>
  )
}

export default NewsByFilters