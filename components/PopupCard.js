import React from 'react';
import { Close } from '../assets/SvgButtons';
import Button from './Button';
import styles from './PopupCard.module.css';

const PopupCard = ({ isOpen, setIsOpen, children, style }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.container} style={style}>
      {children}
      <Button className={styles.button} onClick={() => setIsOpen(false)}>
        <Close style={styles.svg} />
      </Button>
    </div>
  );
};

export default PopupCard;
