import React from 'react';

import styles from './styles/ProgressBar.module.css';

const ProgressBar = ({ progress, label }) => {
  return (
    <div className={styles.root}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
