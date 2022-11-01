import React from 'react';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div className={styles.sobre + ' container'}>
      <h1 className="T1-Exbold">Sobre Mim</h1>
      <h3 className="T3-Exbold">Vitor Santos</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus
        neque dictum risus porta malesuada. Sed ante tellus, egestas ut ligula
        id, viverra ultricies sapien. Phasellus luctus ipsum eu lacus molestie
        gravida. Integer non neque rhoncus, suscipit neque quis, lacinia libero.
      </p>
    </div>
  );
};

export default Sobre;
