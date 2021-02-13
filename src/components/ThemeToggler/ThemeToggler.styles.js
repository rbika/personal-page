import styled from '@emotion/styled'

export const Container = styled.div(({ theme }) => ({
  position: 'absolute',
  right: '0.5rem',
  top: '0.5rem',
  cursor: 'pointer',
  color: theme.colors.textPrimary,
}))
