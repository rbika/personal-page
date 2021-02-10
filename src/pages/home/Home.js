import * as React from 'react';

import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaSpotify,
  // FaFileAlt,
} from 'react-icons/fa';

import profileImg from '../../images/profile.jpg';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <div className={`d-flex flex-column align-items-center ${styles.root}`}>
      <img
        src={profileImg}
        alt="Rafael"
        width={150}
        height={150}
        className={`rounded-circle mb-4 ${styles.profileImg}`}
      />

      <h1 className={styles.title}>
        Rafael <span className="d-none d-sm-inline">Bicalho -</span> Bika(s)
      </h1>

      <h2 className={styles.subTitle}>
        Frontend Developer at{' '}
        <a
          href="https://www.bancointer.com.br/"
          target="_blank"
          rel="noreferrer"
          className={styles.interLink}
        >
          Inter
        </a>
      </h2>

      <div className="d-flex">
        <a
          href="https://github.com/rbika"
          target="_blank"
          rel="noreferrer"
          className="m-3"
        >
          <FaGithub className={styles.socialIcon} size="1.5rem" />
        </a>

        <a
          href="https://twitter.com/rbika"
          target="_blank"
          rel="noreferrer"
          className="m-3"
        >
          <FaTwitter className={styles.socialIcon} size="1.5rem" />
        </a>

        <a
          href="https://www.linkedin.com/in/rbika/"
          target="_blank"
          rel="noreferrer"
          className="m-3"
        >
          <FaLinkedinIn className={styles.socialIcon} size="1.5rem" />
        </a>

        <a
          href="https://open.spotify.com/user/rbika"
          target="_blank"
          rel="noreferrer"
          className="m-3"
        >
          <FaSpotify className={styles.socialIcon} size="1.5rem" />
        </a>

        {/* <FaFileAlt className={`m-3 ${styles.socialIcon}`} color="#455a64" size="1.4rem" /> */}
      </div>
    </div>
  );
};

export default HomePage;
