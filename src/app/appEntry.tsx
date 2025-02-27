import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './appStore.ts'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from '@/app/appRouter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
