import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/CardLink.module.css';
import SVG_Forward from '../assets/forward.js';

const CardLink = ({ children, href }) => {
  return (
    <Link href={href} className={styles.root}>
      <div className={styles.content}>{children}</div>
      <div className={styles.svgContainer}>
        <SVG_Forward className={styles.svg} />
      </div>
    </Link>
  );
};

export default CardLink;
