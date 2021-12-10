import React from 'react';
import { Close } from '../assets/SvgButtons';
import styles from './styles/Button.module.css';

const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;

export const CloseButton = ({ className, ...rest }) => {
  return (
    <Button className={`${styles.CloseButton} ${className}`} {...rest}>
      <Close className={styles.CloseButton__svg} />
    </Button>
  );
};

export const PrimaryButton = ({ children, className, ...rest }) => {
  return (
    <Button className={`${styles.PrimaryButton} ${className}`} {...rest}>
      {children}
    </Button>
  );
};
