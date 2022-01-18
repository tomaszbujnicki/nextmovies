import React from 'react';
import Link from 'next/link';
import styles from './styles/CardLink.module.css';
import { Forward } from '../assets/SvgButtons';

const CardLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a draggable="false" className={styles.root}>
        <div className={styles.content}>{children}</div>
        <div className={styles.svgContainer}>
          <Forward className={styles.svg} />
        </div>
      </a>
    </Link>
  );
};

export default CardLink;
