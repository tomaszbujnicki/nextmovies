import React from 'react';
import Section from '../components/Section';
import styles from './styles/Recommendations.module.css';
import ProductionCard from './ProductionCard';
import { CardCarousel } from './Carousel';

const Recommendations = ({ data }) => {
  if (!data) return null;
  return (
    <Section title="Recommendations">
      <Preview data={data} />
    </Section>
  );
};

export default Recommendations;

const Preview = ({ data }) => (
  <CardCarousel>
    {data.map((production) => (
      <div key={production.id}>
        <ProductionCard production={production} />
      </div>
    ))}
  </CardCarousel>
);
