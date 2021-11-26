import React from 'react';
import { Close } from '../assets/SvgButtons';
import Button from './Button';
import styles from './styles/PopupCard.module.css';

const PopupCard = ({ isOpen, setIsOpen, children, style }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.root}>
      <div className={styles.frame} style={style}>
        {children}
        <Button className={styles.button} onClick={() => setIsOpen(false)}>
          <Close className={styles.svg} />
        </Button>
      </div>
    </div>
  );
};

export default PopupCard;
