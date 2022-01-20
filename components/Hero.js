import React from 'react';
import styles from './styles/Hero.module.css';
import Background from './Background';

const Hero = ({ children, img }) => {
  return (
    <header className={styles.root}>
      <Background path={img} low="w300" />
      {children}
    </header>
  );
};

export default Hero;
