import React from 'react';
import styles from './Footer.module.css'
import LinkedinLogo from '../../Assets/LinkedIn.svg.png';
import githubLogo from '../../Assets/github.svg.png';
import gmailLogo from '../../Assets/Gmail.svg.webp';
import cvLogo from '../../Assets/cv.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
  <div className={styles.social}>
    <a href="https://linkedin.com/in/agustin-rosa-37ab2a26a" target="_blank" rel="noopener noreferrer">
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={LinkedinLogo} alt="" />
      </div>
    </a>
    <a href="https://github.com/agustinrosa22" target="_blank" rel="noopener noreferrer">
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={githubLogo} alt="" />
      </div>
    </a>
    <a href="https://drive.google.com/file/d/1F2_ImzZEp-uM0sXbxp9OYLv1ZuT-G7SA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={cvLogo} alt="" />
      </div>
    </a>
    <a href="mailto:agustinrosa1234@gmail.com" target="_blank" rel="noopener noreferrer">
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={gmailLogo} alt="" />
      </div>
    </a>
  </div>
</footer>

  );
};

export default Footer;


