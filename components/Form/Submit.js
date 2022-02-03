import React from 'react';
import styles from './Submit.module.css';

const Button = ({ children, isDisabled }) => {
  return (
    <button type="submit" className={styles.root} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
