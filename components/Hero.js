import React from 'react';
import { useRef } from 'react';
import styles from './styles/Hero.module.css';
import Background from './Background';
import DualBackground from './DualBackground';

const Hero = ({ children, style, img }) => {
  const heroElement = useRef(null);
  if (heroElement.current) heroElement.current.scrollIntoView();
  return (
    <header ref={heroElement} className={styles.root}>
      {img && <Background path={img} />}
      {/* {img && <DualBackground src={img} />} */}
      <div className={styles.container} style={style}>
        {children}
      </div>
    </header>
  );
};

export default Hero;
