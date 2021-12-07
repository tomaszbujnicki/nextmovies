import React from 'react';
import Carousel from './Carousel';
import PersonCard from './PersonCard';
import ProductionCard from './ProductionCard';
import VideoCard from './VideoCard';

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
  if (!Array.isArray(data) || !data.length) return null;
  const Card = cards[type];
  return (
    <Carousel itemWidth={cardWidth[type]}>
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
