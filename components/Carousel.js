import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { LeftArrow, RightArrow } from '../assets/SvgButtons';
import styles from './styles/Carousel.module.css';

const ButtonGroup = ({ next, previous, ...rest }) => {
  const {
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  const leftClass =
    currentSlide === 0 ? `${styles.left} ${styles.disable}` : styles.left;
  const rightClass =
    currentSlide >= totalItems - slidesToShow
      ? `${styles.right} ${styles.disable}`
      : styles.right;

  return (
    <div className="carousel-button-group">
      <button className={leftClass} onClick={() => previous()}>
        <LeftArrow className={styles.svg} />
      </button>
      <button className={rightClass} onClick={() => next()}>
        <RightArrow className={styles.svg} />
      </button>
    </div>
  );
};

const Carousel = ({ children, responsive, sliderClass, itemWidth }) => {
  const path = useRouter().asPath;
  const ref = useRef(null);

  useEffect(() => {
    ref.current.goToSlide(0);
  }, [path]);

  return (
    <div className={styles.root}>
      <MultiCarousel
        ref={(el) => {
          ref.current = el;
        }}
        responsive={responsive || getResponsive(itemWidth)}
        ssr={false}
        swipeable={false}
        draggable={false}
        transitionDuration={1000}
        itemClass={styles.item}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        sliderClass={sliderClass}
      >
        {children}
      </MultiCarousel>
    </div>
  );
};

export default Carousel;

const getResponsive = (itemWidth) => {
  const margin = 160;
  const getCardCount = (width) => {
    const count = Math.floor((width - margin) / itemWidth);
    return count > 0 ? count : 1;
  };

  const breakpoints = [
    { name: 'a', min: 0 },
    { name: 'b', min: 400 },
    { name: 'c', min: 600 },
    { name: 'd', min: 800 },
    { name: 'e', min: 1000 },
    { name: 'f', min: 1200 },
    { name: 'g', min: 1400 },
    { name: 'h', min: 1600 },
    { name: 'i', min: 1800 },
    { name: 'j', min: 2000 },
    { name: 'k', min: 2200 },
    { name: 'l', min: 2400 },
    { name: 'm', min: 2600 },
    { min: 10000 },
  ];

  const responsive = {};

  for (let i = 0; i < breakpoints.length - 1; i++) {
    const item = breakpoints[i];
    const max = breakpoints[i + 1].min;
    const cardCount = getCardCount(item.min);
    responsive[item.name] = {
      breakpoint: { max: max, min: item.min },
      items: cardCount,
      slidesToSlide: cardCount,
    };
  }

  return responsive;
};
