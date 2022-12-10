import React from 'react';
import styles from './HomeProjetos.module.css';
import i from '../Helper/Images';
import { Link } from 'react-router-dom';
import Title from '../Helper/Title';

const HomeProjetos = () => {
  return (
    <section className={styles.home_projetos + ' container'}>
      <Title text="Projetos" classe={styles.home_projetos_titulo} />

      <div className={styles.home_projetos_cards}>
        <ul className={styles.home_projetos_card}>
          <li>
            <a href="https://ensome-vitor.netlify.app/" target="_blank">
              <img src={i.ensome} alt="Card Imagem" />
            </a>
          </li>
          <li className={styles.card_titulo + ' T5-Bold'}>Ensome</li>
          <li className={styles.card_descricao}>
            Um website com diversas paginas feito com react, totalmente
            responsivo.
          </li>
          <ul className={styles.cards_tag + ' T7-Semi'}>
            <li>Online</li>
            <li>React Js</li>
            <li>Router</li>
          </ul>
        </ul>

        <ul className={styles.home_projetos_card}>
          <li>
            <a href="https://copaqatar-vitor.netlify.app/" target="_blank">
              <img src={i.copa} alt="Card Imagem" />
            </a>
          </li>
          <li className={styles.card_titulo + ' T5-Bold'}>CopaQatar</li>
          <li className={styles.card_descricao}>
            Site para ver informações sobre a copa do mundo Qatar,
            Partidas,Grupos,Proximos Jogos,Jogo Atual, puxando dados de uma API.
          </li>
          <ul className={styles.cards_tag + ' T7-Semi'}>
            <li>Online</li>
            <li>React Js</li>
            <li>API</li>
            <li>Router</li>
          </ul>
        </ul>

        <ul className={styles.home_projetos_card}>
          <li>
            <a href="https://alura-tube-vitorfre.vercel.app/" target="_blank">
              <img src={i.aluratube} alt="Card Imagem" />
            </a>
          </li>
          <li className={styles.card_titulo + ' T5-Bold'}>AluraTube</li>
          <li className={styles.card_descricao}>
            Projeto usando SupaBase ligado a um banco de dados para armazenar
            links de videos.
          </li>
          <ul className={styles.cards_tag + ' T7-Semi'}>
            <li>Online</li>
            <li>Next Js</li>
            <li>SupaBase</li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default HomeProjetos;
