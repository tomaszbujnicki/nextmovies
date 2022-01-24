import React from 'react';
import MainInfo from '../../components/MainInfo';
import Hero from '../../components/Hero';
import styles from './Header.module.css';

const Header = ({ img, ...rest }) => {
  return (
    <Hero img={img}>
      <div className={styles.inner}>
        <MainInfo {...rest} />
      </div>
    </Hero>
  );
};

export default Header;
