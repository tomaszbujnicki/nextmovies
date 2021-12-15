import React, { useRef } from 'react';
import PersonCard from './PersonCard';
import ProductionCard from './ProductionCard';
import VideoCard from './VideoCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { LeftButton, RightButton } from './Button';
import styles from './styles/CardList.module.css';

const cards = {
  person: {
    component: PersonCard,
    width: 185,
    gap: '1rem',
  },
  production: {
    component: ProductionCard,
    width: 185,
    gap: '0',
  },
  video: {
    component: VideoCard,
    width: 480,
    gap: '1rem',
  },
};

const CardList = ({ data, type }) => {
  const ref = useRef();

  if (!Array.isArray(data) || !data.length) return null;

  const Component = cards[type].component;
  const width = cards[type].width;
  const gap = cards[type].gap;

  const options = {
    pagination: false,
    keyboard: false,
    slideFocus: false,
    arrows: true,
    fixedWidth: width,
    gap: gap,
  };

  return (
    <div className={styles.root}>
      <Splide
        ref={ref}
        options={options}
        renderControls={() => <Controls />}
        //renderControls={() => <Controls splide={ref} />}
        // renderControls={() => (
        //   <div className="splide__arrows">
        //     <button className="splide__arrow splide__arrow--prev xd"></button>
        //     <button className="splide__arrow splide__arrow--next xd"></button>
        //   </div>
        // )}
        onArrowsMounted={(splide, prev, next) => {
          console.log(prev, next);
        }}
        Extensions={{ MyExtension }}
      >
        {data.map((item) => (
          <SplideSlide key={item.id}>
            <Component {...item} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CardList;

const MyExtension = (Splide, Components, options) => {
  const controller = Components.Controller;
  const elements = Components.Elements;
  const arrows = Components.Arrows;
  console.log('arrows: ', arrows);

  const mount = () => {
    Splide.on('refresh', jumpToFirst);
    Splide.on('resize', setPerMove);
    Splide.on('mounted', setPerMove);
    Splide.on('moved', preventIndex);
    Splide.on('arrows:mounted', () => {
      console.log('arrows -------->');
      console.log(arrows);
    });
  };

  const jumpToFirst = () => {
    controller.go(0);
  };

  const setPerMove = () => {
    setTimeout(() => {
      const visibleCount = elements.slides.filter((el) =>
        el.classList.contains('is-visible')
      ).length;
      Splide.options = { perMove: visibleCount };
    }, 0);
  };

  const preventIndex = () => {
    const index = controller.getIndex();
    const slideCount = elements.slides.length;
    const lastIndexToActive = slideCount - options.perMove;
    if (index > lastIndexToActive) {
      controller.setIndex(lastIndexToActive);
    }
  };

  return {
    mount,
  };
};

const Controls = () => {
  return (
    <div className="splide__arrows">
      <RightButton
        className={`splide__arrow splide__arrow--prev ${styles.button} ${styles.buttonLeft}`}
        classNameInner={styles.svg}
      />
      <RightButton
        className={`splide__arrow splide__arrow--next ${styles.button}`}
        classNameInner={styles.svg}
      />
    </div>
  );
};
