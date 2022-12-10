import React from 'react';
import Title from '../Helper/Title';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div id="sobre" className={styles.sobre + ' container'}>
      <Title text="Sobre Mim" />
      <div className={styles.texto}>
        <p>
          Meu Nome é Vitor, tenho 22 anos apaixonado por tecnologia e pela a
          área de programação, principalmento Front-End.
        </p>
        <p>Formado em Análise e Desenvolvimento de Sistemas, </p>
        <p>
          Mauris sit amet iaculis tellus. Sed mauris nulla, ultricies fringilla
          nulla quis, pharetra tincidunt ipsum. Nam vitae sagittis velit.
        </p>
        <p>
          Mauris sit amet iaculis tellus. Sed mauris nulla, ultricies fringilla
          nulla quis, pharetra tincidunt ipsum. Nam vitae sagittis velit.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
