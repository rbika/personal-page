import * as React from 'react'

import { IoSunny, IoMoon } from 'react-icons/io5'
import styled from '@emotion/styled'

export const Container = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textPrimary};
`

const ThemeToggler = ({ theme, onClick }) => {
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  return (
    <Container onClick={() => onClick(nextTheme)}>
      {nextTheme === 'light' && <IoSunny size="1.5rem" />}
      {nextTheme === 'dark' && <IoMoon size="1.5rem" />}
    </Container>
  )
}

export default ThemeToggler
