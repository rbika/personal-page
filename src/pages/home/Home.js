import * as React from 'react'

import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa'

import Seo from '../../components/Seo/Seo'
import Layout from '../../components/Layout'
import profileImg from '../../images/profile.jpg'
import * as S from './Home.styled'

const HomePage = () => {
  return (
    <Layout>
      <Seo />
      <S.Container className="d-flex flex-column align-items-center">
        <img
          src={profileImg}
          alt="Rafael"
          width={150}
          height={150}
          className="rounded-circle mb-4"
        />

        <S.Title>
          Rafael <span className="d-none d-sm-inline">Bicalho -</span> Bika(s)
        </S.Title>

        <S.Subtitle>
          Frontend Developer at{' '}
          <S.InterLink
            href="https://www.bancointer.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            Inter
          </S.InterLink>
        </S.Subtitle>

        <div className="d-flex">
          <a
            href="mailto:rbmbika@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="m-3"
          >
            <S.SocialIcon>
              <FaRegEnvelope size="1.5rem" />
            </S.SocialIcon>
          </a>
          <a
            href="https://github.com/rbika"
            target="_blank"
            rel="noreferrer"
            className="m-3"
          >
            <S.SocialIcon>
              <FaGithub size="1.5rem" />
            </S.SocialIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/rbika/"
            target="_blank"
            rel="noreferrer"
            className="m-3"
          >
            <S.SocialIcon>
              <FaLinkedinIn size="1.5rem" />
            </S.SocialIcon>
          </a>
        </div>
      </S.Container>
    </Layout>
  )
}

export default HomePage
