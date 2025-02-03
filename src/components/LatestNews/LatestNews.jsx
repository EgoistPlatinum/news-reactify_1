import styles from './styles.module.css'
import BannersList from "../BannersList/BannersList.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getLatestNews} from "../../api/apiNews.js";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.jsx";
import {TOTAL_PAGES} from "../constants/constants.js";

const LatestNews = () => {

  const {data, isLoading} = useFetch(getLatestNews)

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading}/>
    </section>
  )
}

export default LatestNews