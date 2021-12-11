import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import useToggle from '../hooks/useToggle';
import {
  Home,
  ExitFullscreen,
  EnterFullscreen,
  Backdrop,
} from '../assets/SvgButtons';
import useFullscreen from '../hooks/useFullscreen';
import styles from './styles/Menu.module.css';

const Menu = () => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();

  return (
    <div className={styles.root}>
      <Link href={`/`}>
        <a className={styles.button} tabIndex="1">
          <Home className={styles.svg} />
        </a>
      </Link>

      <Button className={styles.button} tabIndex="2">
        <Backdrop className={styles.svg} />
      </Button>

      <Button onClick={toggleFullscreen} className={styles.button} tabIndex="3">
        {isFullscreen ? (
          <ExitFullscreen className={styles.svg} />
        ) : (
          <EnterFullscreen className={styles.svg} />
        )}
      </Button>
    </div>
  );
};

export default Menu;
