import styles from './styles.module.css'

const Skeleton = (props) => {

  const {count = 1, type = "banner", direction="colum"} = props

  return (<>
    {count > 1 ? (<ul className={direction === "colum" ? styles.columList : styles.rowList}>
      {[...Array(count)].map((_, index) => (
        <li key={index} className={type === "banner" ? styles.banner : styles.item}></li>))}
    </ul>) : (<li className={type === "banner" ? styles.banner : styles.item}></li>)}
  </>)
}

export default Skeleton