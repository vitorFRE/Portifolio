import React from 'react';
import styles from './Title.module.css';

const Title = ({ text, classe }) => {
  return (
    <div className={`${styles.titleContaier} ${classe}`}>
      <h1 className="T1-Exbold">{text}</h1>
      <hr />
    </div>
  );
};

export default Title;
