import React from 'react';
import CardList from '../../components/CardList';
import Section from '../../components/Section';

const CardListSection = ({ title, type, arr }) => {
  if (arr.length === 0) {
    return null;
  }
  return (
    <Section title={title}>
      <CardList data={arr} type={type} />
    </Section>
  );
};

export default CardListSection;
