import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFilters, INews } from '../../interfaces'
import { PAGE_SIZE } from '../../components/constants/constants.ts'

interface State {
  news: Array<INews>
  filters: IFilters
}

const initialState: State = {
  news: [],
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
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | number }>,
    ) => {
      const { key, value } = action.payload
      state.filters = { ...state.filters, [key]: value }
    },
  },
})

export const { setNews, setFilters } = newsSlice.actions

export default newsSlice.reducer
