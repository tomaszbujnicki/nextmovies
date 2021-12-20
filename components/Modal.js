import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useRouteChangeStart from '../hooks/useRouteChangeStart';
import { CloseButton } from './Button';
import styles from './styles/Modal.module.css';

const Modal = ({ children, closeCallback }) => {
  const [reverse, setReverse] = useState(false);

  useRouteChangeStart(closeCallback);

  const animationEndHandler = () => {
    if (reverse) closeCallback();
  };

  const container = document.getElementById('app');

  return createPortal(
    <div
      className={
        reverse ? `${styles.overlay} ${styles.reverse}` : styles.overlay
      }
    >
      <div
        onAnimationEnd={animationEndHandler}
        className={reverse ? `${styles.main} ${styles.reverse}` : styles.main}
      >
        <CloseButton
          onClick={() => setReverse(true)}
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
