import styles from './styles.module.css'
import { useTheme } from '@/app/providers/ThemeProvider.tsx'
import { themeIcons } from '@/shared/assets'

export default function ThemeButton() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <img
      className={styles.img}
      src={isDark ? themeIcons.light : themeIcons.dark}
      alt="changeTheme"
      width={30}
      onClick={toggleTheme}
    />
  )
}
