import React from 'react';
import Button from './Button';
import styles from './PopUp.module.css';

const PopUp = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className={styles.container}>
      {children}
      <Button className={styles.button} onClick={() => setIsOpen(false)}>
        Close
      </Button>
    </div>
  );
};

export default PopUp;
