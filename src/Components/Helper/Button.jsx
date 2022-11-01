import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, outraClass, cor, ...props }) => {
  return (
    <button
      {...props}
      className={`${cor ? cor : 'button_dourado'} ${
        outraClass ? outraClass : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
