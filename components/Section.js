import React from 'react';
import styles from './styles/Section.module.css';

const Section = ({ children, title }) => {
  return (
    <section className={styles.root}>
      {title && <h2 className={styles.heading}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
