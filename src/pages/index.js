import * as React from 'react'

import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

import Seo from '../components/Seo/Seo'
import Layout from '../components/Layout'
import profileImg from '../images/profile.jpg'

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

const HomePage = () => {
  return (
    <Layout>
      <Seo />
      <Container className="d-flex flex-column align-items-center">
        <img
          src={profileImg}
          alt="Rafael"
          width={150}
          height={150}
          className="rounded-circle mb-4"
        />

        <Title>
          Rafael <span className="d-none d-sm-inline">Bicalho -</span> Bika(s)
        </Title>

        <Subtitle>
          Frontend Developer at{' '}
          <InterLink
            href="https://www.bancointer.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Inter
          </InterLink>
        </Subtitle>

        <div className="d-flex">
          <a
            href="mailto:rbmbika@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="m-3"
          >
            <SocialIcon>
              <FaRegEnvelope size="1.5rem" />
            </SocialIcon>
          </a>
          <a
            href="https://github.com/rbika"
            target="_blank"
            rel="noreferrer"
            className="m-3"
          >
            <SocialIcon>
              <FaGithub size="1.5rem" />
            </SocialIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/rbika/"
            target="_blank"
            rel="noreferrer"
            className="m-3"
          >
            <SocialIcon>
              <FaLinkedinIn size="1.5rem" />
            </SocialIcon>
          </a>
        </div>
      </Container>
    </Layout>
  )
}

export default HomePage
