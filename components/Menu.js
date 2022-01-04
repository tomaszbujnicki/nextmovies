import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import useToggle from '../hooks/useToggle';
import {
  Home,
  ExitFullscreen,
  EnterFullscreen,
  Backdrop,
  SearchIcon,
  Close,
} from '../assets/SvgButtons';
import useFullscreen from '../hooks/useFullscreen';
import styles from './styles/Menu.module.css';
import Modal from './Modal';
import Search from './Search';

const Menu = () => {
  const [isFullscreen, toggleFullscreen] = useFullscreen();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={styles.root}>
      <Link href={`/`}>
        <a className={styles.button} tabIndex="1">
          <Home className={styles.svg} />
        </a>
      </Link>

      <Button
        onClick={() => setIsSearchOpen(true)}
        className={styles.button}
        tabIndex="2"
      >
        {isSearchOpen ? (
          <Close className={styles.svg + ' ' + styles.svgClose} />
        ) : (
          <SearchIcon className={styles.svg} />
        )}
      </Button>

      <Button className={styles.button} tabIndex="3">
        <Backdrop className={styles.svg} />
      </Button>

      <Button onClick={toggleFullscreen} className={styles.button} tabIndex="4">
        {isFullscreen ? (
          <ExitFullscreen className={styles.svg} />
        ) : (
          <EnterFullscreen className={styles.svg} />
        )}
      </Button>

      {isSearchOpen && (
        <Modal closeCallback={() => setIsSearchOpen(false)}>
          <Search />
        </Modal>
      )}
    </div>
  );
};

export default Menu;
