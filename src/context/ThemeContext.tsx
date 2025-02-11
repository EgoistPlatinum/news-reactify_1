import React, { createContext, useContext, useState } from 'react'

interface IThemeContext {
  isDark: boolean
  toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('Error context')
  }

  return context
}

const { Provider } = ThemeContext

interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(prevState => !prevState)
  }

  return <Provider value={{ isDark, toggleTheme }}>{children}</Provider>
}
