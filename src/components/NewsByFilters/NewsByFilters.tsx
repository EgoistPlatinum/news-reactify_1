import styles from './styles.module.css'
import {PAGE_SIZE, TOTAL_PAGES} from "../constants/constants.ts";
import NewsList from "../NewsList/NewsList.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import {useFilters} from "../../helpers/hooks/useFilters.ts";
import useDebounce from "../../helpers/hooks/useDebounce.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getNews} from "../../api/apiNews.ts";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import {NewsApiResponse, ParamsType} from "../../interfaces";

const NewsByFilters = () => {

    const {filters, changeFilters} = useFilters({
        page_size: PAGE_SIZE,
        page_number: 1,
        category: null,
        keywords: ''
    })

    const debounceKeywords = useDebounce(filters.keywords, 1500)

    const {data, isLoading} = useFetch<NewsApiResponse, ParamsType>(getNews, {
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

    const handlePageClick = (pageNumber: number) => {
        changeFilters("page_number", pageNumber)
    }


    return (
        <section className={styles.section}>
            {/*@ts-ignore*/}
            <NewsFilters filters={filters} changeFilters={changeFilters}/>

            <PaginationWrapper top bottom totalPages={TOTAL_PAGES} currentPage={filters.page_number}
                               handleNextPage={handleNextPage}
                               handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}>

                <NewsList isLoading={isLoading} news={data?.news}/>

            </PaginationWrapper>
        </section>
    )
}

export default NewsByFilters