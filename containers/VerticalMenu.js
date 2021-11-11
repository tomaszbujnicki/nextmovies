import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import useToggle from '../hooks/useToggle';

import {
  Home,
  ExitFullscreen,
  EnterFullscreen,
  Backdrop,
  BackdropPlus,
} from '../assets/SvgButtons';

import useFullscreen from '../hooks/useFullscreen';

import styles from './VerticalMenu.module.css';

const VerticalMenu = () => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();
  const [isDetailsDisplayed, toggleDisplay] = useToggle(true);

  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <a className={styles.button}>
          <Home style={styles.svg} />
        </a>
      </Link>

      <Button onClick={toggleDisplay} className={styles.button}>
        {isDetailsDisplayed ? (
          <Backdrop style={styles.svg} />
        ) : (
          <BackdropPlus style={styles.svg} />
        )}
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

export default VerticalMenu;
