import React from 'react';
import styles from './styles/Wrapper.module.css';

const Wrapper = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Wrapper;
