import { themeIcons } from '../../../../shared/assets'
import { useTheme } from '../../../../app/providers/ThemeProvider.tsx'
import styles from './styles.module.css'

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
