import React from 'react';
import { CardCarousel } from './Carousel';

const CardList = ({ data, Card }) => {
  if (!Array.isArray(data) || !data.length) return null;
  console.log(data);
  return (
    <CardCarousel>
      {data.map((item) => (
        <div key={item.id}>
          <Card {...item} />
        </div>
      ))}
    </CardCarousel>
  );
};

export default CardList;
