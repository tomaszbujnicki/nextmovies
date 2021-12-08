import React from 'react';
import Carousel from './Carousel';
import ActorCard from './ActorCard';
import CrewCard from './CrewCard';
import ProductionCard from './ProductionCard';
import VideoCard from './VideoCard';

const cards = {
  actor: ActorCard,
  crew: CrewCard,
  production: ProductionCard,
  video: VideoCard,
};

const cardWidth = {
  actor: 185,
  crew: 185,
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
