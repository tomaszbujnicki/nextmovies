import React from 'react';
import Image from 'next/image';
import SVG_Close from '../assets/close.js';
import SVG_Play from '../assets/play.js';
import SVG_Forward from '../assets/forward.js';
import SVG_LeftArrow from '../assets/arrow-left.js';
import SVG_RightArrow from '../assets/arrow-right.js';
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

export const PrimaryButton = ({ children, size, className, ...rest }) => {
  return (
    <Button
      className={styles.PrimaryButton + ' ' + styles[size] + ' ' + className}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const SecondaryButton = ({ children, size, className, ...rest }) => {
  return (
    <Button
      className={styles.SecondaryButton + ' ' + styles[size] + ' ' + className}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const CloseButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <SVG_Close className={classNameInner} />
    </Button>
  );
};

export const PlayButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <SVG_Play className={classNameInner} />
    </Button>
  );
};

export const ForwardButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <SVG_Forward className={classNameInner} />
    </Button>
  );
};

export const LeftButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <SVG_LeftArrow className={classNameInner} />
    </Button>
  );
};

export const RightButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <SVG_RightArrow className={classNameInner} />
    </Button>
  );
};
