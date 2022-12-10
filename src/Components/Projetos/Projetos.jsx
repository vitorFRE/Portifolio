import React from 'react';
import Title from '../Helper/Title';
import i from '../Helper/Images';
import styles from './Projetos.module.css';

const Projetos = () => {
  return (
    <div>
      <Title classe="container" text="Projetos" />
      <div className={styles.projetos_container}>
        <a href="">
          <span>
            <img src={i.ensome} />
          </span>
        </a>
        <a href="">
          <span>
            <img src={i.copa} />
          </span>
        </a>
        <a href="">
          <span>
            <img src={i.aluratube} />
          </span>
        </a>
        <a href="">
          <span>
            <img src={i.weather} />
          </span>
        </a>
        <a href="">
          <span>
            <img src={i.ensome} />
          </span>
        </a>
        <a href="">
          <span>
            <img src={i.copa} />
          </span>
        </a>
        <a href="">
          <span>
            <img src={i.weather} />
          </span>
        </a>
      </div>
      <Title
        classe={`container ${styles.repo_title}`}
        text="Quer ver os repositórios ?"
      />
      <div className={styles.texto + ' container'}>
        <p>
          Acesse meu
          <a href="https://github.com/vitorFRE?tab=repositories"> GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Projetos;
