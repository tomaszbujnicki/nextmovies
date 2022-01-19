import React from 'react';
import styles from './styles/Tag.module.css';
import * as svgImages from '../assets/SvgButtons';

const Tag = ({ children, svg, style }) => {
  const SVG = svgImages[svg];
  return <div className={styles.root}>{children}</div>;
};

export default Tag;
