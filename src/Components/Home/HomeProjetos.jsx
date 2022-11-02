import React from 'react';
import styles from './HomeProjetos.module.css';
import i from '../Helper/Images';

const HomeProjetos = () => {
  return (
    <section className={styles.home_projetos + ' container'}>
      <div className={styles.home_projetos_titulo}>
        <h2 className="T1-Exbold">Projetos</h2>
        <p className="T6-Bold">Veja Mais...</p>
      </div>

      <div className={styles.home_projetos_cards}>
        <ul className={styles.home_projetos_card}>
          <li>
            <img src={i.ensome} alt="Card Imagem" />
          </li>
          <li className={styles.card_titulo + ' T5-Bold'}>Ensome</li>
          <li className={styles.card_descricao}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </li>
          <ul className={styles.cards_tag + ' T7-Semi'}>
            <li>Online</li>
            <li>React Js</li>
            <li>Router</li>
          </ul>
        </ul>

        <ul className={styles.home_projetos_card}>
          <li>
            <img src={i.ensome} alt="Card Imagem" />
          </li>
          <li className={styles.card_titulo + ' T5-Bold'}>Ensome</li>
          <li className={styles.card_descricao}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </li>
          <ul className={styles.cards_tag + ' T7-Semi'}>
            <li>Online</li>
            <li>React Js</li>
            <li>Router</li>
          </ul>
        </ul>

        <ul className={styles.home_projetos_card}>
          <li>
            <img src={i.ensome} alt="Card Imagem" />
          </li>
          <li className={styles.card_titulo + ' T5-Bold'}>Ensome</li>
          <li className={styles.card_descricao}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </li>
          <ul className={styles.cards_tag + ' T7-Semi'}>
            <li>Online</li>
            <li>React Js</li>
            <li>Router</li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default HomeProjetos;
