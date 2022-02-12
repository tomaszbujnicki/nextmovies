import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import useFullscreen from '../hooks/useFullscreen';
import styles from './styles/Menu.module.css';

import SVG_ExitFullscreen from '../assets/exit-fullscreen.svg';
import SVG_EnterFullscreen from '../assets/enter-fullscreen.svg';
import SVG_Search from '../assets/search.svg';
import SVG_Home from '../assets/home.svg';
import SVG_Tv from '../assets/tv.svg';
import SVG_Cinema from '../assets/cinema.svg';
import SVG_Forward from '../assets/forward.svg';

const Menu = ({ setIsSearchOpen }) => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();
  const router = useRouter();

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

      <Button onClick={toggleFullscreen} className={styles.button} tabIndex="3">
        {isFullscreen ? (
          <SVG_ExitFullscreen className={styles.svg} />
        ) : (
          <SVG_EnterFullscreen className={styles.svg} />
        )}
      </Button>

      <Link href={`/movies`}>
        <a className={styles.button} tabIndex="4">
          <SVG_Cinema className={styles.svg} />
        </a>
      </Link>

      <Link href={`/tv-shows`}>
        <a className={styles.button} tabIndex="5">
          <SVG_Tv className={styles.svg} />
        </a>
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
