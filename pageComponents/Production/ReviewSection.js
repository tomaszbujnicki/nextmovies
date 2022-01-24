import React from 'react';
import CardList from '../../components/CardList';
import Section from '../../components/Section';

const ReviewSection = ({ reviews }) => {
  if (reviews.length === 0) {
    return null;
  }
  return (
    <Section title="Reviews">
      <CardList data={reviews} type="review" />
    </Section>
  );
};

export default ReviewSection;
