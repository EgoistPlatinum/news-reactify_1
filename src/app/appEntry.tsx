import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { ThemeProvider } from './providers/ThemeProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './appStore.ts'
import BaseLayout from './layouts/BaseLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
