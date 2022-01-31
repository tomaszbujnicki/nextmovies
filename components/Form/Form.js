import React from 'react';
import styles from './Form.module.css';

const Form = ({ children }) => {
  return <form className={styles.root}>{children}</form>;
};

export default Form;
