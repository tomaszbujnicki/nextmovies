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

import styles from './Menu.module.css';

const Menu = () => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();

  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <a className={styles.button}>
          <Home style={styles.svg} />
        </a>
      </Link>

      <Button className={styles.button}>
        <Backdrop style={styles.svg} />
      </Button>

      <Button onClick={toggleFullscreen} className={styles.button}>
        {isFullscreen ? (
          <ExitFullscreen style={styles.svg} />
        ) : (
          <EnterFullscreen style={styles.svg} />
        )}
      </Button>
    </div>
  );
};

export default Menu;
