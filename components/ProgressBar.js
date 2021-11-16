import React, { useEffect, useState, useCallback } from 'react';

import styles from './ProgressBar.module.css';

const ProgressBar = ({ end, id }) => {
  const [now, setNow] = useState(0);
  const [delay, setDelay] = useState(20);

  const progress = useCallback(() => {
    setNow((now) => {
      const add = Math.max((end - now) / 50, 0.2);
      return (now += add);
    });
  }, [end]);

  useEffect(() => {
    setNow(0);
    setDelay(20);
  }, [id]);

  useEffect(() => {
    if (!delay) {
      return;
    }

    const interval = setInterval(progress, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, progress]);

  if (now >= end && delay !== 0) {
    setDelay(0);
  }

  return (
    <div className={styles.container}>
      <div className={styles.label}>{now.toFixed()}%</div>
      <div className={styles.progress} style={{ width: `${now}%` }}></div>
    </div>
  );
};

export default ProgressBar;
