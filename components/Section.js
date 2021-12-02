import React from 'react';
import styles from './styles/Section.module.css';

const Section = ({ children, title, style }) => {
  if (children === undefined) return null;
  return (
    <section className={styles.root} style={style}>
      <h2 className={styles.heading}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
