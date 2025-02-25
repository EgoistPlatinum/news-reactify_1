import styles from './styles.module.css'
import { withSkeleton } from '../../../../shared/hoks/withSkeleton.tsx'
import NewsBanner from '../../../../entities/news/ui/NewsBanner/NewsBanner.tsx'
import { INews } from '../../../../entities/news'

interface Props {
  banners?: Array<INews> | null
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map(banner => <NewsBanner key={banner.id} item={banner} />)}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row')

export default BannersListWithSkeleton
