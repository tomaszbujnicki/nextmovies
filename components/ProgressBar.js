import React, { useEffect, useState } from 'react';

import styles from './ProgressBar.module.css';

const ProgressBar = ({ start = 0, end = 100, id, childStyle, ...rest }) => {
  const [now, setNow] = useState(start);
  const [delay, setDelay] = useState(20);
  const [valueToAdd, setValueToAdd] = useState(1.1);
  const [intervalId, setIntervalId] = useState(null);
  const remaining = end - now;

  useEffect(() => {
    setNow(start);
    setDelay(20);
    setValueToAdd(1.1);
  }, [id, start]);

  useEffect(() => {
    console.log('useEffect first');
    const interval = setInterval(() => {
      setNow((now) => now + valueToAdd);
    }, delay);
    setIntervalId(interval);
    return () => {
      console.log('clear');
      clearInterval(interval);
    };
  }, [delay, valueToAdd]);

  if (remaining <= 0) {
    console.log(1, 'CLOSE');
    clearInterval(intervalId);
    console.log(2);
  } else if (remaining <= 4 && remaining > 0 && valueToAdd !== 0.1) {
    console.log(3);
    //setDelay(120);
    setValueToAdd(0.1);
    console.log(4);
  } else if (remaining <= 12 && remaining > 4 && valueToAdd !== 0.3) {
    console.log(5);
    //setDelay(60);
    setValueToAdd(0.3);
    console.log(6);
  }

  return (
    <div className={styles.container} {...rest}>
      <div className={styles.label}>{now.toFixed(1)}%</div>
      <div
        className={styles.progress}
        style={{ ...childStyle, width: `${now}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
