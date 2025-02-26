import styles from './styles.module.css'
import BannersList from '../../../../widgets/news/ui/BannersList/BannersList.tsx'
import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi.ts'

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null)

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  )
}

export default LatestNews
