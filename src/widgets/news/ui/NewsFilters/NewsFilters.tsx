import styles from './styles.module.css'
import Slider from '../../../../features/slider/ui/Slider/Slider.tsx'
import Categories from '../../../../features/category/ui/Categories/Categories.tsx'
import Search from '../../../../features/search/ui/Search/Search.tsx'
import { IFilters } from '@/shared/interfaces'
import { useAppDispatch } from '@/app/appStore.ts'
import { setFilters } from '@/entities/news/model/newsSlice.ts'
import { CategoriesType } from '@/entities/category'

interface Props {
  filters: IFilters
  categories: Array<CategoriesType>
}

const NewsFilters = ({ filters, categories }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider>
          <Categories
            categories={categories}
            selectedCategory={filters!.category}
            setSelectedCategory={category =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters!.keywords}
        setKeywords={keywords =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </div>
  )
}

export default NewsFilters
