import React from 'react';
import SVG_Close from '../assets/close.svg';
import SVG_Play from '../assets/play.svg';
import SVG_Forward from '../assets/forward.svg';
import SVG_LeftArrow from '../assets/arrow-left.svg';
import SVG_RightArrow from '../assets/arrow-right.svg';
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

export const PrimaryButton = ({ children, size, ...rest }) => {
  return (
    <Button className={styles.PrimaryButton + ' ' + styles[size]} {...rest}>
      {children}
    </Button>
  );
};

export const SecondaryButton = ({ children, size, ...rest }) => {
  return (
    <Button className={styles.SecondaryButton + ' ' + styles[size]} {...rest}>
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
