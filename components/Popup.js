import React from 'react';
import { usePopup } from '../context/PopupProvider';
import { Close } from '../assets/SvgButtons';
import Button from './Button';
import styles from './styles/Popup.module.css';

const Popup = () => {
  const { value, setValue } = usePopup();
  if (!value) return null;

  return (
    <div className={styles.root}>
      <div className={styles.frame}>
        {value}
        <Button className={styles.button} onClick={() => setValue(null)}>
          <Close className={styles.svg} />
        </Button>
      </div>
    </div>
  );
};

export default Popup;
