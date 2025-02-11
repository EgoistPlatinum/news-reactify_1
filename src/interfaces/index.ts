export interface INews {
  author: string
  category: Array<CategoriesType>
  description: string
  id: string
  image: string
  language: string
  published: string
  title: string
  url: string
}

export type CategoriesType = string | null

export interface NewsApiResponse {
  news: Array<INews>
  page: number
  status: string
}

export interface IFilters {
  page_number: number
  page_size: number
  category: CategoriesType
  keywords: string
}

export type ParamsType = Partial<IFilters>

export interface CategoriesApiResponse {
  categories: Array<CategoriesType>
  description: string
  status: string
}

export interface IPaginationProps {
  totalPages: number
  handlePageClick: (page: number) => void
  handleNextPage: () => void
  handlePreviousPage: () => void
  currentPage: number
}

export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'count'
