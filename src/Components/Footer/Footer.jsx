import React from 'react';
import styles from './Footer.module.css';
import i from '../Helper/Images';

const Footer = () => {
  return (
    <footer className={styles.footer_bg}>
      <div className={styles.footer + ' container T4-Bold'}>
        <a href="/">
          <img src={i.Header_Logo} alt="Header Logo" />
        </a>

        <p>
          Feito com 💜 by <a href="https://github.com/vitorFRE">Vitor</a> © 2022
        </p>

        <div className={styles.footer_icons}>
          <a href="https://github.com/vitorFRE">
            <img src={i.GitHub_Icon} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/vitor-santos-5744861b2/">
            <img src={i.Linkedin_Icon} alt="Linkedin Logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
