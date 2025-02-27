import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { INews } from './types.ts'
import { IFilters } from '@/shared/interfaces'
import { PAGE_SIZE } from '@/shared/constants/constants.ts'

interface State {
  news: Array<INews>
  currentNews: INews | null
  filters: IFilters
}

const initialState: State = {
  news: [],
  currentNews: null,
  filters: {
    page_size: PAGE_SIZE,
    page_number: 1,
    category: null,
    keywords: '',
  },
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Array<INews>>) => {
      state.news = action.payload
    },

    setCurrentNews: (state, action: PayloadAction<INews | null>) => {
      state.currentNews = action.payload
    },

    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>,
    ) => {
      const { key, value } = action.payload
      state.filters = { ...state.filters, [key]: value }
    },
  },
})

export const { setNews, setFilters, setCurrentNews } = newsSlice.actions

export default newsSlice.reducer
