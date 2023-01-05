import React from 'react';
import Title from '../Helper/Title';
import i from '../Helper/Images';
import styles from './Projetos.module.css';
import Button from '../Helper/Button';

const Projetos = () => {
  return (
    <div>
      <Title classe="container" text="Projetos" />
      <div className={styles.projetos_container}>
        <a href="https://ensome-vitor.netlify.app/" target="_blank">
          <span>
            <img src={i.ensome} />
          </span>
        </a>
        <a href="https://copaqatar-vitor.netlify.app/" target="_blank">
          <span>
            <img src={i.copa} />
          </span>
        </a>
        <a href="https://dtube-vitorfre.vercel.app/" target="_blank">
          <span>
            <img src={i.aluratube} />
          </span>
        </a>
        <a href="https://galaxyweather.netlify.app/" target="_blank">
          <span>
            <img src={i.weather} />
          </span>
        </a>
        <a
          href="https://vitorfre.github.io/Projetos/codelandia/Desafio-05-StudioGhibli/index.html"
          target="_blank"
        >
          <span>
            <img src="https://raw.githubusercontent.com/vitorFRE/Projetos/main/img/05.png" />
          </span>
        </a>
        <a
          href="https://vitorfre.github.io/Projetos/codelandia/Desafio-04-Login/index.html"
          target="_blank"
        >
          <span>
            <img src="https://raw.githubusercontent.com/vitorFRE/Projetos/main/img/04.png" />
          </span>
        </a>
        <a
          href="https://vitorfre.github.io/Projetos/codelandia/Desafio-06-Loki/index.html"
          target="_blank"
        >
          <span>
            <img src="https://raw.githubusercontent.com/vitorFRE/Projetos/main/img/06.png" />
          </span>
        </a>
        <a href="https://galaxybike-vitor.netlify.app">
          <span>
            <img
              src="https://raw.githubusercontent.com/vitorFRE/GalaxyBike/main/img.png"
              alt="GalaxyBike"
            />
          </span>
        </a>
        <a href="https://galaxsolar-vitor.netlify.app/">
          <span>
            <img
              src="https://raw.githubusercontent.com/vitorFRE/GalaxySolar/main/img.png"
              alt="GalaxySolar"
            />
          </span>
        </a>
        <a href="https://bluegalaxy-vitor.netlify.app/">
          <span>
            <img
              src="https://raw.githubusercontent.com/vitorFRE/BlueGalaxy/main/img.png"
              alt="BlueGalaxy"
            />
          </span>
        </a>
      </div>
      <Title
        classe={`container ${styles.repo_title}`}
        text="Quer ver os repositórios ?"
      />
      <div className={styles.texto + ' container'}>
        <p>Veja meus repositórios no Github &#128518; </p>
        <a href="https://github.com/vitorFRE?tab=repositories" target="_blank">
          <Button>GitHub</Button>
        </a>
      </div>
    </div>
  );
};

export default Projetos;
