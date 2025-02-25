import { CategoriesType } from '../../category'

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

export interface NewsApiResponse {
  news: Array<INews>
  page: number
  status: string
}
