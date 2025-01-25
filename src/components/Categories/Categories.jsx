import styles from './styles.module.css'

const Categories = ({categories, setSelectedCategory, selectedCategory}) => {

  return (
    <div className={styles.categories}>
      {categories.map(category => (
        <button key={categories}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? styles.active : styles.item}
        >
          {category}
        </button>))}
    </div>
  )
}

export default Categories