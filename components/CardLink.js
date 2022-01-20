import React from 'react';
import Link from 'next/link';
import styles from './styles/CardLink.module.css';
import SVG_Forward from '../assets/forward.svg';

const CardLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a draggable="false" className={styles.root}>
        <div className={styles.content}>{children}</div>
        <div className={styles.svgContainer}>
          <SVG_Forward className={styles.svg} />
        </div>
      </a>
    </Link>
  );
};

export default CardLink;
