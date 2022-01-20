import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import useToggle from '../hooks/useToggle';
import useFullscreen from '../hooks/useFullscreen';
import styles from './styles/Menu.module.css';

import SVG_ExitFullscreen from '../assets/exit-fullscreen.svg';
import SVG_EnterFullscreen from '../assets/enter-fullscreen.svg';
import SVG_Search from '../assets/search.svg';
import SVG_Home from '../assets/home.svg';

const Menu = ({ setIsSearchOpen }) => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();

  return (
    <div className={styles.root}>
      <Link href={`/`}>
        <a className={styles.button} tabIndex="1">
          <SVG_Home className={styles.svg} />
        </a>
      </Link>

      <Button
        onClick={() => setIsSearchOpen(true)}
        className={styles.button}
        tabIndex="2"
      >
        <SVG_Search className={styles.svg} />
      </Button>

      <Button onClick={toggleFullscreen} className={styles.button} tabIndex="4">
        {isFullscreen ? (
          <SVG_ExitFullscreen className={styles.svg} />
        ) : (
          <SVG_EnterFullscreen className={styles.svg} />
        )}
      </Button>
    </div>
  );
};

export default Menu;
