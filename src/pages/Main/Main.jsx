import styles from "./styles.module.css"
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const Main = () => {

  const [news, setNews] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = 10
  const pageSize = 10

  const fetchNews = async (currentPage) => {
    try {
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > totalPages) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? <NewsBanner item={news[1]}/> : <Skeleton count={1} type="banner"/>}

      <Pagination totalPages={totalPages} currentPage={currentPage} handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>

      {news.length > 0 && !isLoading ? <NewsList news={news}/> : <Skeleton count={10} type="item"/>}

      <Pagination totalPages={totalPages} currentPage={currentPage} handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>
    </main>
  )
}

export default Main