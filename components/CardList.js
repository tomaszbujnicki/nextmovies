import React from 'react';
import { Carousel } from './Carousel';

const CardList = ({ data, Card, cardWidth }) => {
  if (!Array.isArray(data) || !data.length) return null;
  return (
    <Carousel responsive={getResponsive(cardWidth)}>
      {data.map((item) => (
        <div
          key={item.id}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Card {...item} />
        </div>
      ))}
    </Carousel>
  );
};

export default CardList;

const getResponsive = (cardWidth) => {
  const margin = 160;
  const getCardCount = (width) => {
    const count = Math.floor((width - margin) / cardWidth);
    return count > 0 ? count : 1;
  };

  const breakpoints = [
    { name: 'xxs', min: 0 },
    { name: 'xs', min: 576 },
    { name: 'sm', min: 768 },
    { name: 'md', min: 992 },
    { name: 'lg', min: 1200 },
    { name: 'xl', min: 1800 },
    { name: 'xxl', min: 2500 },
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
