import styles from './styles.module.css'
import { ForwardedRef, forwardRef } from 'react'
import { CategoriesType } from '../../interfaces'

interface Props {
  categories: Array<CategoriesType>
  setSelectedCategory: (category: CategoriesType | null) => void
  selectedCategory: CategoriesType | null
}

const Categories = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  const { categories, setSelectedCategory, selectedCategory } = props

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
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? styles.active : styles.item}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
})

Categories.displayName = 'Categories'

export default Categories
