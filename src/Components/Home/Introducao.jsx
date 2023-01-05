import React from 'react';
import styles from './Introducao.module.css';
import i from '../Helper/Images';
import Button from '../Helper/Button';

const Introducao = () => {
  return (
    <div className={styles.introducao + ' container'}>
      <div className={styles.introducao_text}>
        <h1 className="T3-Exbold">
          Bem-Vindo(a) ao meu Portifólio! <br /> Sou um desenvolvedor
          <span className="Dourado"> Front-End</span>
        </h1>
        <div className={styles.introducao_btns}>
          <a href="https://github.com/vitorFRE" target="_blank">
            <Button outraClass={'T7-Semi'}>GitHub</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-santos-5744861b2/"
            target="_blank"
          >
            <Button cor={'button_roxo'} outraClass={'T7-Semi'}>
              Linkedin
            </Button>
          </a>
        </div>
      </div>
      <div className={styles.introducao_image}>
        <img src={i.Intro_Img} alt="Imagem de introdução" />
        <div className={styles.img_credits}>
          Image by
          <a href="https://iconscout.com/contributors/woobrodesign">
            WOOBRO LTD
          </a>
          on <a href="https://iconscout.com">IconScout</a>
        </div>
      </div>
    </div>
  );
};

export default Introducao;
