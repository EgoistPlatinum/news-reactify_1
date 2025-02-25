import { useTheme } from '../providers/ThemeProvider.tsx'
import Header from '../../widgets/header/ui/Header/Header.tsx'
import Page from '../../pages/main/ui/Page.tsx'
import '../index.css'

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
