import React from 'react';
import { createPortal } from 'react-dom';

import styles from './styles/Modal.module.css';

const Modal = ({ children }) => {
  const container = document.getElementById('app');
  return createPortal(<div className={styles.root}>{children}</div>, container);
};

export default Modal;
