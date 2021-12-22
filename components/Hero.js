import React from 'react';
import styles from './styles/Hero.module.css';
import Background from './Background';

const Hero = ({ children, img }) => {
  return (
    <header className={styles.root}>
      {img && <Background path={img} low="w300" />}
      <div className={styles.container}>{children}</div>
    </header>
  );
};

export default Hero;
