import styles from "./styles.module.css"
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import useDebounce from "../../helpers/hooks/useDebounce.jsx";

const Main = () => {

  const [news, setNews] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const [keywords, setKeyword] = useState('')

  const totalPages = 10
  const pageSize = 10


  const debounceKeywords = useDebounce(keywords, 1500)

  const fetchNews = async (currentPage) => {
    try {
      const response = await getNews({
        page_size: pageSize,
        page_number: currentPage,
        category: selectedCategory === "All" ? null : selectedCategory,
        keywords: debounceKeywords
      });
      setNews(response.news);
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage, selectedCategory, debounceKeywords]);

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

      <Categories categories={categories} selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}/>

      <Search keywords={keywords} setKeywords={setKeyword}/>

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