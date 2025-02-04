import styles from "./styles.module.css"
import NewsItem from "../NewsItem/NewsItem.tsx";
import {withSkeleton} from "../../helpers/hoks/withSkeleton.tsx";

function NewsList({news}) {
  return (
    <ul className={styles.list}>
      {news.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton(NewsList, 'item ', 10)

export default NewsListWithSkeleton