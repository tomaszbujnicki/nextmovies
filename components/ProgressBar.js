import React from 'react';

import styles from './ProgressBar.module.css';

const ProgressBar = ({ progress, label }) => {
  return (
    <div className={styles.container}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
