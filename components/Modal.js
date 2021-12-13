import React from 'react';
import { createPortal } from 'react-dom';
import useRouteChangeStart from '../hooks/useRouteChangeStart';
import { CloseButton } from './Button';
import styles from './styles/Modal.module.css';

const Modal = ({ children, closeCallback }) => {
  useRouteChangeStart(closeCallback);
  const container = document.getElementById('app');

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.main}>
        <CloseButton
          onClick={closeCallback}
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
