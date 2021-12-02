import React from 'react';
import styles from './styles/Recommendations.module.css';
import ProductionCard from './ProductionCard';
import { CardCarousel } from './Carousel';

const Recommendations = ({ data }) => {
  if (!Array.isArray(data) || !data.length) return null;

  return (
    <CardCarousel>
      {data.map((production) => (
        <div key={production.id}>
          <ProductionCard production={production} />
        </div>
      ))}
    </CardCarousel>
  );
};

export default Recommendations;
