import styles from './styles.module.css'
import {forwardRef} from "react";

const Categories = forwardRef(
  (props, ref) => {

    const {categories, setSelectedCategory, selectedCategory} = props

    return (
      <div ref={ref} className={styles.categories}>

        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>

        {categories.map(category => {
          return (
            <button key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? styles.active : styles.item}
            >
              {category}
            </button>)
        })}
      </div>
    )
  }
)

Categories.displayName = 'Categories'

export default Categories