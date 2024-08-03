import React from 'react';
import styles from './Fieldset.module.css';

const Fieldset = ({ title, children }) => {
  return (
    <fieldset className={styles.root}>
      <legend className={styles.title}>{title}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
