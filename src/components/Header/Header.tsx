import { formatDate } from '../../helpers/formatDate.ts'
import styles from './styles.module.css'
import { themeIcons } from '../../assets'
import { useTheme } from '../../context/ThemeContext.tsx'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img
        className={styles.img}
        src={isDark ? themeIcons.light : themeIcons.dark}
        alt="changeTheme"
        width={30}
        onClick={toggleTheme}
      />
    </header>
  )
}

export default Header
