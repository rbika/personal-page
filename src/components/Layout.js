import * as React from 'react'

import { ThemeProvider } from '@emotion/react'
import { themes } from '../themes'

import ThemeToggler from './ThemeToggler'

const Layout = ({ children }) => {
  const [theme, setTheme] = React.useState('dark')

  function handleThemeChange(nextTheme) {
    setTheme(nextTheme)
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
      <ThemeToggler theme={theme} onClick={handleThemeChange} />
    </ThemeProvider>
  )
}

export default Layout
