import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, title, style }) => {
  return (
    <section className={styles.container} style={style}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
