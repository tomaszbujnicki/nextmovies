import React, { useState, useEffect } from 'react';
import MainInfo from '../../components/MainInfo';
import Hero from '../../components/Hero';
import styles from './Header.module.css';

const Header = ({ img, ...rest }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1000);
    return () => {
      clearTimeout(timeout);
      setShow(false);
    };
  }, [img]);

  return (
    <Hero img={img}>
      <div className={styles.inner}>
        <div className={show ? styles.show : styles.hide}>
          <MainInfo {...rest} />
        </div>
      </div>
    </Hero>
  );
};

export default Header;
