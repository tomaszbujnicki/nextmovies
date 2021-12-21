import React, { useEffect } from 'react';
import { useRef } from 'react';
import styles from './styles/Hero.module.css';
import Background from './Background';

const Hero = ({ children, img }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollIntoView();
  });

  return (
    <header ref={ref} className={styles.root}>
      {img && <Background path={img} />}
      <div className={styles.container}>{children}</div>
    </header>
  );
};

export default Hero;
