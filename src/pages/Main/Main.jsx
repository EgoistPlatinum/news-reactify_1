import styles from "./styles.module.css"
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import useDebounce from "../../helpers/hooks/useDebounce.jsx";
import {PAGE_SIZE, TOTAL_PAGES} from "../../components/constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";

const Main = () => {

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

  const {data: dataCategories} = useFetch(getCategories)

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
    <main className={styles.main}>
      {dataCategories ? <Categories categories={dataCategories.categories} selectedCategory={filters.category}
                                    setSelectedCategory={(category) => changeFilters("category", category)}/> : null}


      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilters("keywords", keywords)}/>

      <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]}/>

      <Pagination totalPages={TOTAL_PAGES} currentPage={filters.page_number} handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>

      <NewsList isLoading={isLoading} news={data?.news}/>

      <Pagination totalPages={TOTAL_PAGES} currentPage={filters.page_number} handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>
    </main>
  )
}

export default Main