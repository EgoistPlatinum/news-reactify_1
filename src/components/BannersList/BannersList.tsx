import styles from './styles.module.css'
import {withSkeleton} from "../../helpers/hoks/withSkeleton.tsx";
import NewsBanner from "../NewsBanner/NewsBanner.tsx";

const BannersList = ({banners}) => {

  return (
    <ul className={styles.banners}>
      {banners?.map(banner => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, "row")

export default BannersListWithSkeleton