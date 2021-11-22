import React from 'react';
import NextHead from 'next/head';

const Head = ({ title }) => {
  return (
    <NextHead>
      <title>{title} - NextMovies</title>
    </NextHead>
  );
};

export default Head;
