import React from 'react';
import {
  Close,
  Play,
  Forward,
  LeftArrow,
  RightArrow,
} from '../assets/SvgButtons';
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

export const CloseButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <Close className={classNameInner} />
    </Button>
  );
};

export const PlayButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <Play className={classNameInner} />
    </Button>
  );
};

export const ForwardButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <Forward className={classNameInner} />
    </Button>
  );
};

export const LeftButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <LeftArrow className={classNameInner} />
    </Button>
  );
};

export const RightButton = ({ className, classNameInner, ...rest }) => {
  return (
    <Button className={className} {...rest}>
      <RightArrow className={classNameInner} />
    </Button>
  );
};
