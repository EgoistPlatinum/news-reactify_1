import styles from './styles.module.css'
import { useGetLatestNewsQuery } from '../../../../entities/news/api/newsApi.ts'
import BannersList from '../../../../widgets/news/ui/BannersList/BannersList.tsx'

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null)

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
