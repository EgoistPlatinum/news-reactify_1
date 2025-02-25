import LatestNews from './LatestNews/LatestNews.tsx'
import NewsByFilters from './NewsByFilters/NewsByFilters.tsx'
import styles from './styles.module.css'

const Page = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  )
}

export default Page
