import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { LeftArrow, RightArrow } from '../assets/SvgButtons';
import styles from './styles/Carousel.module.css';

const responsiveCard = {
  superLargeDesktop: {
    // the naming can be any
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const responsiveVideo = {
  superLargeDesktop: {
    // the naming can be any
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

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

const Carousel = ({ children, responsive, sliderClass }) => {
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
        responsive={responsive}
        ssr={false}
        swipeable={false}
        draggable={false}
        transitionDuration={1000}
        itemClass={styles.item}
        arrows={false}
        showDots={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        sliderClass={sliderClass}
      >
        {children}
      </MultiCarousel>
    </div>
  );
};

export const CardCarousel = ({ children }) => {
  return <Carousel responsive={responsiveCard}>{children}</Carousel>;
};

export const VideoCarousel = ({ children }) => {
  return (
    <Carousel responsive={responsiveVideo} sliderClass={styles.sliderVideo}>
      {children}
    </Carousel>
  );
};
