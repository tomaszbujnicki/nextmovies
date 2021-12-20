import React, { useRef } from 'react';
import PersonCard from './PersonCard';
import MovieCard from './MovieCard';
import TvCard from './TvCard';
import VideoCard from './VideoCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { RightButton } from './Button';
import styles from './styles/CardList.module.css';

const cards = {
  person: {
    component: PersonCard,
    width: 185,
    gap: '1rem',
  },
  movie: {
    component: MovieCard,
    width: 185,
    gap: '0',
  },
  tv: {
    component: TvCard,
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

  const mount = () => {
    Splide.on('refresh', () => {
      controller.go(0);
      setOptions();
    });
    Splide.on('resize', setOptions);
    Splide.on('mounted', setOptions);
    Splide.on('move', preventIndex);
  };

  const setOptions = () => {
    setTimeout(() => {
      const visibleCount = elements.slides.filter((el) =>
        el.classList.contains('is-visible')
      ).length;
      Splide.options = { perMove: visibleCount, perPage: visibleCount };
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
