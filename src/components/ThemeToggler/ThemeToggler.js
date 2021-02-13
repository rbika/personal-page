import * as React from 'react'

import { IoSunny, IoMoon } from 'react-icons/io5'

import * as S from './ThemeToggler.styles'

const ThemeToggler = ({ theme, onClick }) => {
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <S.Container onClick={() => onClick(nextTheme)}>
      {nextTheme === 'light' && <IoSunny size="1.5rem" />}
      {nextTheme === 'dark' && <IoMoon size="1.5rem" />}
    </S.Container>
  )
}

export default ThemeToggler
