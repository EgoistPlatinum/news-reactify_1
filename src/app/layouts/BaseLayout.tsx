import '../index.css'
import { useTheme } from '@/app/providers/ThemeProvider.tsx'
import { Header } from '@/widgets/header/ui'
import Page from '@/pages/main/ui/Page.tsx'

function BaseLayout() {
  const { isDark } = useTheme()

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Page />
      </div>
    </div>
  )
}

export default BaseLayout
