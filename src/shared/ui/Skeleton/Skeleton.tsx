import styles from './styles.module.css'
import { DirectionType, SkeletonType } from '../../interfaces'

interface Props {
  count?: number
  type?: SkeletonType
  direction?: DirectionType
}

const Skeleton = (props: Props) => {
  const { count = 1, type = 'banner', direction = 'column' } = props

  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? styles.columList : styles.rowList}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
              className={type === 'banner' ? styles.banner : styles.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === 'banner' ? styles.banner : styles.item}></li>
      )}
    </>
  )
}

export default Skeleton
