import React from 'react';
import CardList from '../../components/CardList';
import Section from '../../components/Section';

const RecommendationSection = ({ recommendations }) => {
  if (reviews.length === 0) {
    return null;
  }
  return (
    <Section title="Recommendations">
      <CardList data={recommendations} type="movie" />
    </Section>
  );
};

export default RecommendationSection;
