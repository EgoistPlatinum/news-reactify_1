import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout.tsx'
import { NewsPage } from '@/pages/news'
import { MainPage } from '@/pages/main'

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/news/:id',
        element: <NewsPage />,
      },
    ],
  },
])
