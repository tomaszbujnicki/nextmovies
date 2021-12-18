import React from 'react';
import { useRef } from 'react';
import styles from './styles/Hero.module.css';
import Background from './Background';

const Hero = ({ children, img }) => {
  const heroElement = useRef(null);
  if (heroElement.current) heroElement.current.scrollIntoView();
  return (
    <header ref={heroElement} className={styles.root}>
      {img && <Background path={img} />}
      <div className={styles.container}>{children}</div>
    </header>
  );
};

export default Hero;
