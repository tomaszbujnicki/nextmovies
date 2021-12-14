import React, { useRef, useEffect } from 'react';
import PersonCard from './PersonCard';
import ProductionCard from './ProductionCard';
import VideoCard from './VideoCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LeftButton, RightButton } from './Button';
import styles from './styles/CardList.module.css';

const cards = {
  person: PersonCard,
  production: ProductionCard,
  video: VideoCard,
};

const cardWidth = {
  person: 185,
  production: 185,
  video: 480,
};

const CardList = ({ data, type }) => {
  const ref = useRef();

  useEffect(() => {
    console.log('useEffect');
    const onMoveHandler = () => console.log('Move');
    ref.current.splide.on('move', onMoveHandler);
  }, []);

  if (!Array.isArray(data) || !data.length) return null;

  const Card = cards[type];

  const options = {
    pagination: false,
    keyboard: false,
    slideFocus: false,
    arrows: false,
    type: 'loop',
    fixedWidth: cardWidth[type],
    perMove: 8,
    gap: '1rem',
  };

  return (
    <div className={styles.root}>
      <Splide
        ref={ref}
        options={options}
        renderControls={() => <Controls slider={ref} />}
      >
        {data.map((item) => (
          <SplideSlide
            key={item.id}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card {...item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CardList;

const Controls = ({ slider }) => (
  <div>
    <LeftButton
      className={`${styles.button} ${styles.buttonLeft}`}
      classNameInner={styles.svg}
      onClick={() => {
        slider.current.go('<');
        console.log(slider.current.slides);
        console.log(slider.current);
      }}
    />
    <RightButton
      className={styles.button}
      classNameInner={styles.svg}
      onClick={() => {
        console.log(slider.current.slides);
        slider.current.go('>');
      }}
    />
  </div>
);
