import styled from '@emotion/styled'

export const Container = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.bgPrimary,
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  paddingTop: '100px',
  transition: 'background-color 0.2s ease-in-out',
}))

export const Title = styled.h1(({ theme }) => ({
  color: theme.colors.textPrimary,
  fontSize: '2rem',
  fontWeight: 300,
}))

export const Subtitle = styled.h2(({ theme }) => ({
  color: theme.colors.textSecondary,
  fontSize: '1.25rem',
  fontWeight: 300,
}))

export const InterLink = styled.a(({ theme }) => ({
  color: theme.colors.interOrange,
  transition: 'border-bottom 0.3s',
  borderBottom: '1px solid transparent',
  '&:hover': {
    color: theme.colors.interOrange,
    textDecoration: 'none',
    borderBottom: `1px solid ${theme.colors.interOrange}`,
  },
}))

export const SocialIcon = styled.div(({ theme }) => ({
  color: theme.colors.textPrimary,
  transition: 'color 0.3s',
  '&:hover': {
    color: theme.colors.linkHover,
  },
}))
