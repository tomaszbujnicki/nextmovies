import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import useFullscreen from '../hooks/useFullscreen';
import styles from './styles/Menu.module.css';

import SVG_ExitFullscreen from '../assets/exit-fullscreen.js';
import SVG_EnterFullscreen from '../assets/enter-fullscreen.js';
import SVG_Search from '../assets/search.js';
import SVG_Home from '../assets/home.js';
import SVG_Tv from '../assets/tv.js';
import SVG_Cinema from '../assets/cinema.js';
import SVG_Forward from '../assets/forward.js';

const Menu = ({ setIsSearchOpen }) => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();
  const router = useRouter();

  return (
    <div className={styles.root}>
      <Link href={`/`} className={styles.button} tabIndex="1">
        <SVG_Home className={styles.svg} />
      </Link>

      <Button
        onClick={() => setIsSearchOpen(true)}
        className={styles.button}
        tabIndex="2"
      >
        <SVG_Search className={styles.svg} />
      </Button>

      <Button onClick={toggleFullscreen} className={styles.button} tabIndex="3">
        {isFullscreen ? (
          <SVG_ExitFullscreen className={styles.svg} />
        ) : (
          <SVG_EnterFullscreen className={styles.svg} />
        )}
      </Button>

      <Link href={`/movies`} className={styles.button} tabIndex="4">
        <SVG_Cinema className={styles.svg} />
      </Link>

      <Link href={`/tv-shows`} className={styles.button} tabIndex="5">
        <SVG_Tv className={styles.svg} />
      </Link>

      {isFullscreen && (
        <>
          <Button
            onClick={() => router.back()}
            className={styles.button}
            tabIndex="6"
            disabled={window.history.state.idx === 0}
          >
            <SVG_Forward
              className={styles.svg}
              style={{ transform: 'rotateY(180deg)' }}
            />
          </Button>

          <Button
            onClick={() => {
              window.history.go(1);
            }}
            className={styles.button}
            tabIndex="7"
          >
            <SVG_Forward className={styles.svg} />
          </Button>
        </>
      )}
    </div>
  );
};

export default Menu;
