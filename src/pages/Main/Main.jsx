import styles from "./styles.module.css"
import {getNews} from "../../api/apiNews.js";
import useDebounce from "../../helpers/hooks/useDebounce.jsx";
import {PAGE_SIZE} from "../../components/constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";
import LatestNews from "../../components/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.jsx";

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


  return (
    <main className={styles.main}>
      <LatestNews banners={data && data.news} isLoading={isLoading}/>

      <NewsByFilters news={data?.news} changeFilters={changeFilters} isLoading={isLoading} filters={filters}/>
    </main>
  )
}

export default Main