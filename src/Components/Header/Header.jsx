import React from 'react';
import styles from './Header.module.css';
import i from '../Helper/Images';

const Header = () => {
  return (
    <header className={styles.header_bg}>
      <div className={styles.header + ' container'}>
        <div className={styles.header_logo}>
          <a href="/">
            <img src={i.Header_Logo} alt="Header Logo" />
          </a>
        </div>
        <div className={styles.header_menu}>
          <ul className="T7-Semi">
            <li className={styles.sublinha_roxa}>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Projetos</a>
            </li>
          </ul>
          <div className={styles.header_menu_icons}>
            <a href="https://github.com/vitorFRE">
              <img src={i.GitHub_Icon} alt="GitHub Logo" />
            </a>
            <a href="https://www.linkedin.com/in/vitor-santos-5744861b2/">
              <img src={i.Linkedin_Icon} alt="Linkedin Logo" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
