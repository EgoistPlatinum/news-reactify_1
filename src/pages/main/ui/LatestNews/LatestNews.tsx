import styles from './styles.module.css'
import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi.ts'
import { NewsList } from '@/widgets/news'
import { INews } from '@/entities/news'
import { useDispatch } from 'react-redux'
import { setCurrentNews } from '@/entities/news/model/newsSlice.ts'
import { useNavigate } from 'react-router-dom'

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const navigateTo = (news: INews) => {
    dispatch(setCurrentNews(news))
    navigate(`/news/${news.id}`)
  }

  return (
    <section className={styles.section}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
        viewNewsSlot={(news: INews) => (
          <p onClick={() => navigateTo(news)}>view more...</p>
        )}
      />
    </section>
  )
}

export default LatestNews
