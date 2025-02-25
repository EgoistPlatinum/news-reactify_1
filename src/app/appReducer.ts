import { combineReducers } from '@reduxjs/toolkit'
import { newsApi } from '../entities/news/api/newsApi.ts'
import newsReducer from '../entities/news/model/newsSlice.ts'
import { categoriesApi } from '../entities/category/api/categoriesApi.ts'

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
})
