import React, { useState } from 'react';
import { PrimaryButton } from './Button';
import styles from './styles/ButtonGroup.module.css';

const buttonTypes = {
  primary: PrimaryButton,
};

const ButtonGroup = ({ children, type = 'primary' }) => {
  const [active, setActive] = useState(0);
  const Button = buttonTypes[type];
  return (
    <div className={styles.root}>
      {children.map((child, index) => {
        return (
          <Button
            key={index}
            {...child.props}
            active={active == index}
            onClick={() => {
              child.props.onClick();
              setActive(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default ButtonGroup;
