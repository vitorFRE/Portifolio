import React from 'react';
import Title from '../Helper/Title';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div id="sobre" className={styles.sobre + ' container'}>
      <Title text="Sobre Mim" />
      <div className={styles.texto}>
        <p>
          Meu Nome é Vitor, tenho 22 anos, formado em Análise e Desenvolvimento
          de Sistemas, apaixonado por tecnologia e pela a área de programação,
          principalmento Front-End.
        </p>
        <p>
          Estou sempre buscando novas maneiras de me desenvolver e crescer como
          profissional, e acredito que essa mentalidade de aprendizado constante
          é fundamental para se manter atualizado e relevante na indústria da
          tecnologia.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
