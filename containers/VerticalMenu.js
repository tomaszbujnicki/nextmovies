import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import { Home, ExitFullscreen, EnterFullscreen } from '../assets/SvgButtons';

import useFullscreenToggler from '../hooks/useFullscreenToggler';

import styles from './VerticalMenu.module.css';

const VerticalMenu = () => {
  const [isFullscreen, toggleFullscreen] = useFullscreenToggler();

  return (
    <div className={styles.container}>
      <Link href={`/`}>
        <a className={styles.button}>
          <Home style={styles.svg} />
        </a>
      </Link>
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
