import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import useRouteChangeStart from '../hooks/useRouteChangeStart';
import { CloseButton } from './Button';
import styles from './styles/Modal.module.css';

const Modal = ({ children, closeCallback }) => {
  const [hide, setHide] = useState(true);
  const [runTimeout, setRunTimeout] = useState(null);

  useRouteChangeStart(closeCallback);

  const clickHandler = () => {
    setHide(true);
    setRunTimeout(true);
  };

  useEffect(() => {
    setHide(false);
  }, []);

  useEffect(() => {
    if (runTimeout) {
      const id = setTimeout(closeCallback, 500);

      return () => clearTimeout(id);
    }
  }, [closeCallback, runTimeout]);

  const container = document.getElementById('app');

  return createPortal(
    <div className={hide ? `${styles.overlay} ${styles.hide}` : styles.overlay}>
      <div className={hide ? `${styles.main} ${styles.hide}` : styles.main}>
        <CloseButton
          onClick={clickHandler}
          className={styles.CloseButton}
          classNameInner={styles.CloseButtonInner}
        />
        <div className={styles.inner}>{children}</div>
      </div>
    </div>,
    container
  );
};

export default Modal;
