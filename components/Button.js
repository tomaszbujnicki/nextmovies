import React from 'react';
import { Close, Play, Forward } from '../assets/SvgButtons';
import styles from './styles/Button.module.css';

const Button = ({ children, active, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={active ? `${className} ${styles.active}` : className}
    >
      {children}
    </button>
  );
};

export default Button;

export const PrimaryButton = ({ children, ...rest }) => {
  return (
    <Button className={styles.PrimaryButton} {...rest}>
      {children}
    </Button>
  );
};

export const CloseButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <Close className={classNameInner} />
    </Button>
  );
};

export const PlayButton = ({ className, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <Play />
    </Button>
  );
};

export const ForwardButton = ({ className, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <Forward />
    </Button>
  );
};
